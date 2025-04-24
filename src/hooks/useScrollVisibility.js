import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export function useScrollVisibility(isSafari) {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  const tolerance = 20;

  useMotionValueEvent(scrollY, "change", (current) => {
    if (!isSafari) {
      setIsVisible(current <= tolerance);
    }
  });

  return isVisible;
}