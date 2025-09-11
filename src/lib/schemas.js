// Helpers para construir JSON-LD adicionais (FAQ, Article, ItemList)
export function buildFaqSchema(faqItems = []) {
  if (!faqItems.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a }
    }))
  }
}

export function buildArticleSchema({ title, description, url, image, datePublished, dateModified, author, tags = [] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image ? [image] : undefined,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: author ? { '@type': 'Person', name: author } : undefined,
    keywords: tags.join(', ')
  }
}

export function buildItemListSchema({ url, items }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      url: it.url
    }))
  }
}
