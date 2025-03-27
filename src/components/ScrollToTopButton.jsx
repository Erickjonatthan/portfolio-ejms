import React from "react";

const ScrollToTopButton = React.memo(({ show }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 p-3 bg-neonBlue text-white rounded-full shadow-lg hover:bg-neonBlue-dark transition duration-300 z-50 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-neonBlue focus:ring-opacity-50"
      style={{ transition: 'opacity 0.5s, transform 0.5s', opacity: show ? 1 : 0 }}
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
});

export default ScrollToTopButton;