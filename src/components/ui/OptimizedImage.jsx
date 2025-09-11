import React from 'react'

/**
 * Simple optimized image wrapper: adds width/height, lazy loading and decoding async by default.
 * Props: src, alt, width, height, className, priority (boolean), sources [{src,type}]
 */
export function OptimizedImage({ src, alt = '', width, height, className = '', priority = false, sources = [] }) {
  const loading = priority ? 'eager' : 'lazy'
  const fetchpriority = priority ? 'high' : undefined
  return (
    <picture>
      {sources.map(s => (
        <source key={s.src} srcSet={s.src} type={s.type} />
      ))}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        fetchpriority={fetchpriority}
        className={className}
      />
    </picture>
  )
}

export default OptimizedImage