import React from "react";
import BarraNavegacao from "@/components/BarraNavegacao/BarraNavegacao";
import Rodape from "@/components/Rodape/Rodape";
import Depoimentos from "@/pages/Home/Components/Depoimentos/Depoimentos";
import Solucoes from "@/pages/Home/Components/Solucoes/Solucoes";
import Problemas from "@/pages/Home/Components/Problemas/Problemas";
import SecaoInicial from "@/pages/Home/Components/SecaoInicial/SecaoInicial";
import Funcionalidades from "@/pages/Home/Components/Funcionalidades/Funcionalidades";
import Formularios from "@/pages/Home/Components/Formularios/Formularios";
import CapturaEmail from "@/pages/Home/Components/CapturaEmail/CapturaEmail";
import Feedback from "@/pages/Home/Components/Feedback/Feedback";
import FormatoUnificado from "@/pages/Home/Components/FormatoUnificado/FormatoUnificado";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-foreground overflow-x-hidden">
      <BarraNavegacao />
      <SecaoInicial />
      <Problemas />
      <Solucoes />
      <Feedback />
      <FormatoUnificado />
      <Funcionalidades />
      <Depoimentos />
      <CapturaEmail />
      <Formularios />
      <Rodape />
    </div>
  );
};

export default Home;
