import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import getSEO from "../seoConfig";
import { setBasicTags, setMetaProperty, setMetaName } from "../lib/seo";

const SITE_NAME = "Estágio AI";
const BASE_URL = "https://estagioai.com";
const DEFAULT_IMAGE = `${BASE_URL}/estagioai-background.png`; // PNG recomendado para social crawlers

export default function RouteSEO() {
  const location = useLocation();

  useEffect(() => {
    const { pathname, search, hash } = location;
    const canonicalUrl = `${BASE_URL}${pathname || ""}${search || ""}${hash || ""}`;
    const meta = getSEO(pathname);

    const title = meta.title || SITE_NAME;
    const description = meta.description || "Plataforma inteligente para encontrar e divulgar vagas de estágio com rapidez, transparência e melhor compatibilidade.";

    // Breadcrumbs JSON-LD (simple path segments)
    const segments = pathname.split('/').filter(Boolean)
    const breadcrumbItems = segments.map((seg, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: decodeURIComponent(seg.replace(/-/g, ' ')),
      item: `${BASE_URL}/${segments.slice(0, idx + 1).join('/')}`
    }))

    const webSiteJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: BASE_URL,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${BASE_URL}/mural-de-vagas?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    }

    const breadcrumbJsonLd = breadcrumbItems.length ? {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems
    } : null

    const mergedJsonLd = breadcrumbJsonLd ? [webSiteJsonLd, breadcrumbJsonLd, meta.jsonLd].filter(Boolean) : [webSiteJsonLd, meta.jsonLd].filter(Boolean)

  setBasicTags({
      title,
      description,
      canonical: canonicalUrl,
      og: {
        title,
        description,
        url: canonicalUrl,
        type: meta.ogType || "website",
        site_name: SITE_NAME,
        image: meta.ogImage || DEFAULT_IMAGE,
      },
      twitter: {
        card: "summary_large_image",
        site: "@", // adicione @seu-perfil se houver
        title,
        description,
        image: meta.twitterImage || meta.ogImage || DEFAULT_IMAGE,
      },
      jsonLd: mergedJsonLd.length === 1 ? mergedJsonLd[0] : mergedJsonLd,
    });

  // Locale fixo (pode tornar dinâmico se houver i18n)
  setMetaProperty('og:locale', 'pt_BR');

  // Robots refinado (se quiser personalizar por rota, adicione "robots" em seoConfig e leia aqui)
  const robotsValue = meta.robots || 'index,follow,max-image-preview:large';
  setMetaName('robots', robotsValue);
  }, [location]);

  return null;
}

