import { useState, useEffect } from 'react';

// Custom Hook for Typing Effect
const useTypingEffect = (text, speed = 100) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [text, speed]);

  return displayedText;
};

export default useTypingEffect;
