import React from 'react'
import { Play } from 'lucide-react'
import { TextHighlight } from '@/components/ui/text-highlight.jsx'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'

const HeroSection = () => {
  return (
    <section className="relative overflow-visible bg-primary-ds pt-20 pb-16 sm:pt-24 lg:pt-28">
      {/* Formas decorativas de fundo */}
      <BackgroundShapes
        variant="hero"
        opacity={0.22}
        color="#82f7b3"
        accentColor="rgba(17, 94, 89, 0.3)"
        accentOpacity={0.2}
        className="opacity-90"
      />
      <BackgroundShapes
        variant="orbits"
        opacity={0.2}
        color="rgba(130, 247, 179, 0.9)"
        accentColor="rgba(46, 196, 182, 0.2)"
        accentOpacity={0.16}
        blendMode="normal"
        className="opacity-90"
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-0 lg:px-8 lg:min-h-[500px]">

        {/* Coluna Esquerda - Conteúdo */}
        <div className="relative z-10 flex flex-col justify-center space-y-6 lg:pr-8 py-8 lg:py-12">
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

          {/* Botões CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <button 
              className="inline-flex items-center gap-2 rounded-lg bg-black-ds px-6 py-3 text-sm font-bold text-white-ds transition-all duration-200 hover:bg-black-hover-ds hover:shadow-lg focus:ring-4 focus:ring-green-20"
              aria-label="Agendar uma demonstração do produto"
            >
              Agendar demonstração
            </button>
            <button 
              className="inline-flex items-center gap-2 rounded-lg bg-green-ds px-6 py-3 text-sm font-bold text-primary-ds transition-all duration-200 hover:bg-green-hover-ds hover:shadow-lg focus:ring-4 focus:ring-green-20"
              aria-label="Assistir demonstração em vídeo do produto"
            >
              <Play className="h-4 w-4" aria-hidden="true" />
              Assistir demonstração
            </button>
          </div>

          {/* Logos de Empresas */}
          <div className="pt-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-black-50 mb-4">Empresas que confiam</div>
            <div className="flex flex-wrap items-center gap-6">
              {/* Mobbin */}
              <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-all duration-200 hover:text-green-ds">
                <div className="h-5 w-5 rounded bg-black-ds transition-colors duration-200 group-hover:bg-green-ds" />
                <span className="text-sm font-semibold text-primary-ds">Mobbin</span>
              </div>

              {/* Welcome */}
              <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-all duration-200 hover:text-green-ds">
                <div className="h-5 w-5 rounded-full bg-black-ds transition-colors duration-200 group-hover:bg-green-ds" />
                <span className="text-sm font-semibold text-primary-ds">welcome</span>
              </div>

              {/* Sendinblue */}
              <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-all duration-200 hover:text-green-ds">
                <div className="h-5 w-5 rounded bg-black-ds transition-colors duration-200 group-hover:bg-green-ds" />
                <span className="text-sm font-semibold text-primary-ds">sendinblue</span>
              </div>

              {/* SENTRY */}
              <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-all duration-200 hover:text-green-ds">
                <div className="h-5 w-5 rounded bg-black-ds transition-colors duration-200 group-hover:bg-green-ds" />
                <span className="text-sm font-semibold text-primary-ds">SENTRY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Direita - Visual com fundo preto */}
        <div className="relative hidden lg:flex lg:items-stretch lg:self-stretch">
          {/* Container com fundo preto - altura total da hero section */}
          <div className="relative w-full rounded-l-3xl bg-black-ds overflow-hidden shadow-2xl flex items-end lg:-mr-8">

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