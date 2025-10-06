import React from 'react'
import { MapPin, CheckCircle2, TrendingUp, Briefcase } from 'lucide-react'

/**
 * StudentProfileCard - Versão Minimalista
 * Design limpo e focado no essencial
 */
export default function StudentProfileCard({
  name = "João Silva",
  course = "Engenharia de Software",
  location = "São Paulo, Brasil",
  bio = "Estudante de Engenharia de Software apaixonado por tecnologia e inovação.",
  avatar = null,
  avatarInitials = "JS",
  skills = [
    { name: 'React' },
    { name: 'JavaScript' },
    { name: 'Node.js' },
    { name: 'Python' }
  ],
  stats = {
    applications: 12,
    matchRate: 89,
    profileComplete: 100
  },
  verified = true
}) {

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Card Container - Minimalista */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        
        {/* Header Simples com Gradiente Verde */}
        <div className="h-24 bg-gradient-to-br from-green-ds to-green-hover-ds"></div>

        {/* Avatar - Overlapping */}
        <div className="px-6 -mt-12 mb-4">
          <div className="relative inline-block">
            {avatar ? (
              <img 
                src={avatar} 
                alt={name}
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-gray-700 text-2xl font-bold">{avatarInitials}</span>
              </div>
            )}
            
            {/* Verified Badge - Simplificado */}
            {verified && (
              <div className="absolute bottom-0 right-0 w-7 h-7 bg-green-ds rounded-full flex items-center justify-center border-2 border-white">
                <CheckCircle2 className="w-4 h-4 text-navy-dark" strokeWidth={3} />
              </div>
            )}
          </div>
        </div>

        {/* Profile Info - Minimalista */}
        <div className="px-6 pb-6">
          {/* Name and Course */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-navy-dark mb-1">
              {name}
            </h3>
            <p className="text-gray-600 font-medium text-sm mb-2">{course}</p>
            <div className="flex items-center gap-1.5 text-gray-500 text-xs">
              <MapPin className="w-3.5 h-3.5" />
              <span>{location}</span>
            </div>
          </div>

          {/* Stats - Compacto */}
          <div className="grid grid-cols-3 gap-2 mb-6 p-3 bg-gray-50 rounded-xl">
            <div className="text-center">
              <div className="text-lg font-bold text-navy-dark">{stats.applications}</div>
              <p className="text-xs text-gray-600">Vagas</p>
            </div>
            <div className="text-center border-x border-gray-200">
              <div className="text-lg font-bold text-green-ds">{stats.profileComplete}%</div>
              <p className="text-xs text-gray-600">Perfil</p>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-ds">{stats.matchRate}%</div>
              <p className="text-xs text-gray-600">Match</p>
            </div>
          </div>

          {/* Skills - Simples */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {skills.slice(0, 4).map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-gray-200 transition-colors"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button - Simples */}
          <button className="w-full bg-green-ds hover:bg-green-hover-ds text-navy-dark font-semibold py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
            Ver Vagas
          </button>
        </div>
      </div>
    </div>
  )
}
