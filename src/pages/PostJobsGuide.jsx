import React from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import { Tags, CheckCircle2, FileText } from 'lucide-react'

const steps = [
  { title: 'Crie sua conta empresarial', desc: 'Cadastre-se e valide seu domínio corporativo.' },
  { title: 'Complete o perfil da empresa', desc: 'Logo, descrição, áreas de atuação e localizações.' },
  { title: 'Publique a primeira vaga', desc: 'Título claro, requisitos, benefícios e modalidade.' },
  { title: 'Receba candidaturas', desc: 'Acompanhe e filtre por critérios e palavras-chave.' },
  { title: 'Dê feedbacks', desc: 'Melhore a experiência do candidato e sua marca empregadora.' }
]

const PostJobsGuide = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-gradient-to-b from-white to-emerald-50/40">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs tracking-wider text-gray-500 font-semibold">PARA EMPRESAS</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-black mt-2">Como publicar vagas</h1>
            <div className="h-2 w-44 rounded-full bg-[#01E297] my-6" />
            <p className="text-gray-600 text-base md:text-lg">Passo a passo para anunciar e contratar com eficiência.</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-6 grid gap-4">
          {steps.map((s, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-5 bg-white flex items-start gap-3">
              <div className="mt-0.5 w-8 h-8 rounded-md bg-emerald-100 text-emerald-600 grid place-items-center"><Tags className="w-4 h-4" /></div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">{i+1}. {s.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{s.desc}</p>
              </div>
            </div>
          ))}

          <div className="rounded-2xl border border-gray-200 p-5 bg-white">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <h3 className="text-sm font-semibold text-gray-900">Dicas rápidas</h3>
            </div>
            <ul className="list-disc ml-5 text-sm text-gray-700 mt-2 space-y-1">
              <li>Títulos objetivos: "Estagiário de Marketing (Presencial)".</li>
              <li>Requisitos em bullet points, por ordem de importância.</li>
              <li>Explique o processo seletivo e prazos para evitar dúvidas.</li>
            </ul>
            <a className="inline-flex items-center gap-2 text-sm text-[#092116] underline underline-offset-4 mt-3" href="#">
              <FileText className="w-4 h-4" /> Ver modelo de vaga (em breve)
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PostJobsGuide

