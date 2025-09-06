import React from 'react'
import { PenTool, Code2, Megaphone, FileText } from 'lucide-react'

const categories = [
  { title: 'Design & Criatividade', icon: PenTool },
  { title: 'Desenvolvimento Web', icon: Code2 },
  { title: 'Vendas & Marketing', icon: Megaphone },
  { title: 'Redação de Conteúdo', icon: FileText },
]

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-[#092116]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-white text-3xl md:text-[32px] font-semibold">Busque por Categoria</h2>
          <p className="text-white/70 mt-2">Mais de 10k empresas estão procurando talentos.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ title, icon: Icon }) => (
            <div key={title} className="group rounded-2xl p-6 bg-white/5 border border-white/10 hover:bg-white/8 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white text-lg font-medium">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection

