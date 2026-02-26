import React, { useEffect, useState } from "react";

const ScrollToTopArrow: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const footerHeight = 400;

      const nearFooter =
        scrollY + windowHeight >= documentHeight - footerHeight;

      if (scrollY > 200 && !nearFooter) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed right-5 bottom-6 z-50 flex flex-col items-center gap-20 transition-all duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
    >
      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="w-3 h-3 flex items-center justify-center rounded-full bg-black hover:scale-110 transition-transform duration-300"
      >
        <span className="text-[#0177B2] text-base font-bold leading-none">

        </span>
      </button>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918919004890"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] hover:scale-110 transition-transform duration-300"
      >
        <svg
          className="w-7 h-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0012.03 0C5.39 0 .02 5.36 0 12c0 2.12.55 4.19 1.6 6.02L0 24l6.14-1.6A11.94 11.94 0 0012.03 24c6.63 0 12-5.36 12-12 0-3.19-1.24-6.19-3.51-8.52zM12.03 21.8a9.8 9.8 0 01-4.98-1.36l-.36-.21-3.64.95.97-3.55-.23-.37a9.76 9.76 0 01-1.5-5.26c.02-5.42 4.45-9.83 9.9-9.83 2.64 0 5.11 1.03 6.98 2.9a9.8 9.8 0 012.9 6.97c-.02 5.43-4.45 9.84-9.9 9.84zm5.54-7.36c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.47.13-.62.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.52 0 1.49 1.08 2.93 1.23 3.13.15.2 2.12 3.23 5.14 4.52.72.31 1.29.5 1.73.64.73.23 1.4.2 1.93.12.59-.09 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.41-.07-.12-.27-.2-.57-.35z" />
        </svg>
      </a>

    </div>
  );
};

export default ScrollToTopArrow;
