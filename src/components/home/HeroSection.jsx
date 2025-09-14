import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Sparkles, Search, MapPin, Briefcase, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Esquerda: título & busca */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3F4F6]">
              <Sparkles className="w-4 h-4 text-[#01E297]" />
              <span className="text-xs font-medium text-gray-700 tracking-wide">Fique por dentro das novas vagas</span>
            </div>

            <h1 className="text-[44px] leading-[1.1] md:text-[56px] font-bold text-black mb-5 max-w-2xl">
              Desbloqueie seu potencial com novas oportunidades
            </h1>
            <p className="text-[18px] text-gray-700 mb-8 max-w-xl">
              Conectamos você a milhares de oportunidades de estágio, avaliações e às ferramentas que aceleram sua carreira.
            </p>

            {/* Badges */}
            <div className="flex items-center gap-3 md:gap-4 mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0b2a1d] text-white text-sm shadow-sm ring-1 ring-white/10 hover:shadow-md transition">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10">
                  <Briefcase className="w-3.5 h-3.5 text-[#8DF7CC]" />
                </span>
                <span className="tracking-wide">10k+ vagas</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FACC15] text-black text-sm shadow-sm ring-1 ring-black/10 hover:shadow-md transition">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-black/10">
                  <Star className="w-3.5 h-3.5" />
                </span>
                <span className="font-medium">4,8/5 avaliações</span>
              </div>
            </div>

            {/* Barra de busca */}
            <div className="w-full rounded-2xl border border-gray-200 p-2 shadow-sm">
              <div className="grid md:grid-cols-[1fr_1fr_auto] gap-2">
                <div className="flex items-center gap-2 px-3">
                  <Search className="w-4 h-4 text-gray-500" />
                  <Input placeholder="Cargo ou função" className="h-12 border-0" />
                </div>
                <div className="flex items-center gap-2 px-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <Input placeholder="Localização" className="h-12 border-0" />
                </div>
                <Button className="h-12 px-6 rounded-[12px] bg-[#01E297] text-black font-semibold hover:brightness-95">Buscar Vagas</Button>
              </div>
            </div>
          </div>

          {/* Direita: imagem dentro do círculo verde */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg">
              <div className="absolute inset-0 sm:-inset-2 rounded-full bg-[#01E297]/20 blur-2xl" />
              <div className="aspect-square rounded-full bg-[#01E297] flex items-center justify-center overflow-hidden">
                <img src="/images/misc/diverse-students-celebrating-internship-success.webp" alt="Estudante sorridente" className="w-[88%] h-[88%] object-cover rounded-full" />
              </div>

              {/* Mini logos flutuando fora da imagem, em anel com distância uniforme */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[132%] h-[132%]">
                  {/* top */}
                  <div className="absolute top-10 left-1/2 -translate-x-1/2">
                    <Link to="/empresas/google" aria-label="Google" className="block">
                      <div className="float-y float-y-1 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white ring-2 ring-emerald-200 shadow-md overflow-hidden grid place-items-center hover:ring-emerald-300 transition">
                        <img src="/images/companies/google.webp" alt="Google" className="w-6 h-6 object-contain" />
                      </div>
                    </Link>
                  </div>
                  {/* right */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2">
                    <Link to="/empresas/microsoft" aria-label="Microsoft" className="block">
                      <div className="float-y float-y-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white ring-2 ring-emerald-200 shadow-md overflow-hidden grid place-items-center hover:ring-emerald-300 transition">
                        <img src="/images/companies/microsft.webp" alt="Microsoft" className="w-6 h-6 object-contain" />
                      </div>
                    </Link>
                  </div>
                  {/* bottom */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                    <Link to="/empresas/amazon" aria-label="Amazon" className="block">
                      <div className="float-y float-y-3 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white ring-2 ring-emerald-200 shadow-md overflow-hidden grid place-items-center hover:ring-emerald-300 transition">
                        <img src="/images/companies/amazon.webp" alt="Amazon" className="w-6 h-6 object-contain" />
                      </div>
                    </Link>
                  </div>
                  {/* left */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2">
                    <Link to="/empresas/ibm" aria-label="IBM" className="block">
                      <div className="float-y float-y-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white ring-2 ring-emerald-200 shadow-md overflow-hidden grid place-items-center hover:ring-emerald-300 transition">
                        <img src="/images/companies/ibm.webp" alt="IBM" className="w-6 h-6 object-contain" />
                      </div>
                    </Link>
                  </div>
                  {/* top-left */}
                  <div className="absolute top-[11%] left-[11%]">
                    <Link to="/empresas/meta" aria-label="Meta" className="block">
                      <div className="float-y float-y-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white ring-2 ring-emerald-200 shadow-md overflow-hidden grid place-items-center hover:ring-emerald-300 transition">
                        <img src="/images/companies/meta.webp" alt="Meta" className="w-6 h-6 object-contain" />
                      </div>
                    </Link>
                  </div>
                  {/* bottom-right */}
                  <div className="absolute bottom-[11%] right-[11%]">
                    <Link to="/empresas/netflix" aria-label="Netflix" className="block">
                      <div className="float-y float-y-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white ring-2 ring-emerald-200 shadow-md overflow-hidden grid place-items-center hover:ring-emerald-300 transition">
                        <img src="/images/companies/netflix.webp" alt="Netflix" className="w-6 h-6 object-contain" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>


              {/* Mini card de prova social */}
              <div className="absolute bottom-0 left-0 sm:bottom-0 sm:left-0 bg-white rounded-2xl shadow-xl border border-gray-200 px-4 py-3 w-[240px] sm:w-[280px] animate-scale-in" style={{maxWidth:'calc(100% - 12px)'}}>
                <p className="text-[12px] sm:text-[13px] font-semibold text-gray-900 mb-2">
                  10k+ candidatos conseguiram vaga
                </p>
                <div className="flex items-center -space-x-3">
                  {[1,23,32,41,10,30].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/48?img=${i}`} alt="avatar" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 ring-white" />
                  ))}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#212121] text-white grid place-items-center ring-2 ring-white text-sm font-semibold">...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

