import React from 'react'
import { MapPin, CheckCircle2, Star, TrendingUp, Briefcase } from 'lucide-react'

/**
 * ProfileCard - Componente de cartão de perfil moderno e reutilizável
 * 
 * @param {Object} props
 * @param {string} props.name - Nome do usuário
 * @param {string} props.role - Cargo/Função do usuário
 * @param {string} props.location - Localização do usuário
 * @param {string} props.bio - Descrição/Bio do usuário
 * @param {string} props.avatar - URL da imagem do avatar (opcional)
 * @param {string} props.avatarInitials - Iniciais para o avatar (se não houver imagem)
 * @param {string} props.coverColor - Cor de fundo do header (padrão: gradient vermelho/laranja)
 * @param {string} props.coverQuote - Citação no header
 * @param {Array} props.skills - Array de skills [{name, color}]
 * @param {Array} props.experience - Array de experiências [{company, role, period, logo}]
 * @param {boolean} props.verified - Se o perfil é verificado
 * @param {Function} props.onEdit - Callback para o botão Edit
 * @param {Function} props.onShare - Callback para o botão Share
 */
export default function ProfileCard({
  name = "Alexander Joe",
  role = "Product Designer",
  location = "Abu Dhabi, Uni Emirates",
  bio = "Creative and user-focused Product Designer with a passion for crafting intuitive digital experiences. Based in Abu Dhabi, AI...",
  avatar = null,
  avatarInitials = "AJ",
  coverColor = "linear-gradient(135deg, #c0392b 0%, #e74c3c 50%, #d35400 100%)",
  coverQuote = "Simplicity is the ultimate sophistication",
  coverAuthor = "Leonardo da Vinci",
  skills = [
    { name: 'UI/UX', color: 'pink' },
    { name: 'User Interface', color: 'blue' },
    { name: 'Wireframing', color: 'blue' },
    { name: 'Figma', color: 'purple' },
    { name: 'Branding', color: 'pink' },
    { name: 'UI/UX Design', color: 'cyan' },
    { name: 'Prototyping', color: 'orange' },
    { name: 'Responsive Design', color: 'teal' }
  ],
  experience = [
    { company: 'Cansaas Agency', role: 'Art Director', period: 'Nov 2024 - Present', logo: '++', color: '#0A7373' },
    { company: 'Carbon Studio', role: 'Art Director', period: 'Jul 2022 - Nov 2024', logo: 'C', color: '#000000' },
    { company: 'Kuhirart', role: 'Senior Designer', period: 'Jan 2020 - Jul 2022', logo: '☀️', color: '#FFD700' }
  ],
  verified = true,
  onEdit = () => {},
  onShare = () => {}
}) {
  
  const skillColors = {
    pink: 'bg-pink-50 text-pink-600 border-pink-200',
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    cyan: 'bg-cyan-50 text-cyan-600 border-cyan-200',
    orange: 'bg-orange-50 text-orange-600 border-orange-200',
    teal: 'bg-teal-50 text-teal-600 border-teal-200',
    green: 'bg-green-50 text-green-600 border-green-200'
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Card Container */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
        
        {/* Header Cover com Quote */}
        <div 
          className="relative h-32 flex items-center justify-center px-6 text-center"
          style={{ background: coverColor }}
        >
          <div className="relative z-10">
            <p className="text-white text-sm font-medium leading-relaxed mb-1">
              {coverQuote}
            </p>
            <p className="text-white/80 text-xs font-light">
              — {coverAuthor}
            </p>
          </div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Avatar - Overlapping header */}
        <div className="relative px-6 -mt-12 mb-4">
          <div className="relative inline-block">
            {avatar ? (
              <img 
                src={avatar} 
                alt={name}
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{avatarInitials}</span>
              </div>
            )}
            
            {/* Verified Badge */}
            {verified && (
              <div className="absolute bottom-0 right-0 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
            )}
          </div>
        </div>

        {/* Profile Info */}
        <div className="px-6 pb-6">
          {/* Name and Role */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-1 flex items-center gap-2">
              {name}
            </h3>
            <p className="text-gray-600 font-medium mb-2">{role}</p>
            <div className="flex items-center gap-1.5 text-gray-500 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-900 mb-2">Description</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {bio}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button 
              onClick={onShare}
              className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Share profile
            </button>
            <button 
              onClick={onEdit}
              className="px-4 py-3 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              Edit
            </button>
          </div>
        </div>

        {/* Skills Section */}
        <div className="px-6 pb-6">
          <h4 className="text-lg font-bold text-gray-900 mb-4">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium border
                  ${skillColors[skill.color] || skillColors.green}
                  hover:scale-105 transition-transform duration-200 cursor-default
                `}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="px-6 pb-6">
          <h4 className="text-lg font-bold text-gray-900 mb-4">Work Experience</h4>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="flex items-start gap-4 group hover:bg-gray-50 p-3 rounded-xl transition-colors duration-200 -mx-3">
                {/* Company Logo */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: exp.color }}
                >
                  {exp.logo}
                </div>
                
                {/* Experience Info */}
                <div className="flex-1 min-w-0">
                  <h5 className="font-bold text-gray-900 text-base mb-0.5 truncate">
                    {exp.company}
                  </h5>
                  <p className="text-gray-600 text-sm mb-1">{exp.role}</p>
                  <p className="text-gray-500 text-xs">{exp.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Footer (Optional) */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Briefcase className="w-4 h-4 text-green-ds" />
                <span className="text-xl font-bold text-gray-900">12</span>
              </div>
              <p className="text-xs text-gray-600 font-medium">Projects</p>
            </div>
            <div className="text-center border-x border-gray-300">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-xl font-bold text-gray-900">4.9</span>
              </div>
              <p className="text-xs text-gray-600 font-medium">Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <TrendingUp className="w-4 h-4 text-green-ds" />
                <span className="text-xl font-bold text-gray-900">89%</span>
              </div>
              <p className="text-xs text-gray-600 font-medium">Match</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
