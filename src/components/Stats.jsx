import React from 'react'

const Stats = () => {
  const stats = [
    {
      value: "80%",
      label: "dos estudantes relatam alta frustração na busca por estágios",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      value: "65%",
      label: "demonstraram interesse em testar nossa solução",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      value: "26",
      label: "universitários participaram da nossa pesquisa",
      color: "text-green-500",
      bgColor: "bg-green-50"
    }
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`${stat.bgColor} rounded-2xl p-8 text-center border border-gray-200 hover:shadow-lg transition-all duration-300 animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`text-5xl md:text-6xl font-black ${stat.color} mb-4`}>
                {stat.value}
              </div>
              <p className="text-muted-foreground font-medium leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

