'use client';

import { useEffect, useState } from 'react';

const TypingText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <h1 style={{ fontFamily: 'monospace', fontSize: '2rem', fontWeight: '600' }}>
      {displayedText}
      <span style={{ animation: 'blink 1s step-end infinite' }}>|</span>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1 }
          50% { opacity: 0 }
        }
      `}</style>
    </h1>
  );
};

export default TypingText;
    
