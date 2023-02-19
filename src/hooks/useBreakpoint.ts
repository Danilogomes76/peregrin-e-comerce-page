import { useEffect, useState } from 'react';

export const useBreakpoint = (maxWidth: number) => {
  const [breakPoint, setBreakPoint] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < maxWidth) {
        setBreakPoint(true);
      } else {
        setBreakPoint(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakPoint, maxWidth]);

  return breakPoint;
};
