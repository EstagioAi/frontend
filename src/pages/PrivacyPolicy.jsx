import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="#" onClick={(e) => { e.preventDefault(); window.history.back(); }} className="text-sm text-gray-600 hover:text-gray-800">&larr; Voltar</a>
        <h1 className="text-3xl md:text-4xl font-extrabold text-black mt-4">Política de Privacidade</h1>
        <div className="h-2 w-44 rounded-full bg-[#01E297] my-6" />
        <p className="text-sm text-gray-500">Última atualização: 07 set 2025</p>

        <div className="prose prose-gray max-w-none mt-6">
          <h2>1. Dados Coletados</h2>
          <p>Coletamos informações de perfil, uso, e dados fornecidos voluntariamente durante o cadastro.</p>

          <h2>2. Uso dos Dados</h2>
          <p>Utilizamos os dados para personalizar recomendações e melhorar a experiência.</p>

          <h2>3. Compartilhamento</h2>
          <p>Compartilhamos dados apenas com fornecedores que nos ajudam a operar o serviço, seguindo contratos e leis aplicáveis.</p>

          <h2>4. Direitos do Usuário</h2>
          <p>Você pode solicitar acesso, correção ou exclusão dos seus dados. Entre em contato em privacidade@estagio.ai.</p>

          <h2>5. Segurança</h2>
          <p>Adotamos medidas técnicas e organizacionais para proteger suas informações.</p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy

