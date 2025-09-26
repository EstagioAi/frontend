import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const checklist = [
  'Linha de progresso visual por candidatura',
  'Notificações em tempo real via e-mail e WhatsApp',
  'Feedback simplificado em um clique para empresas',
  'Histórico completo para acompanhar aprendizados'
]

const FeedbackSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#020F1A] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(140%_140%_at_15%_10%,rgba(1,226,151,0.12),rgba(2,15,26,0.95))]" />
        <div className="absolute -bottom-32 right-[-120px] h-[420px] w-[420px] rounded-full bg-[#0B3B2A]/70 blur-[140px]" />
        <div className="absolute -top-24 left-[-120px] h-[340px] w-[340px] rounded-full bg-[#1E3A8A]/40 blur-[160px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 text-white shadow-[0_45px_80px_-45px_rgba(23,255,183,0.35)] backdrop-blur-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">Candidatura</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Status em tempo real</h3>
            </div>
            <span className="rounded-full bg-[#6FFFC7]/20 px-3 py-1 text-xs font-medium text-[#6FFFC7]">Atualizado agora</span>
          </div>

          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-[auto,1fr] items-center gap-x-3 gap-y-4 text-sm text-white/70">
              {[{ label: 'Candidatura enviada', state: 'done' }, { label: 'Currículo visualizado', state: 'active' }, { label: 'Entrevista técnica', state: 'next' }, { label: 'Oferta enviada', state: 'next' }].map(({ label, state }, index) => (
                <React.Fragment key={label}>
                  <div className="relative flex items-center justify-center">
                    <span className={`grid h-3.5 w-3.5 place-items-center rounded-full ${state === 'done' ? 'bg-[#6FFFC7]' : state === 'active' ? 'bg-[#6FFFC7]' : 'bg-white/10'}`}>
                      {state === 'active' && <span className="absolute inline-flex h-3.5 w-3.5 rounded-full bg-[#6FFFC7] opacity-30 animate-ping" />}
                    </span>
                    {index < 3 && (
                      <span className={`absolute left-1/2 top-full h-8 w-px -translate-x-1/2 ${state === 'done' || state === 'active' ? 'bg-gradient-to-b from-[#6FFFC7] to-transparent' : 'bg-white/10'}`} aria-hidden="true" />
                    )}
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-sm font-medium text-white">{label}</p>
                    <p className="text-xs text-white/60">{state === 'done' ? 'Concluído há 12h' : state === 'active' ? 'Feedback esperado às 14h' : 'Próxima etapa estimada em 2 dias'}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <div className="rounded-2xl border border-[#6FFFC7]/40 bg-[#6FFFC7]/10 p-4 text-sm text-white/80">
              <p className="font-semibold text-[#6FFFC7]">Próximo passo confirmado</p>
              <p className="mt-2">Entrevista técnica amanhã às 14h. Veja o roteiro de perguntas e os cases que mais aprovam nesse processo.</p>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white/80">
            Feedback obrigatório e humanizado
          </div>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Transparência em cada etapa{' '}
            <span className="text-[#6FFFC7]">sem ruído</span>
          </h2>
          <p className="mt-6 text-lg text-white/70">
            A mesma infraestrutura que as empresas usam no EstágioAI garante que você saiba exatamente onde está. Nada de abrir dezenas de abas ou mandar e-mails pedindo retorno.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {checklist.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#6FFFC7]" />
                <span className="text-sm text-white/75">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
            <p>"Desde que começamos a usar o EstágioAI, os estudantes recebem uma resposta em média 3 vezes mais rápido. O painel é o que nos faltava."</p>
            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/40">Coordenadora de estágios · Universidade Parceira</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeedbackSection
