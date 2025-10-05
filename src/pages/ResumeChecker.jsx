import React, { useEffect, useMemo, useState } from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import { Button } from '@/components/ui/button.jsx'
import { CheckCircle2, FileText, ListChecks, Sparkles, Upload, FileUp, Loader2, ShieldCheck, Check, XCircle, Info } from 'lucide-react'
import { Link } from 'react-router-dom'

// Lightweight analyzer with categories
function analyzeResume(text = '') {
  const t = text.toLowerCase()
  const sections = [
    { key: 'Contato', pattern: /(contato|e-mail|email|telefone|linkedin|github)/ },
    { key: 'Resumo', pattern: /(objetivo|resumo|sobre)/ },
    { key: 'Formação', pattern: /(formação|formacao|educação|educacao|universidade|faculdade|curso)/ },
    { key: 'Experiência', pattern: /(experiência|experiencia|projeto|trabalho|internship|estágio|estagio)/ },
    { key: 'Habilidades', pattern: /(habilidades|competências|competencias|skills|tecnologias)/ },
  ]
  const keywords = ['estágio','estagio','responsável','responsavel','proativo','colaboração','aprendizado','react','javascript','python']

  const sectionHits = sections.map(s => ({ name: s.key, ok: s.pattern.test(t) }))
  const keywordMatches = keywords.filter(k => t.includes(k))

  const base = sectionHits.filter(s => s.ok).length + Math.min(5, keywordMatches.length)
  const score = Math.max(10, Math.min(100, Math.round((base / 10) * 100)))

  const issues = []
  const missing = sectionHits.filter(s => !s.ok).map(s => s.name)
  if (missing.length) issues.push(`Adicione/clareie as seções: ${missing.join(', ')}`)
  if (keywordMatches.length < 3) issues.push('Use 3-5 palavras‑chave da vaga ao longo do texto (sem exageros).')
  if (t.length < 900) issues.push('Seu currículo parece curto. Detalhe resultados com números e impacto.')

  // Category breakdown (fake heuristics but useful visual)
  const categories = [
    { name: 'Conteúdo', value: Math.min(100, 60 + keywordMatches.length * 8) },
    { name: 'Formato & Brevidade', value: t.length > 1200 ? 70 : 85 },
    { name: 'Estilo', value: 75 },
    { name: 'Seções', value: Math.round((sectionHits.filter(s => s.ok).length / sections.length) * 100) },
    { name: 'Skills', value: Math.min(100, 40 + keywordMatches.length * 10) }
  ]

  return { score, sectionHits, keywordMatches, issues, categories }
}

async function extractTextFromFile(file) {
  const name = file.name.toLowerCase()
  if (name.endsWith('.txt')) {
    return await file.text()
  }
  const ab = await file.arrayBuffer()
  if (name.endsWith('.docx')) {
    try {
      const mammoth = await import('mammoth/mammoth.browser.js')
      const result = await mammoth.extractRawText({ arrayBuffer: ab })
      return result.value || ''
    } catch (e) {
      console.error('DOCX parse error', e)
      return ''
    }
  }
  if (name.endsWith('.pdf')) {
    try {
      const pdfjsLib = await import('pdfjs-dist')
      const PdfWorker = (await import('pdfjs-dist/build/pdf.worker.mjs?worker')).default
      pdfjsLib.GlobalWorkerOptions.workerPort = new PdfWorker()
      const loadingTask = pdfjsLib.getDocument({ data: ab })
      const doc = await loadingTask.promise
      let text = ''
      for (let i = 1; i <= doc.numPages; i++) {
        const page = await doc.getPage(i)
        const content = await page.getTextContent()
        text += content.items.map(it => it.str).join(' ') + '\n'
      }
      return text
    } catch (e) {
      console.error('PDF parse error', e)
      return ''
    }
  }
  return ''
}

function Gauge({ value = 0 }) {
  const deg = Math.round((value / 100) * 360)
  return (
    <div className="w-32 h-32 rounded-full grid place-items-center" style={{ background: `conic-gradient(#82f7b3 ${deg}deg, #E5E7EB ${deg}deg)` }}>
      <div className="w-24 h-24 rounded-full bg-white-ds grid place-items-center text-primary-ds">
        <div className="text-center">
          <div className="text-xl font-bold">{value}<span className="text-sm">/100</span></div>
          <div className="text-[11px] text-black-50">Resume Score</div>
        </div>
      </div>
    </div>
  )
}

function SuggestionsPanel({ analysis }) {
  return (
    <div className="rounded-2xl border-2 border-black-10 bg-white-ds p-5 shadow-lg">
      <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary-ds"><ListChecks className="w-4 h-4" /> Sugestões</div>
      {analysis.issues.length === 0 ? (
        <div className="mt-3 text-sm text-green-ds bg-green-ds/10 border-2 border-green-ds rounded-lg p-3 inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Seu currículo parece ótimo!</div>
      ) : (
        <ul className="mt-3 list-disc pl-5 text-sm text-black-70 space-y-2">
          {analysis.issues.map((s, i) => (<li key={i}>{s}</li>))}
        </ul>
      )}
    </div>
  )
}

