import { useState, useEffect, useRef } from 'react';

export function useCountUp(end, start = 0, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(start);
  const startTimeRef = useRef(null);
  const animationFrameRef = useRef(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (!shouldStart || hasStartedRef.current) return;

    hasStartedRef.current = true;
    startTimeRef.current = null;

    const animate = (currentTime) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function para suavizar a animação (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentCount = Math.floor(start + (end - start) * easeOut);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [end, start, duration, shouldStart]);

  return count;
}

