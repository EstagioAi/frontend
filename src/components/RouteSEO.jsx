import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import getSEO from "../seoConfig";
import { setBasicTags } from "../lib/seo";
import { submitIndexNow } from "../lib/indexnow";
import { useSubdomain } from "../hooks/use-subdomain";

const SITE_NAME = "Estágio AI";
const BASE_URL = "https://estagioai.com";
const COMPANIES_BASE_URL = "https://empresas.estagioai.com";
const DEFAULT_IMAGE = `${BASE_URL}/images/backgrounds/estagioai-background.webp`; // WEBP otimizado; considere fallback PNG para Open Graph se necessário

export default function RouteSEO() {
  const location = useLocation();
  const { subdomain, isCompaniesSubdomain } = useSubdomain();

  useEffect(() => {
    const { pathname, search, hash } = location;
    const baseUrl = isCompaniesSubdomain ? COMPANIES_BASE_URL : BASE_URL;
    const canonicalUrl = `${baseUrl}${pathname || ""}${search || ""}${hash || ""}`;
    const meta = getSEO(pathname, subdomain);

    const siteName = isCompaniesSubdomain ? "EstágioAI para Empresas" : SITE_NAME;
    const title = meta.title || siteName;
    const defaultDescription = isCompaniesSubdomain 
      ? "Plataforma completa de recrutamento e seleção de estagiários com IA, banco de talentos automático e sistema de feedback inteligente."
      : "Plataforma inteligente para encontrar e divulgar vagas de estágio com rapidez, transparência e melhor compatibilidade.";
    const description = meta.description || defaultDescription;

    setBasicTags({
      title,
      description,
      canonical: canonicalUrl,
      og: {
        title,
        description,
        url: canonicalUrl,
        type: meta.ogType || "website",
        site_name: siteName,
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
      keywords: meta.keywords,
    });

  // Dispara IndexNow em produção a cada mudança de rota
  submitIndexNow(canonicalUrl)
  }, [location]);

  return null;
}

