import React from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import { BookOpen, FileText, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react'

const tips = [
  'Use um título claro: "Estudante de Engenharia de Software (5º período)"',
  'Adicione experiências acadêmicas relevantes (iniciação científica, monitoria).',
  'Liste projetos com links para GitHub/Portfólio.',
  'Mostre resultados: números, impacto ou tecnologias usadas.',
  'Peça recomendações de professores ou colegas.'
]

const resumeStructure = [
  { title: 'Cabeçalho', desc: 'Nome, cidade/UF, e-mail profissional, telefone e links (LinkedIn, GitHub).' },
  { title: 'Resumo/Objetivo', desc: '2–3 linhas sobre quem você é e o que procura.' },
  { title: 'Formação', desc: 'Curso, instituição, período e previsão de conclusão.' },
  { title: 'Experiências', desc: 'EstágiOS, projetos, monitorias. Foque em resultados e responsabilidades.' },
  { title: 'Projetos', desc: '2–4 projetos com uma frase de impacto e tecnologias usadas.' },
  { title: 'Habilidades', desc: 'Tecnologias, ferramentas, idiomas. Seja honesto sobre o nível.' },
  { title: 'Certificações/Atividades', desc: 'Cursos relevantes, hackathons, ligas, pesquisas.' },
]

const resumeMistakes = [
  'Currículo com mais de 2 páginas para estágio/júnior.',
  'Falta de padronização de fontes e espaçamentos.',
  'Objetivo genérico: "Em busca de oportunidade" sem foco.',
  'Listar tarefas em vez de resultados (use verbos de ação e números).',
  'Informações pessoais desnecessárias (CPF, RG, foto, estado civil).',
]

const resources = [
  { label: 'Modelo de currículo (Google Docs)', href: '#', note: 'Faça uma cópia e personalize.' },
  { label: 'Checklist de currículo em PDF', href: '#', note: 'Passo a passo para revisar antes de enviar.' },
  { label: 'Gerador de currículo (em breve)', href: '#', note: 'Preencha seu perfil e gere automaticamente.' },
]

const ImproveProfile = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-emerald-50/40">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs tracking-wider text-gray-500 font-semibold">PARA UNIVERSITÁRIOS</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-black mt-2">Como melhorar seu perfil</h1>
            <div className="h-2 w-44 rounded-full bg-[#01E297] my-6" />
            <p className="text-gray-600 text-base md:text-lg">Dicas práticas para aumentar suas chances de conseguir um estágio.</p>
          </div>
        </div>
      </section>

      {/* Dicas rápidas de perfil */}
      <section className="py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-6 grid gap-4">
          {tips.map((t, idx) => (
            <div key={idx} className="border border-gray-200 rounded-2xl p-5 bg-white flex items-start gap-3">
              <div className="mt-0.5 w-8 h-8 rounded-md bg-emerald-100 text-emerald-600 grid place-items-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <p className="text-gray-700 text-sm">{t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resumo: bom currículo */}
      <section className="py-2 md:py-4">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-600 grid place-items-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Resumo: como fazer um bom currículo</h2>
                <p className="text-gray-600 text-sm mt-1">Foque em clareza, resultados e relevância. 1 página bem organizada vale mais que muitas informações dispersas.</p>
              </div>
            </div>

            {/* Estrutura recomendada */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {resumeStructure.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Erros comuns */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <h3 className="text-sm font-semibold text-gray-900">Erros comuns a evitar</h3>
              </div>
              <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                {resumeMistakes.map((m, idx) => (<li key={idx}>{m}</li>))}
              </ul>
            </div>

            {/* Materiais úteis */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <h3 className="text-sm font-semibold text-gray-900">Materiais úteis</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {resources.map((r, idx) => (
                  <a key={idx} href={r.href} className="group border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">{r.label}</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{r.note}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ImproveProfile

