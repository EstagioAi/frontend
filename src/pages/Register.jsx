import React, { useState } from "react";
import { Button } from "@/components/ui/button.jsx";

// Página de Registro seguindo a mesma paleta do site
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrar backend real
    alert("Cadastro simulado com sucesso!");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Lado esquerdo com mensagem/branding */}
        <div className="flex items-center px-6 md:px-10 py-10">
          <div className="max-w-xl animate-fade-in-up">
            <p className="text-sm tracking-wider text-gray-500 font-medium mb-6">
              BEM-VINDO
            </p>
            <h1 className="text[40px] md:text-[48px] leading-[1.1] font-extrabold text-black mb-6">
              Crie sua conta
              <br />
              no EstagioAI
            </h1>
            <div className="h-2 w-44 rounded-full bg-[var(--color-coral-primary)] mb-8" />
            <p className="text-gray-700">
              Acesse oportunidades mais compatíveis com seu perfil, com filtros
              inteligentes e feedback obrigatório.
            </p>
            <div className="mt-10 text-gray-700">
              <span className="mr-2">Já tem conta?</span>
              <a
                href="/login"
                className="font-semibold text-[var(--color-coral-primary)] underline underline-offset-4 hover:text-[var(--color-coral-light)]"
              >
                Entrar
              </a>
            </div>
          </div>
        </div>

        {/* Lado direito com imagem + cartão (igual ao login) */}
        <div className="relative min-h-[70vh] md:min-h-screen">
          {/* Imagem de fundo */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/blog/company-login.webp')" }}
          />
          <div className="absolute inset-0 bg-black/35" />

          {/* Cartão de registro */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] md:w-[440px]">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 p-6 md:p-7 animate-scale-in">
              <div className="mb-2">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.back();
                  }}
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  &larr; Voltar
                </a>
              </div>
              <h2 className="text-center text-base font-bold text-gray-900 mb-4">
                Criar conta
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[var(--color-coral-primary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[var(--color-coral-primary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Senha
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Crie uma senha"
                    className="w-full px-4 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[var(--color-coral-primary)]"
                  />
                </div>

                <div className="text-xs md:text-sm">
                  <label className="flex items-start gap-2 select-none">
                    <input
                      type="checkbox"
                      checked={terms}
                      onChange={(e) => setTerms(e.target.checked)}
                      className="mt-1 rounded-md text-[var(--color-coral-primary)] focus:ring-[var(--color-coral-primary)]"
                    />
                    <span className="text-gray-700">
                      Aceito os
                      <a
                        href="/termos-de-uso"
                        className="underline underline-offset-4 text-[var(--color-coral-primary)] hover:text-[var(--color-coral-light)]"
                      >
                        {" "}
                        Termos de Uso
                      </a>
                      ,
                      <a
                        href="/termos-de-servico"
                        className="underline underline-offset-4 text-[var(--color-coral-primary)] hover:text-[var(--color-coral-light)]"
                      >
                        {" "}
                        Termos de Serviço
                      </a>{" "}
                      e
                      <a
                        href="/politica-de-privacidade"
                        className="underline underline-offset-4 text-[var(--color-coral-primary)] hover:text-[var(--color-coral-light)]"
                      >
                        {" "}
                        Política de Privacidade
                      </a>
                      .
                    </span>
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full h-12 rounded-[12px]"
                >
                  Cadastrar
                </Button>

                <div className="flex items-center gap-3 my-3">
                  <div className="h-px bg-gray-200 flex-1" />
                  <span className="text-xs text-gray-500">
                    ou cadastre-se com
                  </span>
                  <div className="h-px bg-gray-200 flex-1" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full h-11 rounded-[12px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="18"
                      height="18"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C33.64,6.053,29.084,4,24,4C12.955,4,4,12.955,4,24 s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.817C14.655,16.108,18.961,14,24,14c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C33.64,6.053,29.084,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.197l-6.199-5.238C29.136,35.091,26.715,36,24,36 c-5.202,0-9.62-3.317-11.281-7.946l-6.53,5.027C9.49,39.556,16.227,44,24,44z"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.236-2.231,4.166-3.999,5.565 c0.001-0.001,0.002-0.001,0.003-0.002l6.199,5.238C36.973,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full h-11 rounded-[12px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.604 0 4.268 2.372 4.268 5.455v6.288z"
                        fill="#0A66C2"
                      />
                      <path
                        d="M5.337 7.433c-1.144 0-2.065-.926-2.065-2.066 0-1.141.921-2.066 2.065-2.066 1.141 0 2.066.925 2.066 2.066 0 1.14-.925 2.066-2.066 2.066zM7.114 20.452H3.561V9h3.553v11.452z"
                        fill="#0A66C2"
                      />
                    </svg>
                    LinkedIn
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
