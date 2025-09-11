import React from "react";
import "./App.css";
import { Suspense, lazy } from 'react'

// Home deve renderizar imediatamente para reduzir Render Delay do LCP
import Home from './pages/Home'
const Login = lazy(() => import('./pages/Login.jsx'))
const Register = lazy(() => import('./pages/Register.jsx'))
const TermsOfUse = lazy(() => import('./pages/TermsOfUse.jsx'))
const TermsOfService = lazy(() => import('./pages/TermsOfService.jsx'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'))
const SupportStudents = lazy(() => import('./pages/SupportStudents.jsx'))
const HelpCenter = lazy(() => import('./pages/HelpCenter.jsx'))
const ImproveProfile = lazy(() => import('./pages/ImproveProfile.jsx'))
const SupportCompanies = lazy(() => import('./pages/SupportCompanies.jsx'))
const PostJobsGuide = lazy(() => import('./pages/PostJobsGuide.jsx'))
const PricingPlans = lazy(() => import('./pages/PricingPlans.jsx'))
const CommercialContact = lazy(() => import('./pages/CommercialContact.jsx'))
const CompanyJobs = lazy(() => import('./pages/companies/CompanyJobs.jsx'))
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmConstrucao from "./pages/EmConstrucao";
import RouteSEO from "./components/RouteSEO.jsx";
const Sobre = lazy(() => import('./pages/Sobre.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const MuralDeVagas = lazy(() => import('./pages/MuralDeVagas.jsx'))
const Contato = lazy(() => import('./pages/Contato.jsx'))


function App() {
  return (
    <BrowserRouter>
      {/* SEO dinâmico por rota */}
      <RouteSEO />
  <Suspense fallback={<div style={{padding:'4rem',textAlign:'center'}}>Carregando…</div>}>
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
        <Route path="/mural-de-vagas" element={<MuralDeVagas />} />
        <Route path="/contato" element={<Contato />} />

        <Route path="/empresas/:slug" element={<CompanyJobs />} />
        <Route path="/em-construcao" element={<EmConstrucao />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
