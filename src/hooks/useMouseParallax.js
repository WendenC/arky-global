import { useEffect, useRef } from 'react';

export function useMouseParallax(intensity = 0.15) {
  const elementRef = useRef(null);
  const handlersRef = useRef(null);

  useEffect(() => {
    const setupListeners = () => {
      const element = elementRef.current;
      if (!element) return;

      const handleMouseMove = (e) => {
        const rect = element.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) * intensity;
        const deltaY = (e.clientY - centerY) * intensity;
        
        // Limitar o movimento para não sair muito da área
        const maxMove = 20;
        const limitedX = Math.max(-maxMove, Math.min(maxMove, deltaX));
        const limitedY = Math.max(-maxMove, Math.min(maxMove, deltaY));
        
        element.style.transform = `translate(${limitedX}px, ${limitedY}px)`;
        element.style.transition = 'transform 0.1s ease-out';
      };

      const handleMouseLeave = () => {
        element.style.transform = 'translate(0, 0)';
        element.style.transition = 'transform 0.3s ease-out';
      };

      handlersRef.current = { handleMouseMove, handleMouseLeave };
      
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
    };

    // Tenta configurar imediatamente
    setupListeners();

    // Se não funcionou, tenta novamente após um delay
    const timeout = setTimeout(() => {
      setupListeners();
    }, 300);

    return () => {
      clearTimeout(timeout);
      const element = elementRef.current;
      const handlers = handlersRef.current;
      if (element && handlers) {
        element.removeEventListener('mousemove', handlers.handleMouseMove);
        element.removeEventListener('mouseleave', handlers.handleMouseLeave);
      }
    };
  }, [intensity]);

  return elementRef;
}

