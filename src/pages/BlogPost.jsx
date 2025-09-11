import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import { findPostBySlug } from '@/data/blogPosts'
import { setBasicTags } from '@/lib/seo'
import { buildArticleSchema } from '@/lib/schemas'

const BASE = 'https://estagioai.com'

export default function BlogPost() {
  const { slug } = useParams()
  const post = findPostBySlug(slug)

  useEffect(() => {
    if (!post) return
    const title = `${post.title} — Blog Estágio AI`
    const description = post.excerpt
    const image = post.img?.startsWith('http') ? post.img : `${BASE}${post.img}`
    const url = `${BASE}/blog/${slug}`
    const articleSchema = buildArticleSchema({
      headline: post.title,
      description,
      image,
      url,
      datePublished: new Date().toISOString().split('T')[0]
    })
    setBasicTags({
      title,
      description,
      canonical: url,
      og: { title, description, url, type: 'article', image },
      twitter: { card: 'summary_large_image', title, description, image },
      jsonLd: articleSchema
    })
  }, [post, slug])

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
          <p className="text-gray-600 mb-6">Verifique o endereço ou volte para o <a href="/blog" className="text-emerald-600 underline">blog</a>.</p>
          <a href="/blog" className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-500">Voltar ao Blog</a>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#092116]">
      <Navigation />
      <article className="flex-1 max-w-3xl mx-auto px-6 py-10 md:py-16">
        <p className="text-[11px] tracking-wider text-gray-500 font-semibold">ARTIGO</p>
        <h1 className="text-3xl md:text-4xl font-extrabold mt-2 leading-tight">{post.title}</h1>
        <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
          <span className="inline-flex items-center px-2 py-[2px] rounded-full bg-emerald-100 text-emerald-700 font-semibold text-[10px]">{post.tag}</span>
          <time>{new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}</time>
        </div>
        {post.img && (
          <img src={post.img} alt={post.title} className="mt-6 rounded-xl w-full object-cover max-h-96" loading="eager" />
        )}
        <div className="prose prose-emerald mt-8 text-sm md:text-base leading-relaxed max-w-none">
          <p>{post.excerpt}</p>
          <p>
            Este conteúdo é um protótipo inicial. Em uma próxima etapa adicionaremos corpo completo
            do artigo, parágrafos estruturados, listas e links úteis para aprofundar a preparação para o estágio.
          </p>
          <p>
            Use este modelo para acelerar a criação de páginas individuais e habilitar rich results de Artigo no Google.
          </p>
        </div>
        <div className="mt-10">
          <a href="/blog" className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium hover:bg-gray-50">← Voltar</a>
        </div>
      </article>
      <Footer />
    </div>
  )
}
