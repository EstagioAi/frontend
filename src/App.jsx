import React from "react";
const Home = React.lazy(() => import("./pages/Home"));
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
import { BrowserRouter, Routes, Route } from "react-router-dom";
const EmConstrucao = React.lazy(() => import("./pages/EmConstrucao"));
import RouteSEO from "./components/RouteSEO.jsx";
const Sobre = React.lazy(() => import("./pages/Sobre.jsx"));
const Blog = React.lazy(() => import("./pages/Blog.jsx"));
const BlogPost = React.lazy(() => import("./pages/blog/Post.jsx"));
const MuralDeVagas = React.lazy(() => import("./pages/MuralDeVagas.jsx"));
const Contato = React.lazy(() => import("./pages/Contato.jsx"));
const ResumeTemplates = React.lazy(() => import("./pages/ResumeTemplates.jsx"));


function App() {
  return (
    <BrowserRouter>
      {/* SEO dinâmico por rota */}
      <RouteSEO />
      <React.Suspense fallback={<div />}> 
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
        <Route path="/mural-de-vagas" element={<MuralDeVagas />} />
        <Route path="/contato" element={<Contato />} />
  <Route path="/modelos-de-curriculo" element={<ResumeTemplates />} />

        <Route path="/empresas/:slug" element={<CompanyJobs />} />
        <Route path="/em-construcao" element={<EmConstrucao />} />
  </Routes>
  </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
