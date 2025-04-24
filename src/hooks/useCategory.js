import { useState } from "react";

export function useCategory(initialCategory = "backend") {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  return { activeCategory, setActiveCategory };
}