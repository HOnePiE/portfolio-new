import { useState } from 'react';

// Open/close state for a card: hover with a mouse, tap on touch screens,
// and keyboard focus.
const useExpandable = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlers = {
    onPointerEnter: (e) => {
      if (e.pointerType === 'mouse') setIsOpen(true);
    },
    onPointerLeave: (e) => {
      if (e.pointerType === 'mouse') setIsOpen(false);
    },
    onPointerUp: (e) => {
      if (e.pointerType !== 'mouse' && !e.target.closest('a, button')) {
        setIsOpen((open) => !open);
      }
    },
    onFocus: (e) => {
      if (e.target.matches(':focus-visible')) setIsOpen(true);
    },
    onBlur: (e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) setIsOpen(false);
    },
  };

  return { isOpen, setIsOpen, handlers };
};

export default useExpandable;
