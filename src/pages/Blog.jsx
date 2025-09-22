import React, { useEffect, useMemo, useState } from "react";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";
import { posts as blogPosts } from "./blog/posts";
import { Link } from "react-router-dom";
import { Search, Filter } from "lucide-react";

// Normalize posts for the grid/index view
const posts = blogPosts.map((p) => ({
  title: p.title,
  tag: p.tag || (p.tags?.[0] ?? "Blog"),
  excerpt: p.excerpt,
  img: p.cover,
  slug: p.slug,
  tags: p.tags,
}));

export default function Blog() {
  const allCategories = useMemo(() => Array.from(new Set(posts.map((p) => p.tag))), []);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(new Set());
  const [page, setPage] = useState(1);
  const pageSize = 9;

  const filtered = useMemo(() => {
    let arr = posts;
    if (selected.size) arr = arr.filter((p) => selected.has(p.tag));
    if (query.trim()) {
      const q = query.toLowerCase();
      arr = arr.filter((p) => (p.title + " " + p.excerpt).toLowerCase().includes(q));
    }
    return arr;
  }, [query, selected]);

  useEffect(() => { setPage(1); }, [query, selected]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pagePosts = useMemo(
    () => filtered.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize),
    [filtered, page]
  );

  const toggleCategory = (c) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
  };
  
  const clearFilters = () => { 
    setSelected(new Set()); 
    setQuery(""); 
    setPage(1); 
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />

      {/* Header simplificado */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Blog <span className="text-[#01E297]">EstágioAI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Guias práticos, dicas de carreira e tudo sobre estágios para acelerar sua jornada profissional.
          </p>
          
          {/* Busca centralizada */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar artigos, dicas, guias..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-[#01E297] focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Filtros simples */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            <button 
              onClick={clearFilters} 
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                selected.size === 0 
                  ? "bg-[#01E297] text-white shadow-lg" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Todos ({filtered.length})
            </button>
            {allCategories.map((category) => (
              <button 
                key={category} 
                onClick={() => toggleCategory(category)} 
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  selected.has(category)
                    ? "bg-[#01E297] text-white shadow-lg" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de posts limpo */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {pagePosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pagePosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
              
              {/* Paginação simples */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-16 gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => setPage(pageNum)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        page === pageNum
                          ? "bg-[#01E297] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Nenhum artigo encontrado</h3>
              <p className="text-gray-600 mb-6">Tente outros termos de busca ou categorias diferentes.</p>
              <button 
                onClick={clearFilters}
                className="bg-[#01E297] text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                Ver todos os artigos
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Componente do card do post simplificado
function PostCard({ post }) {
  return (
    <Link 
      to={`/blog/${post.slug}`} 
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
    >
      <div className="aspect-video bg-gray-100 overflow-hidden">
        <img 
          src={post.img} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-[#01E297]/10 text-[#01E297] text-sm font-medium rounded-full">
            {post.tag}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#01E297] transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}

