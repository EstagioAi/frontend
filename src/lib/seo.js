// Lightweight SEO helpers for a React SPA (client-side)
// Updates <title>, meta tags, canonical, Open Graph, Twitter, and JSON-LD

export function setTitle(title) {
  if (typeof document === "undefined") return;
  document.title = title || document.title;
}

function upsertTag(selector, createEl) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = createEl();
    document.head.appendChild(el);
  }
  return el;
}

export function setMetaName(name, content) {
  if (typeof document === "undefined" || !name || !content) return;
  const el = upsertTag(`meta[name="${name}"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute("name", name);
    return m;
  });
  el.setAttribute("content", content);
}

export function setMetaProperty(property, content) {
  if (typeof document === "undefined" || !property || !content) return;
  const el = upsertTag(`meta[property="${property}"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute("property", property);
    return m;
  });
  el.setAttribute("content", content);
}

export function setCanonical(url) {
  if (typeof document === "undefined" || !url) return;
  const el = upsertTag('link[rel="canonical"]', () => {
    const l = document.createElement("link");
    l.setAttribute("rel", "canonical");
    return l;
  });
  el.setAttribute("href", url);
}

export function setJsonLd(obj) {
  if (typeof document === "undefined" || !obj) return;
  const el = upsertTag('script[type="application/ld+json"][data-managed="seo"]', () => {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.setAttribute("data-managed", "seo");
    return s;
  });
  el.textContent = JSON.stringify(obj);
}

export function setBasicTags({
  title,
  description,
  canonical,
  og = {},
  twitter = {},
  jsonLd,
}) {
  if (title) setTitle(title);
  if (description) setMetaName("description", description);
  if (canonical) setCanonical(canonical);

  const ogTitle = og.title || title;
  const ogDesc = og.description || description;

  if (ogTitle) setMetaProperty("og:title", ogTitle);
  if (ogDesc) setMetaProperty("og:description", ogDesc);
  if (og.url) setMetaProperty("og:url", og.url);
  if (og.type) setMetaProperty("og:type", og.type);
  if (og.site_name) setMetaProperty("og:site_name", og.site_name);
  if (og.image) setMetaProperty("og:image", og.image);

  const twTitle = twitter.title || ogTitle || title;
  const twDesc = twitter.description || ogDesc || description;

  if (twitter.card) setMetaName("twitter:card", twitter.card);
  if (twitter.site) setMetaName("twitter:site", twitter.site);
  if (twTitle) setMetaName("twitter:title", twTitle);
  if (twDesc) setMetaName("twitter:description", twDesc);
  if (twitter.image || og.image) setMetaName("twitter:image", twitter.image || og.image);

  if (jsonLd) setJsonLd(jsonLd);
}

