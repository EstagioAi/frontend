import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'

// Página de Login inspirada na imagem enviada, adaptada à paleta do site
// Verde-principal: #01E297 | Verde-escuro: #092116 | Amarelo: #FACC15 | Cinza-escuro: #212121

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: integrar autenticação real
    console.log({ username, remember })
    alert('Login simulado com sucesso!')
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Coluna esquerda: texto forte */}
        <div className="flex items-center px-6 md:px-10 py-10">
          <div className="w-full max-w-xl animate-fade-in-up">
            <p className="text-sm tracking-wider text-gray-500 font-medium mb-6">OPORTUNIDADES DE ESTÁGIO</p>
            <h1 className="text-[40px] md:text-[56px] leading-[1.05] font-extrabold text-black mb-6">
              Encontre seu próximo
              <br />
              estágio com mais
              <br />
              rapidez e transparência.
            </h1>
            <div className="h-2 w-44 rounded-full bg-[#01E297] mb-8" />

            <div className="mt-10 text-gray-700">
              <span className="mr-2">Não tem conta?</span>
              <a href="/register" className="font-semibold text-[#092116] underline underline-offset-4">Crie uma conta</a>
            </div>
          </div>
        </div>

        {/* Coluna direita: imagem + cartão de login */}
        <div className="relative min-h-[70vh] md:min-h-screen">
          {/* Imagem de fundo */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1600&auto=format&fit=crop')" }}
          />
          <div className="absolute inset-0 bg-black/35" />

          {/* Cartão de login semelhante ao mock */}
          <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:right-8 bottom-8 md:bottom-12 w-[92%] md:w-[440px]">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 p-6 md:p-7 animate-scale-in">
              <div className="text-center mb-4">
                <h2 className="text-base font-bold text-gray-900">Entrar na sua conta</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email ou usuário</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Digite seu email ou usuário"
                    className="w-full px-4 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#01E297]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha"
                    className="w-full px-4 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#01E297]"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="inline-flex items-center gap-2 select-none">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="rounded-md text-[#01E297] focus:ring-[#01E297]"
                    />
                    <span className="text-gray-700">Lembrar de mim</span>
                  </label>
                  <a href="#" className="text-gray-500 hover:text-gray-700">Esqueceu sua senha?</a>
                </div>

                <Button type="submit" className="w-full h-12 rounded-[12px] bg-[#092116] text-white hover:brightness-110">
                  Entrar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

