import React from 'react'
import { Building2 } from 'lucide-react'

const jobs = [
  { role: 'UI/UX Designer', company: 'Invision App', type: 'Tempo Integral', location: 'Remoto', salary: 'R$ 10k - R$ 15k' },
  { role: 'Analista de Negócios', company: 'Figma Inc.', type: 'Contrato', location: 'São Paulo, SP', salary: 'R$ 8k - R$ 12k' },
  { role: 'Desenvolvedor Frontend', company: 'Vercel', type: 'Tempo Integral', location: 'Remoto', salary: 'R$ 12k - R$ 18k' },
]

const NewestJobsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[32px] font-semibold text-black mb-8">Vagas Recentes</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div key={job.role} className="rounded-2xl p-6 bg-[#212121] text-white">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#01E297]">{job.role}</h3>
                    <p className="text-white/70 text-sm">{job.company}</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10">{job.type}</span>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-white/80">
                <span>{job.location}</span>
                <span className="text-[#01E297] font-medium">{job.salary}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewestJobsSection

