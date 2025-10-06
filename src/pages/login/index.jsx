import React, { useState } from "react";
import { Button } from "@/components/ui/button.jsx";

// Página de Login com novo design system verde minimalista
// Verde-principal: #82f7b3 | Preto: #0f0f0f | Background: #f8f8f8

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrar autenticação real
    console.log({ username, remember });
    alert("Login simulado com sucesso!");
  };

  return (
    <div className="min-h-screen bg-primary-ds">
      <main id="main-content">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Coluna esquerda: texto forte */}
        <div className="relative flex items-center px-6 md:px-10 py-10 overflow-hidden">
          {/* Elementos decorativos minimalistas */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute w-[300px] h-[300px] -top-8 -left-24 rounded-full border-[3px] border-green-ds opacity-30"></div>
            <div className="absolute w-[220px] h-[220px] bottom-0 -right-10 bg-green-ds/10 blur-3xl rounded-full"></div>
          </div>
          <div className="w-full max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-black-50 mb-6">
              OPORTUNIDADES DE ESTÁGIO
            </p>
            <h1 className="text-5xl md:text-6xl leading-[1.1] font-bold tracking-tight text-primary-ds mb-6">
              Encontre seu próximo
              <br />
              estágio com mais
              <br />
              rapidez e transparência.
            </h1>
            <div className="h-2 w-44 rounded-full bg-green-ds mb-8" />

            <div className="mt-10 text-black-70">
              <span className="mr-2">Não tem conta?</span>
              <a
                href="/register"
                className="font-semibold text-green-ds underline underline-offset-4 hover:text-green-hover-ds transition-colors duration-200"
              >
                Crie uma conta
              </a>
            </div>
          </div>
        </div>

        {/* Coluna direita: imagem + cartão de login */}
        <div className="relative min-h-[70vh] md:min-h-screen">
          {/* Imagem de fundo */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/blog/company-login.webp')" }}
          />
          <div className="absolute inset-0 bg-black/35" />

          {/* Cartão de login com novo design */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] md:w-[440px]">
            <div className="rounded-2xl border-2 border-black-10 bg-white-ds shadow-lg p-6 md:p-7 transition-all duration-200">
              <div className="mb-2">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.back();
                  }}
                  className="text-sm text-black-70 hover:text-green-ds transition-colors duration-200"
                >
                  &larr; Voltar
                </a>
              </div>
              <div className="text-center mb-4">
                <h2 className="text-lg font-bold text-primary-ds">
                  Entrar na sua conta
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary-ds mb-1">
                    Email ou usuário
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Digite seu email ou usuário"
                    className="w-full rounded-lg border-2 border-black-10 bg-white-ds px-4 py-3 text-base text-primary-ds placeholder:text-black-40 outline-none transition-all duration-200 focus:border-green-ds focus:ring-4 focus:ring-green-20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-ds mb-1">
                    Senha
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha"
                    className="w-full rounded-lg border-2 border-black-10 bg-white-ds px-4 py-3 text-base text-primary-ds placeholder:text-black-40 outline-none transition-all duration-200 focus:border-green-ds focus:ring-4 focus:ring-green-20"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="inline-flex items-center gap-2 select-none">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="rounded-md text-green-ds focus:ring-green-20 border-black-10"
                    />
                    <span className="text-black-70">Lembrar de mim</span>
                  </label>
                  <a href="#" className="text-green-ds hover:text-green-hover-ds transition-colors duration-200">
                    Esqueceu sua senha?
                  </a>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  fullWidth={true}
                  size="lg"
                >
                  Entrar
                </Button>

                <div className="flex items-center gap-3 my-3">
                  <div className="h-px bg-black-ds/10 flex-1" />
                  <span className="text-xs text-black-50">ou entre com</span>
                  <div className="h-px bg-black-ds/10 flex-1" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    fullWidth={true}
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
                    size="md"
                    fullWidth={true}
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
                <div className="text-xs text-black-50 text-center mt-4">
                  Ao entrar, você concorda com nossos
                  <a
                    href="/termos-de-uso"
                    className="underline underline-offset-4 text-green-ds hover:text-green-hover-ds transition-colors duration-200"
                  >
                    {" "}
                    Termos de Uso
                  </a>
                  ,
                  <a
                    href="/termos-de-servico"
                    className="underline underline-offset-4 text-green-ds hover:text-green-hover-ds transition-colors duration-200"
                  >
                    {" "}
                    Termos de Serviço
                  </a>{" "}
                  e
                  <a
                    href="/politica-de-privacidade"
                    className="underline underline-offset-4 text-green-ds hover:text-green-hover-ds transition-colors duration-200"
                  >
                    {" "}
                    Política de Privacidade
                  </a>
                  .
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
};

export default Login;
