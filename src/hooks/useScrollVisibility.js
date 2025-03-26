import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export function useScrollVisibility(isSafari) {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    if (!isSafari) {
      setIsVisible(current <= 0);
    }
  });

  return isVisible;
}