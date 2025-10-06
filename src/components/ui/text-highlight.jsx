import React from 'react'

/**
 * TextHighlight - Componente para destacar texto com diferentes estilos criativos
 *
 * @param {string} variant - Tipo de destaque:
 *   - 'underline' - Sublinhado simples e fino
 *   - 'circle' - Círculo/elipse ao redor do texto
 *   - 'wave' - Sublinhado ondulado (recomendado!)
 *   - 'dots' - Pontos espaçados
 *   - 'dashed' - Linha tracejada
 *   - 'dotted' - Linha pontilhada
 *   - 'bracket' - Colchetes ao redor
 *   - 'double' - Sublinhado duplo
 *   - 'marker' - Efeito marca-texto
 *   - 'arrow' - Sublinhado com seta
 *   - 'zigzag' - Linha em zigzag
 *   - 'scribble' - Rabisco casual
 *   - 'box' - Caixa ao redor
 *   - 'highlight' - Destaque de fundo
 * @param {ReactNode} children - Texto a ser destacado
 * @param {string} className - Classes adicionais
 */
export const TextHighlight = ({ variant = 'underline', children, className = '' }) => {
  const variants = {
    // Sublinhado simples (melhorado - mais fino e sutil)
    underline: (
      <span className={`relative inline-block ${className}`}>
        <span className="relative z-10">{children}</span>
        <span className="absolute bottom-0.5 left-0 h-1 w-full bg-green-ds -z-0 opacity-70" />
      </span>
    ),

    // Círculo ao redor do texto (melhorado - mais suave)
    circle: (
      <span className={`relative inline-block ${className}`}>
        <span className="relative z-10 px-3">{children}</span>
        <svg
          className="absolute inset-0 w-full h-full -z-0"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ transform: 'scale(1.2)', transformOrigin: 'center' }}
        >
          <ellipse
            cx="50"
            cy="50"
            rx="47"
            ry="42"
            fill="none"
            stroke="#82f7b3"
            strokeWidth="2.5"
            opacity="0.7"
          />
        </svg>
      </span>
    ),

    // Sublinhado ondulado (mantido - está bom!)
    wave: (
      <span className={`relative inline-block ${className}`}>
        <span className="relative z-10">{children}</span>
        <svg
          className="absolute bottom-[-5px] left-0 w-full h-2 "
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 5 Q 12.5 0, 25 5 T 50 5 T 75 5 T 100 5"
            fill="none"
            stroke="#82f7b3"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </span>
    ),

    // Sublinhado pontilhado (melhorado - mais espaçado)
    dots: (
      <span className={`relative inline-block ${className}`}>
        <span className="relative z-10">{children}</span>
        <span className="absolute bottom-0 left-0 w-full h-2 -z-0 flex items-center justify-start gap-1.5">
          {[...Array(15)].map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-green-ds"
              style={{ opacity: 0.8 }}
            />
          ))}
        </span>
      </span>
    ),

    // Linha pontilhada SVG (novo - mais profissional)
    dashed: (
      <span className={`relative inline-block ${className}`}>
        <span className="relative z-10">{children}</span>
        <svg
          className="absolute bottom-0 left-0 w-full h-2 -z-0"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="5"
            x2="100"
            y2="5"
            stroke="#82f7b3"
            strokeWidth="2.5"
            strokeDasharray="4 3"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      </span>
    ),

    // Pontilhado grosso (novo)
    dotted: (
      <span className={`relative inline-block ${className}`}>
        <span className="relative z-10">{children}</span>
        <svg
          className="absolute bottom-0 left-0 w-full h-2 -z-0"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="5"
            x2="100"
            y2="5"
            stroke="#82f7b3"
            strokeWidth="3"
            strokeDasharray="1 4"
            strokeLinecap="round"
            opacity="0.75"
          />
        </svg>
      </span>
    ),

    // Colchetes ao redor (melhorado - mais sutil)
    bracket: (
      <span className={`relative inline-block ${className}`}>
        <span className="relative z-10 px-4">{children}</span>
        <span className="absolute -left-1 top-1/2 -translate-y-1/2 text-xl font-bold text-green-ds -z-0 opacity-70">[</span>
        <span className="absolute -right-1 top-1/2 -translate-y-1/2 text-xl font-bold text-green-ds -z-0 opacity-70">]</span>
      </span>
    ),

    // Sublinhado duplo (melhorado)
    double: (
      <span className={`relative inline-block ${className}`}>
        <span className="relative z-10">{children}</span>
        <span className="absolute bottom-0 left-0 w-full -z-0">
          <span className="absolute bottom-1 left-0 h-0.5 w-full bg-green-ds opacity-50" />
          <span className="absolute bottom-0 left-0 h-0.5 w-full bg-green-ds opacity-70" />
        </span>
      </span>
    ),

    // Destaque de marca-texto (melhorado - mais sutil)
    marker: (
      <span className={`relative inline-block ${className}`}>
        <span className="relative z-10">{children}</span>
        <span
          className="absolute bottom-0.5 left-0 h-2.5 w-full bg-green-ds -z-0 opacity-30"
          style={{ transform: 'skewY(-0.5deg)' }}
        />
      </span>
    ),

    // Sublinhado com seta (melhorado)
    arrow: (
      <span className={`relative inline-block ${className}`}>
        <span className="relative z-10">{children}</span>
        <svg
          className="absolute bottom-0 left-0 w-full h-2 -z-0"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 5 L 90 5 L 85 2 M 90 5 L 85 8"
            fill="none"
            stroke="#82f7b3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
        </svg>
      </span>
    ),

    // Zigzag (novo - criativo)
    zigzag: (
      <span className={`relative inline-block ${className}`}>
        <span className="relative z-10">{children}</span>
        <svg
          className="absolute bottom-0 left-0 w-full h-2 -z-0"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 5 L 10 2 L 20 8 L 30 2 L 40 8 L 50 2 L 60 8 L 70 2 L 80 8 L 90 2 L 100 5"
            fill="none"
            stroke="#82f7b3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.7"
          />
        </svg>
      </span>
    ),

    // Scribble (novo - rabisco casual)
    scribble: (
      <span className={`relative inline-block ${className}`}>
        <span className="relative z-10">{children}</span>
        <svg
          className="absolute bottom-0 left-0 w-full h-3 -z-0"
          viewBox="0 0 100 15"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 7 Q 5 3, 10 7 T 20 7 Q 25 10, 30 7 T 40 7 Q 45 4, 50 7 T 60 7 Q 65 9, 70 7 T 80 7 Q 85 5, 90 7 T 100 7"
            fill="none"
            stroke="#82f7b3"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </span>
    ),

    // Box (novo - caixa ao redor)
    box: (
      <span className={`relative inline-block ${className}`}>
        <span className="relative z-10 px-2 py-0.5">{children}</span>
        <span className="absolute inset-0 border-2 border-green-ds -z-0 opacity-60 rounded" />
      </span>
    ),

    // Highlight (novo - destaque de fundo)
    highlight: (
      <span className={`relative inline-block ${className}`}>
        <span className="relative z-10 px-1">{children}</span>
        <span className="absolute inset-0 bg-green-ds -z-0 opacity-20 rounded-sm" />
      </span>
    ),
  }

  return variants[variant] || variants.underline
}

export default TextHighlight

