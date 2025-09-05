import React from 'react'

const JobCard = ({ 
  companyLogo, 
  companyName, 
  jobTitle, 
  description, 
  salary, 
  skills, 
  chances, 
  progressWidth,
  unifeiInfo 
}) => {
  return (
    <div className="job-card-container" style={{ padding: '20px', maxWidth: '600px', margin: '20px auto' }}>
      <div className="job-card">
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progressWidth}%` }}></div>
        </div>
        
        <div className="job-card-header">
          <div className="company-logo">{companyLogo}</div>
          <div className="chances-section">
            <span className="chances-label">Suas chances:</span>
            <span className="chances-value">{chances}%</span>
          </div>
        </div>
        
        <h3 className="job-title">{jobTitle}</h3>
        <div className="company-name">{companyName}</div>
        <div className="company-description">{description}</div>
        
        <div className="job-salary">{salary}</div>
        
        <div className="skills-container">
          <div className="skills-label">Skills necessárias:</div>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        <p style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>
          {unifeiInfo}
        </p>
      </div>
    </div>
  )
}

const JobCards = () => {
  const jobData = [
    {
      companyLogo: "T",
      companyName: "TechCorp Innovations",
      jobTitle: "Desenvolvedor Frontend React",
      description: "Startup EdTech de 50 pessoas, ambiente descontraído, foco em inovação e crescimento acelerado.",
      salary: "R$ 2.500 - R$ 3.500",
      skills: ["React", "TypeScript", "CSS", "Git", "APIs REST"],
      chances: 85,
      progressWidth: 85,
      unifeiInfo: "3 estudantes da UNIFEI foram aprovados aqui nos últimos 6 meses"
    },
    {
      companyLogo: "I",
      companyName: "InnovateTech Solutions",
      jobTitle: "Desenvolvedor Backend Python",
      description: "Empresa de tecnologia focada em soluções inovadoras para o mercado financeiro.",
      salary: "R$ 3.000 - R$ 4.000",
      skills: ["Python", "Django", "PostgreSQL", "Docker", "AWS"],
      chances: 72,
      progressWidth: 72,
      unifeiInfo: "2 estudantes da UNIFEI foram aprovados aqui nos últimos 4 meses"
    },
    {
      companyLogo: "D",
      companyName: "DataFlow Analytics",
      jobTitle: "Analista de Dados Júnior",
      description: "Consultoria especializada em análise de dados e business intelligence para grandes empresas.",
      salary: "R$ 2.800 - R$ 3.800",
      skills: ["Python", "SQL", "Power BI", "Excel", "Estatística"],
      chances: 90,
      progressWidth: 90,
      unifeiInfo: "5 estudantes da UNIFEI foram aprovados aqui nos últimos 8 meses"
    },
    {
      companyLogo: "M",
      companyName: "MobileTech Apps",
      jobTitle: "Desenvolvedor Mobile Flutter",
      description: "Startup focada no desenvolvimento de aplicativos móveis para diversos segmentos.",
      salary: "R$ 2.200 - R$ 3.200",
      skills: ["Flutter", "Dart", "Firebase", "Git", "APIs REST"],
      chances: 78,
      progressWidth: 78,
      unifeiInfo: "1 estudante da UNIFEI foi aprovado aqui nos últimos 3 meses"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Vagas em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Confira algumas das oportunidades disponíveis na nossa plataforma, 
            com informações detalhadas sobre suas chances de aprovação.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jobData.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Estas são apenas algumas das centenas de vagas disponíveis na nossa plataforma.
          </p>
          <button className="bg-gradient-brand text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity">
            Ver Todas as Vagas
          </button>
        </div>
      </div>
    </section>
  )
}

export default JobCards

