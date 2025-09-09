import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import getSEO from "../seoConfig";
import { setBasicTags } from "../lib/seo";

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
      jsonLd: meta.jsonLd,
    });
  }, [location]);

  return null;
}

