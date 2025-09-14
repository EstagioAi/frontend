import { readdir, stat, mkdir, writeFile, copyFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join, dirname, relative, resolve, basename } from 'node:path';
import sharp from 'sharp';

// Config
const ROOT = resolve(process.cwd());
const PUBLIC_DIR = join(ROOT, 'public');
const SRC_DIR = join(ROOT, 'src');
const NEW_BASE = join(PUBLIC_DIR, 'images');

// Folder mapping rules for organization
// We place logos under images/logos, company logos under images/companies,
// backgrounds/hero under images/backgrounds, blog covers under images/blog,
// ui icons under images/icons, and misc under images/misc.
function categorize(filename, relDir) {
  const name = filename.toLowerCase();
  const rel = relDir.toLowerCase().replaceAll('\\', '/');
  if (rel.startsWith('companies') || name.includes('amazon') || name.includes('google') || name.includes('ibm') || name.includes('meta') || name.includes('netflix') || name.includes('microsoft') || name.includes('microsft')) {
    return ['companies', filename.replace(/\.(png|jpg|jpeg|webp)$/i, '.webp')];
  }
  if (name.includes('logo') || name === 'favicon.ico') {
    return ['logos', filename.replace(/\.(png|jpg|jpeg|webp)$/i, '.webp')];
  }
  if (name.includes('background') || name.includes('hero')) {
    return ['backgrounds', filename.replace(/\.(png|jpg|jpeg|webp)$/i, '.webp')];
  }
  if (name.includes('envelope') || name.includes('github') || name.includes('linkedin') || name.endsWith('.svg')) {
    return ['icons', filename]; // keep svg extension
  }
  if (name.includes('curriculo') || name.includes('perguntas') || name.includes('primeiro-estagio') || name.includes('company-login') || rel.includes('blog')) {
    return ['blog', filename.replace(/\.(png|jpg|jpeg|webp)$/i, '.webp')];
  }
  return ['misc', filename.replace(/\.(png|jpg|jpeg|webp)$/i, '.webp')];
}

async function ensureDir(p) {
  if (!existsSync(p)) await mkdir(p, { recursive: true });
}

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...(await listFiles(full)));
    } else {
      files.push(full);
    }
  }
  return files;
}

const RASTER = new Set(['.png', '.jpg', '.jpeg', '.webp']);

async function convertIfNeeded(srcPath, destPath) {
  const ext = extname(srcPath).toLowerCase();
  if (ext === '.svg' || ext === '.ico' || ext === '.txt' || ext === '.xml') {
    // Copy as-is
    await ensureDir(dirname(destPath));
    await copyFile(srcPath, destPath);
    return { converted: false, copied: true };
  }
  if (!RASTER.has(ext)) return { skipped: true };

  const outputExt = extname(destPath).toLowerCase();
  const finalDest = outputExt === '.webp' ? destPath : destPath.replace(/\.[^.]+$/, '.webp');
  await ensureDir(dirname(finalDest));

  // Use sharp to convert raster to webp
  const img = sharp(srcPath, { limitInputPixels: false });
  // Detect if input has alpha; if so, use lossless for best quality
  const metadata = await img.metadata();
  const hasAlpha = !!metadata.hasAlpha;
  const quality = hasAlpha ? 90 : 82;
  await img.webp({ quality, effort: 6 }).toFile(finalDest);
  return { converted: true, dest: finalDest };
}

async function main() {
  console.log('Scanning images in public/ and src/assets...');
  const publicFiles = existsSync(PUBLIC_DIR) ? await listFiles(PUBLIC_DIR) : [];
  const assetFiles = existsSync(SRC_DIR) ? await listFiles(join(SRC_DIR, 'assets')) : [];
  const files = [...publicFiles, ...assetFiles];

  const changes = [];

  for (const f of files) {
    const rel = relative(PUBLIC_DIR, f);
    const inPublic = !rel.startsWith('..');

    // Only handle media types we're interested in
    const ext = extname(f).toLowerCase();
    if (!['.png', '.jpg', '.jpeg', '.webp', '.svg', '.ico'].includes(ext)) continue;

    // Skip sitemaps and robots
    if (f.includes('sitemap') || f.endsWith('robots.txt')) continue;

    // Determine new path under NEW_BASE
    const relDir = inPublic ? dirname(rel) : 'src/assets';
    const baseName = basename(f);
    const [category, newName] = categorize(baseName, relDir);
    const destRel = join('images', category, newName);
    const destAbs = join(PUBLIC_DIR, category ? join('images', category) : 'images', newName);

    const res = await convertIfNeeded(f, destAbs);
    changes.push({ from: f, to: destAbs, ...res });
  }

  // Write a manifest mapping old public paths (web URLs) to new ones
  const manifest = {};
  for (const c of changes) {
    const from = c.from;
    if (from.includes('public')) {
      const urlFrom = '/' + relative(PUBLIC_DIR, from).replaceAll('\\', '/');
      const urlTo = '/' + relative(PUBLIC_DIR, c.to || from).replaceAll('\\', '/');
      manifest[urlFrom] = urlTo;
    } else if (from.includes('src')) {
      // assets imports become /images/... at runtime (served from public)
      const fileName = basename(from);
      const [category, newName] = categorize(fileName, 'src/assets');
      const urlTo = '/images/' + category + '/' + newName;
      manifest['/assets/' + fileName] = urlTo;
    }
  }

  await ensureDir(join(ROOT, 'scripts'));
  const manifestPath = join(ROOT, 'scripts', 'images-manifest.json');
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
  console.log(`Manifest written to ${manifestPath} with ${Object.keys(manifest).length} entries.`);

  console.log('Done. Review changes and update references to new paths.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
