import { useState, useEffect, useRef } from 'react';

export function useTypingEffect(text, speed = 50) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasCompletedRef = useRef(false);
  const textRef = useRef(text);

  // Reset quando o texto muda (mudança de idioma)
  useEffect(() => {
    if (textRef.current !== text) {
      textRef.current = text;
      setDisplayedText('');
      setCurrentIndex(0);
      hasCompletedRef.current = false;
    }
  }, [text]);

  useEffect(() => {
    if (!hasCompletedRef.current && currentIndex < text.length && text) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex >= text.length && text.length > 0) {
      hasCompletedRef.current = true;
    }
  }, [currentIndex, text, speed]);

  return displayedText;
}

