import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'

// Página de Registro seguindo a mesma paleta do site
const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [terms, setTerms] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirm) {
      alert('As senhas não conferem')
      return
    }
    // TODO: integrar backend real
    alert('Cadastro simulado com sucesso!')
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Lado esquerdo com mensagem/branding */}
        <div className="flex items-center px-6 md:px-10 py-10">
          <div className="max-w-xl animate-fade-in-up">
            <p className="text-sm tracking-wider text-gray-500 font-medium mb-6">BEM-VINDO</p>
            <h1 className="text-[40px] md:text-[48px] leading-[1.1] font-extrabold text-black mb-6">
              Crie sua conta
              <br />
              no EstagioAI
            </h1>
            <p className="text-gray-700">Acesse oportunidades mais compatíveis com seu perfil, com filtros inteligentes e feedback obrigatório.</p>
            <div className="mt-10 text-gray-700">
              <span className="mr-2">Já tem conta?</span>
              <a href="/login" className="font-semibold text-[#092116] underline underline-offset-4">Entrar</a>
            </div>
          </div>
        </div>

        {/* Lado direito com formulário */}
        <div className="flex items-center justify-center px-6 md:px-10 py-10 bg-[#f9fafb]">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-7 animate-scale-in">
            <h2 className="text-center text-base font-bold text-gray-900 mb-4">Criar conta</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#01E297]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#01E297]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Crie uma senha"
                  className="w-full px-4 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#01E297]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar senha</label>
                <input
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="Repita a senha"
                  className="w-full px-4 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#01E297]"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="inline-flex items-center gap-2 select-none">
                  <input
                    type="checkbox"
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                    className="rounded-md text-[#01E297] focus:ring-[#01E297]"
                  />
                  <span className="text-gray-700">Aceito os termos de uso</span>
                </label>
                <a href="#" className="text-gray-500 hover:text-gray-700">Ler termos</a>
              </div>

              <Button type="submit" className="w-full h-12 rounded-[12px] bg-[#01E297] text-black hover:brightness-95">
                Cadastrar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

