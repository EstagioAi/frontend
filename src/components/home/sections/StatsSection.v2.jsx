import React, { useState, useEffect, useRef } from 'react'
import { Users, Briefcase, TrendingUp } from 'lucide-react'

const stats = [
  {
    value: 92,
    suffix: '%',
    label: 'Usuários encontram vagas relevantes',
    icon: Users,
  },
  {
    value: 2500,
    suffix: '+',
    label: 'Vagas publicadas mensalmente',
    icon: Briefcase,
  },
  {
    value: 89,
    suffix: '%',
    label: 'Empregadores satisfeitos',
    icon: TrendingUp,
  }
]

// Counter Animation Component
const AnimatedCounter = ({ value, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime = null
    const startValue = 0
    const endValue = value

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
      
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden section-spacing" style={{ background: '#0A0A0A' }}>
      {/* Subtle background gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(130, 247, 179, 0.08) 0%, transparent 70%)'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container-redesign">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
            Resultados que falam
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[42px]" style={{ lineHeight: '1.2' }}>
            Números que{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-green-ds">comprovam</span>
              <span className="absolute bottom-1 left-0 h-3 w-full bg-green-ds/20 -rotate-1"></span>
            </span>
            {' '}nossa qualidade
          </h2>
        </div>

        {/* Stats Grid - REDESIGN 2025 */}
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {stats.map(({ value, suffix, label, icon: Icon }, index) => (
            <div
              key={index}
              className="group relative text-center"
            >
              {/* Separator (not for first item on desktop) */}
              {index > 0 && (
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-24 w-px hidden md:block"
                  style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                  aria-hidden="true"
                />
              )}

              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div 
                  className="flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(130, 247, 179, 0.1)' }}
                >
                  <Icon className="h-8 w-8 text-green-ds" strokeWidth={2} />
                </div>
              </div>

              {/* Animated Number */}
              <div 
                className="mb-4 text-7xl font-extrabold leading-none tracking-tight animate-count-up"
                style={{ color: '#82f7b3' }}
              >
                <AnimatedCounter value={value} suffix={suffix} />
              </div>

              {/* Label */}
              <p className="text-lg leading-relaxed" style={{ color: '#B0B0B0' }}>
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Optional: Add a CTA or supporting text */}
        <div className="mt-16 text-center">
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Milhares de estudantes e empresas confiam no EstágioAI para conectar talentos às melhores oportunidades
          </p>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
