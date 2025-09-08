import React from "react";
import Home from "./pages/Home";
import "./App.css";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import TermsOfUse from "./pages/TermsOfUse.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmConstrucao from "./pages/EmConstrucao";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/termos-de-uso" element={<TermsOfUse />} />
        <Route path="/termos-de-servico" element={<TermsOfService />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/em-construcao" element={<EmConstrucao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
