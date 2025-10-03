import React from 'react'
import { Search, CheckCircle2, Timer, Sparkles } from 'lucide-react'

const highlights = [
  {
    icon: Search,
    title: 'Curadoria real de vagas',
    description: 'Centralizamos cargos oficiais, programas de estágio e trainee em um feed inteligente que entende sua área e disponibilidade.'
  },
  {
    icon: CheckCircle2,
    title: 'Processos transparentes',
    description: 'Timeline com etapas claras, feedback obrigatório e lembretes automáticos para você nunca mais ficar no escuro.'
  },
  {
    icon: Timer,
    title: 'Resposta em horas',
    description: 'IA monitora visualizações e respostas das empresas para acelerar retornos e priorizar oportunidades mais quentes.'
  },
  {
    icon: Sparkles,
    title: 'Guides e comunidade',
    description: 'Templates, mentorias coletivas e radar semanal com o que mais aprova na sua universidade.'
  }
]

const ProblemsSection = () => {
  return (
    <section className="relative overflow-hidden pb-28 pt-28 sm:pt-32 lg:-mt-4 lg:pb-32 lg:pt-36" style={{ background: '#faf9f5' }}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-28" style={{ background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(250, 249, 245, 0.7), transparent)' }} />
        <div className="absolute -top-24 left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full blur-3xl" style={{ background: 'rgba(217, 119, 87, 0.1)' }} />
        <div className="absolute bottom-[-160px] right-[-120px] h-[420px] w-[420px] rounded-full blur-3xl" style={{ background: 'rgba(245, 244, 237, 0.5)' }} />
        <div className="absolute inset-x-0 bottom-0 h-32" style={{ background: 'linear-gradient(to top, #ffffff, rgba(255, 255, 255, 0.6), transparent)' }} />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold shadow-sm" style={{ border: '1px solid rgba(217, 119, 87, 0.3)', color: '#d97757' }}>
            Por que estudantes escolhem o EstágioAI
          </div>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl" style={{ color: '#3d3d3a' }}>
            Um hub projetado para{' '}
            <span style={{ color: '#d97757' }}>eliminar as frustrações</span>
            {' '}da busca por estágio
          </h2>
          <p className="mt-5 text-lg" style={{ color: '#3d3d3a', opacity: 0.7 }}>
            Tudo o que ouvimos na pesquisa com mais de 100 universitários virou funcionalidade prática, com menos ruído e mais clareza para sua jornada.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div key={title} className="group relative overflow-hidden rounded-3xl bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ border: '1px solid rgba(217, 119, 87, 0.15)', boxShadow: '0 25px 55px -40px rgba(61, 61, 58, 0.25)' }}>
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl transition-opacity duration-300 group-hover:opacity-80" style={{ background: 'rgba(217, 119, 87, 0.12)' }} />
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: 'rgba(217, 119, 87, 0.1)', color: '#d97757' }}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: '#3d3d3a' }}>{title}</h3>
              </div>
              <p className="mt-6 text-base leading-relaxed" style={{ color: '#3d3d3a', opacity: 0.7 }}>{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-6 rounded-3xl bg-white/90 p-8 sm:grid-cols-3" style={{ border: '1px solid rgba(217, 119, 87, 0.15)' }}>
          <div className="text-center sm:pr-6" style={{ borderRight: '1px solid rgba(217, 119, 87, 0.15)' }}>
            <div className="text-3xl font-semibold" style={{ color: '#3d3d3a' }}>92%</div>
            <p className="mt-2 text-sm" style={{ color: '#3d3d3a', opacity: 0.6 }}>dos estudantes disseram que o EstágioAI é a plataforma mais clara de uso diário</p>
          </div>
          <div className="text-center sm:px-6" style={{ borderRight: '1px solid rgba(217, 119, 87, 0.15)' }}>
            <div className="text-3xl font-semibold" style={{ color: '#3d3d3a' }}>4,8/5</div>
            <p className="mt-2 text-sm" style={{ color: '#3d3d3a', opacity: 0.6 }}>nota média de experiência com feedback em processos seletivos</p>
          </div>
          <div className="text-center sm:pl-6">
            <div className="text-3xl font-semibold" style={{ color: '#3d3d3a' }}>36h</div>
            <p className="mt-2 text-sm" style={{ color: '#3d3d3a', opacity: 0.6 }}>tempo médio para a primeira resposta após candidatura dentro da plataforma</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection
