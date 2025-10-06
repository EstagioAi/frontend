import { useEffect, useRef, useState } from 'react';

/**
 * Hook para detectar quando um elemento entra no viewport
 * e aplicar animações de scroll reveal
 * 
 * @param {Object} options - Opções para o IntersectionObserver
 * @param {number} options.threshold - Porcentagem do elemento visível para trigger (0-1)
 * @param {string} options.rootMargin - Margem adicional para o root
 * @param {boolean} options.triggerOnce - Se true, anima apenas uma vez
 * 
 * @returns {Object} { ref, isVisible } - Ref para o elemento e estado de visibilidade
 * 
 * @example
 * const { ref, isVisible } = useScrollReveal({ threshold: 0.2, triggerOnce: true });
 * <div ref={ref} className={isVisible ? 'revealed' : ''}>Content</div>
 */
export const useScrollReveal = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Se triggerOnce for true, para de observar após primeira aparição
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          // Se triggerOnce for false, reseta quando sair do viewport
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

/**
 * Hook para detectar scroll e fornecer posição atual
 * Útil para efeitos parallax
 * 
 * @returns {number} scrollY - Posição vertical do scroll
 */
export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Pega posição inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

/**
 * Hook para adicionar animação de entrada em múltiplos elementos
 * com delay escalonado (stagger)
 * 
 * @param {number} count - Número de elementos
 * @param {number} delay - Delay entre cada elemento (em ms)
 * 
 * @returns {Array} visibleItems - Array de booleanos indicando quais items são visíveis
 */
export const useStaggerAnimation = (count, delay = 100) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1, triggerOnce: true });
  const [visibleItems, setVisibleItems] = useState(Array(count).fill(false));

  useEffect(() => {
    if (isVisible) {
      // Anima cada item com delay
      Array.from({ length: count }).forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, index * delay);
      });
    }
  }, [isVisible, count, delay]);

  return { ref, visibleItems };
};

export default useScrollReveal;
