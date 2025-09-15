import React from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Search, Filter, FileDown, Star, Award, Clock, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

// Tiny contract
// - No data fetch yet; static showcase with CTA linking to /em-construcao
// - Accessible and responsive; consistent with brand colors

const categories = [
  'Administração', 'Marketing', 'Tecnologia', 'Direito', 'Engenharia', 'Finanças', 'Vendas', 'Design', 'RH', 'Dados'
]

const templates = [
  { id: 'ats-basico', title: 'Modelo ATS Básico', tag: 'Compatível com ATS', time: '5 min', rating: 4.8, downloads: '12k+', image: '/images/blog/curriculo-2025.webp' },
  { id: 'moderno-clean', title: 'Moderno Clean', tag: 'Recrutadores ❤', time: '7 min', rating: 4.7, downloads: '9k+', image: '/images/backgrounds/estagioai-background.webp' },
  { id: 'universitario-primeiro', title: 'Primeiro Estágio', tag: 'Para iniciantes', time: '6 min', rating: 4.9, downloads: '15k+', image: '/images/logos/logo-web.webp' },
  { id: 'criativo', title: 'Criativo', tag: 'Destaque visual', time: '8 min', rating: 4.6, downloads: '7k+', image: '/images/logos/logo-web copy.webp' },
]

function TemplateCard({ t }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white shadow-card hover:shadow-card-lg hover:-translate-y-0.5 transition overflow-hidden">
      {/* Media area (uniform aspect for todos os cards) */}
      <div className="relative aspect-[16/10] grid place-items-center bg-gray-50 overflow-hidden">
        <img
          src={t.image}
          alt={t.title}
          className="max-w-full max-h-full object-contain"
          width="800"
          height="500"
          loading="lazy"
          decoding="async"
        />
        {/* Badge padronizado */}
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-700 text-white shadow-sm">
          <Star className="w-3.5 h-3.5 text-white" /> {t.tag}
        </span>
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[15px] font-semibold text-gray-900 line-clamp-1">{t.title}</h3>
          <div className="flex items-center gap-1.5 text-xs text-gray-500 shrink-0"><Clock className="w-4 h-4" /> {t.time}</div>
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-gray-700">
          <div className="inline-flex items-center gap-1 font-medium"><Award className="w-4 h-4 text-amber-500" /> {t.rating}</div>
          <div className="inline-flex items-center gap-1"><FileDown className="w-4 h-4 text-emerald-600" /> {t.downloads} downloads</div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Link to={`/em-construcao`}>
            <Button className="w-full h-10 rounded-[12px] bg-[#01E297] text-black font-semibold shadow-sm hover:brightness-95">Usar modelo</Button>
          </Link>
          <Link to={`/em-construcao`}>
            <Button className="w-full h-10 rounded-[12px] border border-[#01E297] text-[#092116] bg-white hover:bg-[#01E297]/10">Ver detalhes</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function ResumeTemplates() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50/20 text-[#092116]">
      <Navigation />
      <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 to-white" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0b2a1d] text-white text-xs ring-1 ring-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8DF7CC]" /> Compatível com ATS + Recrutadores
              </span>
              <h1 className="mt-4 text-[40px] md:text-[52px] leading-[1.1] font-bold text-[#092116] max-w-2xl">
                Modelos de currículo prontos e profissionais
              </h1>
              <p className="mt-3 text-[18px] text-gray-700 max-w-xl">
                Mais de 50 modelos gratuitos e testados em processos seletivos. Escolha, personalize e gere seu PDF em minutos.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
                <div className="flex items-center gap-2 px-3 h-12 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <Search className="w-4 h-4 text-gray-500" />
                  <Input placeholder="Buscar por área ou palavra-chave (ex.: Marketing, ATS)" className="h-10 border-0" />
                </div>
                <Button className="h-12 px-6 rounded-[12px] bg-[#01E297] text-black font-semibold shadow-sm hover:brightness-95">
                  Explorar modelos
                </Button>
              </div>

              <div className="mt-5 flex items-center gap-4 text-sm text-gray-600">
                <div className="inline-flex items-center gap-2"><Star className="w-4 h-4 text-amber-500" /> Curadoria Estágio AI</div>
                <div className="inline-flex items-center gap-2"><Award className="w-4 h-4 text-emerald-600" /> PDF otimizado</div>
                <div className="inline-flex items-center gap-2"><Clock className="w-4 h-4 text-gray-500" /> Em minutos</div>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute inset-0 rounded-3xl bg-[#01E297]/20 blur-2xl" aria-hidden="true" />
              <div className="relative rounded-3xl border border-emerald-200 bg-white/80 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-6">
                <div className="grid grid-cols-2 gap-4">
                  {templates.slice(0, 4).map((t) => (
                    <div key={t.id} className="rounded-xl border border-gray-200 overflow-hidden">
                      <img src={t.image} alt={t.title} className="w-full h-28 object-cover" width="320" height="176" loading="lazy" decoding="async" />
                      <div className="p-2">
                        <div className="text-[12px] font-medium text-gray-900 truncate">{t.title}</div>
                        <div className="text-[11px] text-gray-600">{t.tag}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Filtros */}
      <section className="border-y border-gray-200 bg-white/70 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button key={c} className="px-3 py-1.5 rounded-full text-sm border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition">
                {c}
              </button>
            ))}
          </div>
          <button className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50">
            <Filter className="w-4 h-4" /> Filtros
          </button>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {templates.concat(templates).concat(templates).slice(0,12).map((t, i) => (
              <TemplateCard key={`${t.id}-${i}`} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#092116]">Perguntas frequentes</h2>
          <div className="mt-4 space-y-4">
            {[{
              q: 'Os modelos são compatíveis com ATS?',
              a: 'Sim. Priorizamos estruturas simples, sem colunas complexas ou elementos que prejudiquem a leitura por sistemas ATS.'
            },{
              q: 'Posso exportar em PDF?',
              a: 'Sim. A experiência foi pensada para gerar PDF com fontes legíveis e hierarquia adequada para recrutadores.'
            },{
              q: 'É gratuito?',
              a: 'Oferecemos modelos gratuitos e versões premium em breve. Todos foram cuidadosamente desenhados.'
            }].map((f, idx) => (
              <div key={idx} className="rounded-xl border border-gray-200 p-4 bg-white">
                <div className="font-medium text-gray-900">{f.q}</div>
                <div className="mt-1 text-gray-600 text-sm">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  )
}
