import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [
    currentWindowWidth,
    setCurrentWindowWidth
  ] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
  useEffect(() => {
    setCurrentWindowWidth(window.innerWidth)
    const handleResize = () => {
      setCurrentWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return [currentWindowWidth, setCurrentWindowWidth] as const;
}