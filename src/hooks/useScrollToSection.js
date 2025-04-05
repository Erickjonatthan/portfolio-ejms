import { useCallback } from "react";

export const useScrollToSection = (isSafari) => {
  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    const extraOffset = isSafari ? 30 : 130; // Ajuste maior para Safari

    const sectionPosition = section.offsetTop - headerHeight + extraOffset;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  }, [isSafari]);

  return scrollToSection;
};