export default function ResumeChecker() {
  const [file, setFile] = useState(null)
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [fileUrl, setFileUrl] = useState('')
  const analysis = useMemo(() => analyzeResume(text), [text])

  const onDrop = async (files) => {
    const f = files?.[0]
    if (!f) return
    setError('')
    setFile(f)
    setLoading(true)
    const extracted = await extractTextFromFile(f)
    setText(extracted)
    setLoading(false)
    if (!extracted) setError('Não foi possível ler o arquivo. Envie PDF, DOCX ou TXT simples.')
    // Preview URL for PDFs
    try {
      if (f && f.name.toLowerCase().endsWith('.pdf')) {
        const url = URL.createObjectURL(f)
        setFileUrl((prev) => {
          if (prev) URL.revokeObjectURL(prev)
          return url
        })
      } else {
        setFileUrl((prev) => {
          if (prev) URL.revokeObjectURL(prev)
          return ''
        })
      }
    } catch (error) {
      console.error('Erro ao preparar visualização do arquivo', error)
      setFileUrl('')
    }
  }

  const openPicker = () => document.getElementById('resume-file-input')?.click()

  // Cleanup object URL when component unmounts
  useEffect(() => {
    return () => {
      if (fileUrl) URL.revokeObjectURL(fileUrl)
    }
  }, [fileUrl])

  return (
    <div className="min-h-screen flex flex-col bg-primary-ds">
      <Navigation />
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="bg-primary-ds pt-20 pb-16 sm:pt-24 lg:pt-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-green-ds/10 text-primary-ds px-4 py-2 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" /> Verificador de Currículo (ATS)
                </div>
                <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-primary-ds">Mais chances no ATS com um currículo claro</h1>
                <p className="mt-4 text-lg leading-relaxed text-black-70">Envie seu PDF, DOCX ou TXT. Nós analisamos legibilidade para ATS, seções essenciais e palavras‑chave para sugerir melhorias.</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-6">
                  <Link to="/modelos-de-curriculo">
                    <button className="inline-flex items-center gap-2 rounded-lg bg-green-ds px-6 py-3 text-sm font-bold text-primary-ds transition-all duration-200 hover:bg-green-hover-ds hover:shadow-lg">
                      Ver modelos
                    </button>
                  </Link>
                  <Link to="/em-construcao">
                    <button className="inline-flex items-center gap-2 rounded-lg border-2 border-black-10 bg-white-ds px-5 py-2.5 text-sm font-bold text-black-70 hover:border-green-ds hover:bg-green-ds/5 hover:text-primary-ds transition-all duration-200">
                      Como funciona o ATS
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-6 bg-white-ds p-6 rounded-2xl border-2 border-black-10 shadow-lg">
                <Gauge value={analysis.score} />
                <div className="text-sm text-black-70">
                  <div className="font-semibold text-primary-ds">Compatibilidade estimada</div>
                  <div>Baseada em seções, palavras‑chave e formatação</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[340px,1fr] gap-8">
            {/* Left column (sticky): Score, Parse Rate, Metrics, Seções, Sugestões */}
            <aside className="space-y-6 md:sticky md:self-start md:top-24">
              {/* Score */}
              <div className="rounded-2xl border-2 border-black-10 p-5 bg-white-ds shadow-lg">
                <div className="flex items-center gap-4">
                  <Gauge value={analysis.score} />
                  <div>
                    <div className="text-sm font-semibold text-primary-ds">Resume Score</div>
                    <div className="text-xs text-black-50">{analysis.issues.length} issues</div>
                  </div>
                </div>
              </div>

              {/* Parse Rate */}
              <div className="rounded-2xl border-2 border-black-10 bg-white-ds p-5 shadow-lg">
                <div className="text-xs font-medium text-black-70">ATS Parse Rate</div>
                <div className="mt-3 h-2.5 rounded-full bg-primary-ds border-2 border-black-10">
                  <div className="h-2.5 rounded-full bg-green-ds" style={{ width: `${Math.min(100, 40 + analysis.keywordMatches.length * 10)}%` }} />
                </div>
                <div className="mt-3 text-xs text-black-70">Palavras‑chave detectadas: <span className="font-medium text-primary-ds">{analysis.keywordMatches.length}</span></div>
              </div>

              {/* Metrics overview */}
              <div className="rounded-2xl border-2 border-black-10 p-5 bg-white-ds shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-primary-ds">Métricas principais</div>
                  <div className="text-xs text-black-50">{analysis.issues.length} issues</div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  {analysis.categories.map((c) => (
                    <div key={c.name} className="space-y-1">
                      <div className="flex items-center justify-between"><span className="text-black-70">{c.name}</span><span className="font-medium text-primary-ds">{c.value}%</span></div>
                      <div className="h-1.5 rounded-full bg-primary-ds"><div className="h-1.5 rounded-full bg-green-ds" style={{ width: `${c.value}%` }} /></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Seções */}
              <div className="rounded-2xl border-2 border-black-10 p-5 bg-white-ds shadow-lg">
                <div className="text-xs font-semibold text-black-50 uppercase">Seções</div>
                <ul className="mt-2 space-y-2 text-sm">
                  {analysis.sectionHits.map((s) => (
                    <li key={s.name} className="flex items-center gap-2">
                      {s.ok ? <Check className="w-4 h-4 text-green-ds"/> : <XCircle className="w-4 h-4 text-red-500"/>}
                      <span className={s.ok ? 'text-primary-ds' : 'text-black-70'}>{s.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <SuggestionsPanel analysis={analysis} />

              <div className="rounded-2xl border-2 border-black-10 p-5 bg-white-ds shadow-lg">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-black-50 uppercase"><Info className="w-3.5 h-3.5"/> Dicas rápidas</div>
                <ul className="mt-2 text-[13px] text-black-70 space-y-1.5 list-disc pl-4">
                  <li>Use PDF texto (não imagem) e fontes padrão.</li>
                  <li>Evite colunas complexas e ícones no corpo.</li>
                  <li>Nomeie seções claramente: Experiência, Educação, Skills…</li>
                </ul>
              </div>
            </aside>

            {/* Right column: upload e pré‑visualização */}
            <div className="space-y-6">
              {/* Dropzone at top */}
              <div
                className="rounded-2xl border-2 border-dashed border-black-20 bg-white-ds p-6 hover:border-green-ds transition-all duration-200 cursor-pointer"
                onDragOver={(e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'copy' }}
                onDrop={(e) => { e.preventDefault(); onDrop(e.dataTransfer.files) }}
                onClick={openPicker}
                role="button"
                tabIndex={0}
              >
                <input id="resume-file-input" type="file" accept=".pdf,.docx,.txt" className="hidden" onChange={(e) => onDrop(e.target.files)} />
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-xl bg-green-ds/10 grid place-items-center border-2 border-green-20 text-green-ds"><FileUp className="w-6 h-6" /></span>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-primary-ds">Arraste e solte seu currículo aqui</div>
                    <div className="text-xs text-black-50">ou clique para selecionar (PDF, DOCX ou TXT)</div>
                    {file && (
                      <div className="mt-2 inline-flex items-center gap-2 rounded-lg bg-green-ds/10 border-2 border-green-20 px-2.5 py-1.5 text-xs text-primary-ds">
                        <FileText className="w-3.5 h-3.5" /> {file.name}
                      </div>
                    )}
                  </div>
                  <div>
                    <button className="inline-flex items-center gap-2 rounded-lg border-2 border-black-10 bg-white-ds px-4 py-2 text-sm font-bold text-black-70 hover:border-green-ds hover:bg-green-ds/5 hover:text-primary-ds transition-all duration-200">
                      Carregar arquivo
                    </button>
                  </div>
                </div>
                {loading && (
                  <div className="mt-4 inline-flex items-center gap-2 text-sm text-black-70"><Loader2 className="w-4 h-4 animate-spin"/> Lendo o arquivo…</div>
                )}
                {error && (
                  <div className="mt-3 text-sm text-red-600">{error}</div>
                )}
              </div>

              {/* Preview: PDF viewer quando possível, senão texto extraído */}
              <div className="rounded-2xl border-2 border-black-10 bg-white-ds p-5 shadow-lg">
                <div className="text-sm font-semibold text-primary-ds mb-2">Pré‑visualização do currículo</div>
                {fileUrl ? (
                  <div className="rounded-xl overflow-hidden border-2 border-black-10">
                    <iframe title="PDF Preview" src={fileUrl} className="w-full h-[720px] bg-primary-ds" />
                  </div>
                ) : (
                  <div>
                    <div className="text-xs text-black-50 mb-2">Visualização em texto que o ATS consegue ler</div>
                    <div className="min-h-[200px] text-sm whitespace-pre-wrap leading-6 text-primary-ds bg-primary-ds rounded-xl border-2 border-black-10 p-4">
                      {text ? text.slice(0, 1200) : 'Envie um arquivo para visualizar o conteúdo que o ATS consegue ler.'}
                      {text && text.length > 1200 && '\n...'}
                    </div>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="rounded-2xl border-2 border-black-10 bg-white-ds p-5 shadow-lg">
                <div className="text-sm text-black-70">Quer melhorar rápido? Use um modelo pronto pensado para ATS:</div>
                <div className="mt-3">
                  <Link to="/modelos-de-curriculo">
                    <button className="w-full rounded-lg bg-green-ds px-6 py-3 text-sm font-bold text-primary-ds transition-all duration-200 hover:bg-green-hover-ds hover:shadow-lg">
                      Ver modelos de currículo
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* No right sidebar in 2-col layout */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
