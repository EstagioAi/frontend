// Script para gerar variações otimizadas (AVIF/WEBP) das imagens do Hero e logos
// Requer: npm i -D sharp
// Uso (PowerShell): pnpm dlx sharp-cli
// Aqui implementamos via sharp programaticamente.

import sharp from 'sharp'
import { mkdir, stat } from 'fs/promises'
import path from 'path'

const root = process.cwd()
const heroSrc = path.join(root, 'public', 'diverse-students-celebrating-internship-success.png')
const heroOutDir = path.join(root, 'public', 'hero')
const heroSizes = [320, 480, 640, 880]

async function ensure(dir){try{await stat(dir)}catch{await mkdir(dir,{recursive:true})}}

async function buildHero(){
  await ensure(heroOutDir)
  for (const size of heroSizes){
    const base = path.join(heroOutDir, `hero-${size}`)
    await sharp(heroSrc).resize(size, size).toFormat('webp', {quality:72}).toFile(base + '.webp')
    await sharp(heroSrc).resize(size, size).toFormat('avif', {quality:55}).toFile(base + '.avif')
  }
  console.log('Hero images geradas.')
}

const logos = ['google','amazon','netflix','meta','ibm','microsft']
const logosDir = path.join(root, 'public', 'companies')
async function buildLogos(){
  for (const name of logos){
    const src = path.join(logosDir, `${name}.png`)
    // gerar 48 e 96 (2x) WebP
    await sharp(src).resize(48,48,{fit:'contain',background:{r:255,g:255,b:255,alpha:0}}).toFormat('webp',{quality:80}).toFile(path.join(logosDir, `${name}-48.webp`))
    await sharp(src).resize(96,96,{fit:'contain',background:{r:255,g:255,b:255,alpha:0}}).toFormat('webp',{quality:80}).toFile(path.join(logosDir, `${name}-96.webp`))
  }
  console.log('Logos otimizadas.')
}

await buildHero()
await buildLogos()

console.log('Concluido. Atualize o Lighthouse para ver ganhos.')
