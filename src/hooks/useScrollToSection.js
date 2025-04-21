import { useCallback } from "react";

export const useScrollToSection = () => {
  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    const extraOffset = 130;

    const sectionPosition = section.offsetTop - headerHeight + extraOffset;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  }, []);

  return scrollToSection;
};