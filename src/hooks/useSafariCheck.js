import { useState, useEffect } from "react";

export function useSafariCheck() {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const checkUserAgent = () => {
      const userAgent = navigator.userAgent;
      setIsSafari(/^((?!chrome|android).)*safari/i.test(userAgent));
    };

    checkUserAgent();
    window.addEventListener('resize', checkUserAgent);

    return () => {
      window.removeEventListener('resize', checkUserAgent);
    };
  }, []);

  return isSafari;
}