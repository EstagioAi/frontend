import React from "react";
import Home from "./pages/Home";
import "./App.css";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import TermsOfUse from "./pages/TermsOfUse.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import SupportStudents from "./pages/SupportStudents.jsx";
import HelpCenter from "./pages/HelpCenter.jsx";
import ImproveProfile from "./pages/ImproveProfile.jsx";
import SupportCompanies from "./pages/SupportCompanies.jsx";
import PostJobsGuide from "./pages/PostJobsGuide.jsx";
import PricingPlans from "./pages/PricingPlans.jsx";
import CommercialContact from "./pages/CommercialContact.jsx";
import CompanyJobs from "./pages/companies/CompanyJobs.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmConstrucao from "./pages/EmConstrucao";
import RouteSEO from "./components/RouteSEO.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* SEO dinâmico por rota */}
      <RouteSEO />
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
        <Route path="/empresas/:slug" element={<CompanyJobs />} />
        <Route path="/em-construcao" element={<EmConstrucao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
