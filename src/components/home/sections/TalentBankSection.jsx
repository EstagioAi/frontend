import React from 'react'
import { Database, Users } from 'lucide-react'

const notifications = [
  {
    title: 'WhatsApp',
    time: 'Agora',
    copy: 'Google tem uma nova vaga que combina com seu perfil! Estágio em Produto.',
    color: 'green'
  },
  {
    title: 'E-mail',
    time: '2h atrás',
    copy: 'Meta adicionou você ao banco de talentos: acompanhe as próximas oportunidades exclusivas.',
    color: 'blue'
  },
  {
    title: 'EstágioAI',
    time: '1 dia',
    copy: 'Você foi recomendado para 3 novas vagas. Match de 89% com Amazon Brasil.',
    color: 'purple'
  }
]

const TalentBankSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F6FAFF] py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-[-220px] mx-auto h-[420px] w-[420px] rounded-full bg-[#6FFFC7]/25 blur-3xl" />
        <div className="absolute bottom-[-240px] right-[-160px] h-[380px] w-[380px] rounded-full bg-[#2563EB]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1.5 text-sm font-semibold text-emerald-700 shadow-sm">
            <Database className="h-4 w-4" />
            Banco de talentos automático
          </div>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#02161F] sm:text-5xl">
            Você no radar das empresas{' '}
            <span className="text-[#0E8F66]">sem esforço extra</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Cada candidatura adiciona seu perfil ao banco de talentos das empresas. Receba convites com contexto, prioridade e orientações no momento certo.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div className="space-y-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_25px_60px_-50px_rgba(15,23,42,0.45)]">
              <h3 className="text-lg font-semibold text-[#02161F]">Como acontece</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Quando você aplica em uma vaga, a empresa pode te convidar para outras posições com base no match. Tudo com consentimento e controle do estudante.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0E8F66]" />Perfil fica disponível no ATS da empresa com insights da comunidade.</li>
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0E8F66]" />Você aprova o compartilhamento antes de entrar em novos processos.</li>
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0E8F66]" />Mentorias rápidas indicam o que aprimorar antes da próxima conversa.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_25px_60px_-50px_rgba(15,23,42,0.45)]">
              <div className="flex items-center gap-3">
                <Users className="h-10 w-10 rounded-2xl bg-[#f0fdf4] p-2 text-[#059669]" />
                <div>
                  <h3 className="text-lg font-semibold text-[#02161F]">O que você recebe</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Convites com contexto</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Convites para entrevistas, eventos exclusivos e trilhas de desenvolvimento personalizadas com vagas quentes.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -top-6 -right-4 hidden rounded-3xl bg-white/80 px-4 py-3 text-sm text-[#02161F] shadow-lg backdrop-blur-sm sm:flex sm:flex-col">
              <span className="font-semibold">+5 empresas</span>
              <span className="text-xs text-slate-500">aguardando seu ok</span>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_45px_90px_-60px_rgba(15,23,42,0.55)]">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">convites recentes</p>
                  <h3 className="mt-2 text-xl font-semibold text-[#02161F]">Seus alertas inteligentes</h3>
                </div>
                <span className="rounded-full bg-[#0E8F66]/10 px-3 py-1 text-xs font-semibold text-[#0E8F66]">Ativo</span>
              </div>

              <div className="space-y-4">
                {notifications.map(({ title, time, copy, color }) => (
                  <div key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-semibold text-[#02161F]">{title}</span>
                      <span>{time}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{copy}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <span className={`inline-flex h-2 w-2 rounded-full ${color === 'green' ? 'bg-[#0E8F66]' : color === 'blue' ? 'bg-[#2563EB]' : 'bg-[#9333EA]'}`} />
                      Enviado automaticamente
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 hidden rounded-3xl bg-[#2563EB] px-4 py-3 text-sm text-white shadow-lg sm:flex sm:flex-col">
              <span className="font-semibold">89% match</span>
              <span className="text-xs text-white/70">Amazon Brasil</span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-[0_45px_95px_-60px_rgba(15,23,42,0.35)]">
          <h3 className="text-2xl font-semibold text-[#02161F]">Comece agora e esteja disponível para as próximas turmas</h3>
          <p className="mt-4 text-sm text-slate-600">
            Quanto mais você participa, maior sua presença nas recomendações. Ative o radar e receba convites sem precisar procurar.
          </p>
          <button className="mt-6 rounded-xl bg-[#0E8F66] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#0b7453]">
            Encontrar vagas agora
          </button>
        </div>
      </div>
    </section>
  )
}

export default TalentBankSection