import { useState, useEffect } from 'react';

// TODO WORK 추후 전역 상태로 변경하는게 좋지않을까??
export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setIsDesktop(window.innerWidth < 1024 ? false : true);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return {
    windowSize,
    isDesktop
  };
}