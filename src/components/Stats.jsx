import React from 'react'

const Stats = () => {
  const stats = [
    {
      value: "80%",
      label: "dos estudantes relatam alta frustração na busca por estágios",
      color: "text-brand-neon",
      border: "from-brand-neon/60 to-transparent"
    },
    {
      value: "65%",
      label: "demonstraram interesse em testar nossa solução",
      color: "text-brand-purple",
      border: "from-brand-purple/60 to-transparent"
    },
    {
      value: "26",
      label: "universitários participaram da nossa pesquisa",
      color: "text-green-500",
      border: "from-green-500/60 to-transparent"
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 text-center border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 animate-slide-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`text-5xl md:text-6xl font-black ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <p className="text-gray-600 font-medium leading-relaxed">
                {stat.label}
              </p>
              <div className={`mt-6 h-1 w-full bg-gradient-to-r ${stat.border} rounded-full`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

