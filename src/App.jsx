import React from "react";
const Home = React.lazy(() => import("./pages/Home"));
const CompaniesPage = React.lazy(() => import("./pages/CompaniesPage"));
import "./App.css";
const Login = React.lazy(() => import("./pages/Login.jsx"));
const Register = React.lazy(() => import("./pages/Register.jsx"));
const TermsOfUse = React.lazy(() => import("./pages/TermsOfUse.jsx"));
const TermsOfService = React.lazy(() => import("./pages/TermsOfService.jsx"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy.jsx"));
const SupportStudents = React.lazy(() => import("./pages/SupportStudents.jsx"));
const HelpCenter = React.lazy(() => import("./pages/HelpCenter.jsx"));
const ImproveProfile = React.lazy(() => import("./pages/ImproveProfile.jsx"));
const SupportCompanies = React.lazy(() => import("./pages/SupportCompanies.jsx"));
const PostJobsGuide = React.lazy(() => import("./pages/PostJobsGuide.jsx"));
const PricingPlans = React.lazy(() => import("./pages/PricingPlans.jsx"));
const CommercialContact = React.lazy(() => import("./pages/CommercialContact.jsx"));
const CompanyJobs = React.lazy(() => import("./pages/companies/CompanyJobs.jsx"));
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const EmConstrucao = React.lazy(() => import("./pages/EmConstrucao"));
import RouteSEO from "./components/RouteSEO.jsx";
const Sobre = React.lazy(() => import("./pages/Sobre.jsx"));
const Blog = React.lazy(() => import("./pages/Blog.jsx"));
const BlogPost = React.lazy(() => import("./pages/blog/Post.jsx"));
const MuralDeVagas = React.lazy(() => import("./pages/MuralDeVagas.jsx"));
const RadarDeVagas = React.lazy(() => import("./pages/RadarDeVagas.jsx"));
const Contato = React.lazy(() => import("./pages/Contato.jsx"));
const ResumeTemplates = React.lazy(() => import("./pages/ResumeTemplates.jsx"));
const ResumeChecker = React.lazy(() => import("./pages/ResumeChecker.jsx"));
const Vagas = React.lazy(() => import("./pages/Vagas.jsx"));
const Empresas = React.lazy(() => import("./pages/Empresas.jsx"));
const Universidades = React.lazy(() => import("./pages/Universidades.jsx"));
import { useSubdomain } from "./hooks/use-subdomain.js";


function App() {
  const { isCompaniesSubdomain } = useSubdomain();

  return (
    <BrowserRouter>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-main">
        Pular para o conteúdo principal
      </a>
      {/* SEO dinâmico por rota */}
      <RouteSEO />
      <React.Suspense fallback={<div />}> 
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
            {/* Redireciona outras rotas para a página principal de empresas */}
            <Route path="*" element={<Navigate to="/" replace />} />
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
          </Routes>
        )}
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
