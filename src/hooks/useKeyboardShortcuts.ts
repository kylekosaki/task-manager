import { useEffect, useCallback } from 'react';

export const useKeyboardShortcuts = (callbacks: {
  onEnter?: () => void;
  onEscape?: () => void;
}) => {
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Enter' && callbacks.onEnter) {
      callbacks.onEnter();
    } else if (event.key === 'Escape' && callbacks.onEscape) {
      callbacks.onEscape();
    }
  }, [callbacks]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);
}; 