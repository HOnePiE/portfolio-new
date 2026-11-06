import { useState, useEffect } from 'react';

// Custom Hook for Typing Effect. Restarts whenever `enabled` turns on.
const useTypingEffect = (text, speed = 100, enabled = true) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');
    if (!enabled) return undefined;

    let length = 0;
    const interval = setInterval(() => {
      length += 1;
      setDisplayedText(text.slice(0, length));
      if (length >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [text, speed, enabled]);

  return displayedText;
};

export default useTypingEffect;
