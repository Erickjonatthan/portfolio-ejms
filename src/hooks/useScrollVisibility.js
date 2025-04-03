import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export function useScrollVisibility(isSafari) {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  const tolerance = 20; // Ajuste este valor para definir a tolerância

  useMotionValueEvent(scrollY, "change", (current) => {
    if (!isSafari) {
      setIsVisible(current <= tolerance); // Verifica se está dentro da tolerância
    }
  });

  return isVisible;
}