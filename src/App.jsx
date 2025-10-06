import React from "react";
const Home = React.lazy(() => import("./pages/home"));
const CompaniesPage = React.lazy(() => import("./pages/companies"));
import "./App.css";
const Login = React.lazy(() => import("./pages/login"));
const Register = React.lazy(() => import("./pages/register"));
const TermsOfUse = React.lazy(() => import("./pages/terms-of-use"));
const TermsOfService = React.lazy(() => import("./pages/terms-of-service"));
const PrivacyPolicy = React.lazy(() => import("./pages/privacy-policy"));
const SupportStudents = React.lazy(() => import("./pages/support-students"));
const HelpCenter = React.lazy(() => import("./pages/help-center"));
const ImproveProfile = React.lazy(() => import("./pages/improve-profile"));
const SupportCompanies = React.lazy(() => import("./pages/support-companies"));
const PostJobsGuide = React.lazy(() => import("./pages/post-jobs-guide"));
const PricingPlans = React.lazy(() => import("./pages/pricing-plans"));
const CommercialContact = React.lazy(() => import("./pages/commercial-contact"));
const CompanyJobs = React.lazy(() => import("./pages/companies/CompanyJobs.jsx"));
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const EmConstrucao = React.lazy(() => import("./pages/em-construcao"));
import RouteSEO from "./components/RouteSEO.jsx";
const Sobre = React.lazy(() => import("./pages/sobre"));
const Blog = React.lazy(() => import("./pages/blog"));
const BlogPost = React.lazy(() => import("./pages/blog/Post.jsx"));
const MuralDeVagas = React.lazy(() => import("./pages/mural-de-vagas"));
const RadarDeVagas = React.lazy(() => import("./pages/radar-de-vagas"));
const Contato = React.lazy(() => import("./pages/contato"));
const ResumeTemplates = React.lazy(() => import("./pages/resume-templates"));
const ResumeChecker = React.lazy(() => import("./pages/resume-checker"));
const Vagas = React.lazy(() => import("./pages/vagas"));
const Empresas = React.lazy(() => import("./pages/empresas"));
const Universidades = React.lazy(() => import("./pages/universidades"));
const NotFound = React.lazy(() => import("./pages/not-found"));
import { useSubdomain } from "./hooks/use-subdomain.js";
const LoadingSpinner = React.lazy(() => import("./components/ui/LoadingSpinner.jsx"));

function App() {
  const { isCompaniesSubdomain } = useSubdomain();

  return (
    <BrowserRouter>
      {/* SEO dinâmico por rota */}
      <RouteSEO />
      <React.Suspense fallback={
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white via-[#F8FFFE] to-[#F0FFF7]" role="status" aria-label="Carregando página">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-3 border-green-ds border-t-transparent" aria-hidden="true"></div>
            <p className="text-sm font-medium text-gray-600 animate-pulse">Carregando...</p>
            <span className="sr-only">Carregando...</span>
          </div>
        </div>
      }> 
        {isCompaniesSubdomain ? (
          // Rotas para o subdomínio empresas.estagioai.com
          <Routes>
            <Route path="/" element={<CompaniesPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contato" element={<CommercialContact />} />
            <Route path="/planos-e-precos" element={<PricingPlans />} />
            <Route path="/suporte" element={<SupportCompanies />} />
            <Route path="/como-publicar-vagas" element={<PostJobsGuide />} />
            <Route path="/termos-de-uso" element={<TermsOfUse />} />
            <Route path="/termos-de-servico" element={<TermsOfService />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
            {/* Página 404 para rotas não encontradas */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        ) : (
          // Rotas padrão para o domínio principal
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/termos-de-uso" element={<TermsOfUse />} />
            <Route path="/termos-de-servico" element={<TermsOfService />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
            <Route path="/suporte-para-universitarios" element={<SupportStudents />} />
            <Route path="/central-de-ajuda" element={<HelpCenter />} />
            <Route path="/como-melhorar-seu-perfil" element={<ImproveProfile />} />
            <Route path="/suporte-para-empresas" element={<SupportCompanies />} />
            <Route path="/como-publicar-vagas" element={<PostJobsGuide />} />
            <Route path="/planos-e-precos" element={<PricingPlans />} />
            <Route path="/contato-comercial" element={<CommercialContact />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/radar-de-vagas" element={<RadarDeVagas />} />
            <Route path="/mural-de-vagas" element={<Navigate to="/radar-de-vagas" replace />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/modelos-de-curriculo" element={<ResumeTemplates />} />
            <Route path="/verificador-de-curriculo-ats" element={<ResumeChecker />} />
            <Route path="/vagas" element={<Vagas />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/universidades" element={<Universidades />} />
            <Route path="/empresas/:slug" element={<CompanyJobs />} />
            <Route path="/em-construcao" element={<EmConstrucao />} />
            {/* Página 404 para rotas não encontradas */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
