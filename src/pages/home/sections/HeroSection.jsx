import React, { useState } from 'react'
import { Play, Search, MapPin } from 'lucide-react'
import { TextHighlight } from '@/components/ui/text-highlight.jsx'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'

const HeroSection = () => {
  const [cargo, setCargo] = useState('')
  const [localizacao, setLocalizacao] = useState('')

  const handleBuscar = (e) => {
    e.preventDefault()
    console.log('Buscando:', { cargo, localizacao })
    // Adicionar lógica de busca aqui
  }

  return (
    <section className="relative overflow-visible bg-primary-ds pt-32 pb-16 sm:pt-36 lg:pt-40 bg-cover bg-no-repeat bg-center bg-blue" style={{ backgroundImage: `url(/images/backgrounds/background-hero.png)` }}>
      {/* Formas decorativas de fundo */}


      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-12 lg:px-8 lg:min-h-[500px]">

        {/* Coluna Esquerda - Conteúdo */}
        <div className="relative z-10 flex flex-col justify-start space-y-6 lg:pr-12 py-8 lg:py-12 lg:pt-16 lg:max-w-[600px]">
          {/* Título Principal */}
          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-primary-ds sm:text-5xl lg:text-6xl">
            A forma mais fácil de contratar qualquer pessoa, em qualquer lugar.
          </h1>

          {/* Subtítulo com destaque verde */}
          <p className="max-w-xl text-base leading-relaxed text-black-70 sm:text-lg">
            Folha de pagamento sem fronteiras, conformidade e benefícios para equipes remotas. Feito com amor de todo o{' '}
            <TextHighlight variant="wave" className="font-semibold text-primary-ds">
              mundo
            </TextHighlight>
            .
          </p>

          {/* Barra de Busca */}
          <form onSubmit={handleBuscar} className="pt-6 w-full max-w-3xl">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-0 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,255,127,0.15)] hover:border-green-ds/30 transition-all duration-300">
              {/* Input Cargo */}
              <div className="flex items-center flex-1 px-5 py-4 gap-3 border-b sm:border-b-0 sm:border-r border-gray-100 min-w-0">
                <Search className="w-5 h-5 text-gray-400 flex-shrink-0" strokeWidth={2} />
                <input
                  type="text"
                  placeholder="Cargo ou função"
                  value={cargo}
                  onChange={(e) => setCargo(e.target.value)}
                  className="flex-1 outline-none text-gray-800 placeholder:text-gray-400 text-base bg-transparent min-w-0"
                  aria-label="Cargo ou função"
                />
              </div>

              {/* Input Localização */}
              <div className="flex items-center flex-1 px-5 py-4 gap-3 border-b sm:border-b-0 border-gray-100 min-w-0">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" strokeWidth={2} />
                <input
                  type="text"
                  placeholder="Localização"
                  value={localizacao}
                  onChange={(e) => setLocalizacao(e.target.value)}
                  className="flex-1 outline-none text-gray-800 placeholder:text-gray-400 text-base bg-transparent min-w-0"
                  aria-label="Localização"
                />
              </div>

              {/* Botão Buscar */}
              <button
                type="submit"
                className="bg-green-ds hover:bg-green-hover-ds text-black font-bold px-8 py-4 sm:rounded-r-2xl transition-all duration-200 hover:shadow-lg active:scale-[0.98] whitespace-nowrap text-base flex-shrink-0"
                aria-label="Buscar vagas"
              >
                Buscar Vagas
              </button>
            </div>

            {/* Badges de Métricas */}
            <div className="flex flex-wrap items-center gap-4 mt-12">
              {/* Badge: Vagas Disponíveis - Inteira Preta */}
              <div className="inline-flex items-center gap-2.5 px-5 py-3.5 bg-black text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-bold text-base">10k+ vagas</span>
              </div>

              {/* Badge: Avaliações - Inteira Verde */}
              <div className="inline-flex items-center gap-2.5 px-5 py-3.5 bg-[var(--green-ds)] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-bold text-base">4,8/5 avaliações</span>
              </div>

              {/* Badge: Taxa de Match */}
              <div className="inline-flex items-center gap-2.5 px-5 py-3.5 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-2 border-green-ds/30">
                <svg className="w-5 h-5 text-green-ds" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-bold text-base">89% match</span>
              </div>
            </div>
          </form>
        </div>

        {/* Coluna Direita - Visual com fundo preto */}
        <div className="relative hidden lg:flex lg:items-start lg:self-start lg:pt-8">
          {/* Container com fundo preto - altura total da hero section */}
          <div className="relative w-full rounded-l-3xl bg-black-ds overflow-hidden shadow-2xl flex items-end lg:-mr-8 min-h-[500px]">

            {/* Círculo verde grande (inferior esquerdo) */}
            <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-green-ds opacity-90" />

            {/* Círculo verde médio (superior direito) */}
            <div className="absolute -top-10 -right-10 h-[250px] w-[250px] rounded-full bg-green-ds opacity-80" />

            {/* Anel verde superior (halo) */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 h-[180px] w-[450px] rounded-full border-[6px] border-green-ds opacity-70" />

            {/* Anel verde inferior */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 h-[200px] w-[500px] rounded-full border-[6px] border-green-ds opacity-60" />

            {/* Imagem da pessoa - alinhada na parte inferior */}
            <div className="relative z-10 w-full flex items-end justify-center pb-0">
              <img
                src="/images/sections/hero-section/mulher-comemorando-aprovacao.png"
                alt="Mulher profissional comemorando aprovação em processo seletivo"
                className="w-full h-auto max-h-[75%] object-contain object-bottom filter grayscale"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection