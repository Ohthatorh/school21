import { useState, useEffect } from 'react';

const useThemeMode = (theme: string) => {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(prefers-color-scheme: ${theme})`);
    setMode(mediaQuery.matches);

    const handleChange = (event) => {
      setMode(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return mode;
};

export default useThemeMode;