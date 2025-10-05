import React from 'react'

/**
 * BackgroundShapes - Componente para adicionar formas geométricas decorativas ao background
 * 
 * @param {Object} props
 * @param {string} props.variant - Variação do layout das formas ('hero' | 'section1' | 'section2' | 'section3')
 * @param {string} props.color - Cor das formas (padrão: '#82f7b3')
 * @param {number} props.opacity - Opacidade das formas (padrão: 0.15)
 */
const BackgroundShapes = ({
  variant = 'section1',
  color = '#82f7b3',
  accentColor = 'rgba(15, 15, 15, 0.2)',
  opacity = 0.15,
  accentOpacity = 0.12,
  blendMode = 'multiply',
  className = ''
}) => {
  const shapes = {
    hero: (
      <>
        {/* Círculo grande superior direito */}
        <div
          className="absolute -right-12 -top-16 h-56 w-56 rounded-full blur-3xl sm:h-72 sm:w-72"
          style={{
            background: `linear-gradient(140deg, ${color} 0%, transparent 72%)`,
            opacity: opacity + 0.08
          }}
        />

        {/* Elipse horizontal esquerda */}
        <div
          className="absolute -left-16 top-[18%] h-36 w-72 rounded-full blur-[90px] sm:-left-10 sm:h-48 sm:w-96"
          style={{
            background: `radial-gradient(circle at 30% 50%, ${color} 0%, transparent 75%)`,
            opacity: Math.max(opacity - 0.02, 0)
          }}
        />

        {/* Círculo médio inferior */}
        <div
          className="absolute bottom-[-10%] left-1/3 h-40 w-40 rounded-full blur-3xl sm:h-56 sm:w-56"
          style={{
            background: `radial-gradient(circle, ${accentColor} 0%, transparent 60%)`,
            opacity: accentOpacity
          }}
        />

        {/* Linhas diagonais decorativas */}
        <div
          className="absolute left-[45%] top-[12%] h-32 w-1 rotate-12 bg-gradient-to-b from-transparent via-white/40 to-transparent opacity-70 mix-blend-screen"
        />
        <div
          className="absolute left-[52%] top-[18%] h-32 w-px rotate-12 bg-gradient-to-b from-transparent via-white/30 to-transparent opacity-60 mix-blend-screen"
        />

        {/* Forma oval pequena superior */}
        <div
          className="absolute right-[20%] top-[22%] h-28 w-48 rounded-full blur-[70px]"
          style={{
            background: `radial-gradient(ellipse, ${accentColor} 0%, transparent 75%)`,
            opacity: accentOpacity + 0.05
          }}
        />
      </>
    ),
    
    section1: (
      <>
        {/* Círculo superior esquerdo */}
        <div 
          className="absolute -top-24 -left-24 h-48 w-48 rounded-full"
          style={{ 
            background: color,
            opacity: opacity
          }}
        />
        
        {/* Elipse direita */}
        <div 
          className="absolute top-1/3 -right-16 h-56 w-32 rounded-full"
          style={{ 
            background: color,
            opacity: opacity - 0.03,
            transform: 'rotate(20deg)'
          }}
        />
        
        {/* Círculo pequeno inferior */}
        <div 
          className="absolute -bottom-12 left-1/4 h-32 w-32 rounded-full"
          style={{ 
            background: `radial-gradient(circle, ${color} 0%, transparent 60%)`,
            opacity: opacity + 0.02
          }}
        />
      </>
    ),
    
    section2: (
      <>
        {/* Forma oval superior direita */}
        <div
          className="absolute right-[18%] top-[4%] h-56 w-56 rounded-full blur-3xl sm:h-72 sm:w-72"
          style={{
            background: `radial-gradient(circle, ${color} 0%, transparent 75%)`,
            opacity: opacity
          }}
        />

        {/* Círculo médio esquerdo */}
        <div
          className="absolute left-[8%] top-[32%] h-52 w-52 rounded-full blur-[120px] sm:h-64 sm:w-64"
          style={{
            background: `radial-gradient(circle, ${color} 0%, transparent 68%)`,
            opacity: Math.max(opacity - 0.04, 0)
          }}
        />

        {/* Elipse inferior direita */}
        <div
          className="absolute bottom-[6%] right-[26%] h-64 w-40 rounded-full blur-[90px]"
          style={{
            background: `linear-gradient(135deg, ${color} 0%, transparent 80%)`,
            opacity: Math.max(opacity - 0.05, 0),
            transform: 'rotate(10deg)'
          }}
        />

        {/* Anel decorativo */}
        <div
          className="absolute left-[48%] top-[18%] h-32 w-32 rounded-full border border-white/30 opacity-70"
          style={{
            boxShadow: `0 0 120px ${accentColor}`
          }}
        />

        {/* Destaque escuro */}
        <div
          className="absolute right-[12%] top-[42%] h-32 w-32 rounded-full blur-[80px]"
          style={{
            background: accentColor,
            opacity: accentOpacity
          }}
        />
      </>
    ),
    
    section3: (
      <>
        {/* Círculo grande superior */}
        <div
          className="absolute left-[35%] top-[-8%] h-52 w-52 rounded-full blur-[110px] sm:h-64 sm:w-64"
          style={{
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            opacity: opacity
          }}
        />

        {/* Elipse vertical direita */}
        <div
          className="absolute -right-6 top-[12%] h-60 w-36 rounded-full blur-[120px]"
          style={{
            background: `linear-gradient(135deg, ${accentColor} 0%, transparent 85%)`,
            opacity: accentOpacity
          }}
        />

        {/* Forma oval inferior esquerda */}
        <div
          className="absolute -left-12 bottom-[10%] h-48 w-72 rounded-full blur-[110px]"
          style={{
            background: `linear-gradient(135deg, ${color} 0%, transparent 85%)`,
            opacity: opacity + 0.04,
            transform: 'rotate(-25deg)'
          }}
        />

        {/* Círculo pequeno centro-direita */}
        <div
          className="absolute right-[26%] top-[62%] h-24 w-24 rounded-full blur-[70px]"
          style={{
            background: `radial-gradient(circle, ${accentColor} 0%, transparent 65%)`,
            opacity: accentOpacity
          }}
        />

        {/* Aros finos */}
        <div className="absolute left-[42%] top-[32%] h-40 w-40 rounded-full border border-white/20 opacity-60" />
        <div className="absolute left-[42%] top-[32%] h-48 w-48 rounded-full border border-white/10 opacity-40" />
      </>
    ),

    mesh: (
      <>
        <div
          className="absolute left-[10%] top-[12%] h-72 w-72 rounded-full blur-[120px]"
          style={{
            background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
            opacity: opacity
          }}
        />
        <div
          className="absolute right-[8%] top-[30%] h-64 w-64 rounded-[50%] blur-[110px]"
          style={{
            background: `radial-gradient(circle at center, ${accentColor} 0%, transparent 70%)`,
            opacity: accentOpacity + 0.05
          }}
        />
        <div
          className="absolute left-[35%] bottom-[12%] h-44 w-80 rounded-full blur-[140px]"
          style={{
            background: `linear-gradient(120deg, ${color} 0%, transparent 80%)`,
            opacity: Math.max(opacity - 0.06, 0)
          }}
        />
        <div
          className="absolute right-[42%] top-[18%] h-16 w-16 rounded-full border border-white/30 opacity-70"
          style={{ boxShadow: `0 0 80px ${accentColor}` }}
        />
      </>
    ),

    orbits: (
      <>
        {/* Large outlined circle top-right */}
        <div
          className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full"
          style={{
            border: `3px solid ${color}`,
            opacity: Math.min(opacity + 0.1, 1)
          }}
        />

        {/* Large outlined circle bottom-left */}
        <div
          className="absolute -bottom-40 -left-36 h-[500px] w-[500px] rounded-full"
          style={{
            border: `3px solid ${color}`,
            opacity: Math.max(opacity - 0.05, 0.05)
          }}
        />

        {/* Soft filled accent circle */}
        <div
          className="absolute top-[18%] right-[22%] h-[220px] w-[220px] rounded-full blur-3xl"
          style={{
            background: accentColor,
            opacity: accentOpacity + 0.05
          }}
        />

        {/* Faint inner ring */}
        <div
          className="absolute left-[38%] top-[8%] h-[320px] w-[320px] rounded-full"
          style={{
            border: `2px solid ${color}`,
            opacity: Math.max(opacity - 0.02, 0.08)
          }}
        />

        {/* Minimal highlight circle */}
        <div
          className="absolute left-[12%] top-[46%] h-[140px] w-[140px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            opacity: Math.max(opacity - 0.08, 0.04)
          }}
        />
      </>
    ),
    
    minimal: (
      <>
        {/* Apenas círculos sutis */}
        <div 
          className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full blur-3xl"
          style={{ 
            background: color,
            opacity: opacity - 0.05
          }}
        />
        
        <div 
          className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full blur-3xl"
          style={{ 
            background: color,
            opacity: opacity - 0.05
          }}
        />
      </>
    )
  }

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      aria-hidden="true"
      style={{ mixBlendMode: blendMode }}
    >
      {shapes[variant] || shapes.minimal}
    </div>
  )
}

export default BackgroundShapes

