import { useState, useEffect } from 'react';

export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState('mobile');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 992) {
        setScreenSize('desktop');
      } else if (width >= 576) {
        setScreenSize('tablet');
      } else {
        setScreenSize('mobile');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile: screenSize === 'mobile',
    isTablet: screenSize === 'tablet',
    isDesktop: screenSize === 'desktop',
    screenSize
  };
};
