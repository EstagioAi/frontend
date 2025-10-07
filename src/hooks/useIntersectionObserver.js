import { useEffect, useMemo, useRef, useState } from 'react';

/**
 * Custom hook for Intersection Observer API
 * @param {Object} options - IntersectionObserver options
 * @returns {[React.RefObject, boolean]} - [ref to attach to element, isIntersecting state]
 */
export function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observerOptions = useMemo(
    () => ({
      threshold: 0.1,
      rootMargin: '50px',
      ...options,
    }),
    [options]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, observerOptions);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [observerOptions]);

  return [ref, isIntersecting];
}
