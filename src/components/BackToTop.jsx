// BackToTop.jsx dengan style lebih premium
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50 
        p-3 rounded-full 
        bg-gradient-to-r from-[#6366f1] to-[#a855f7]
        text-white 
        shadow-lg shadow-purple-500/30
        transition-all duration-500
        hover:scale-110 hover:shadow-xl hover:shadow-purple-500/50
        active:scale-95
        ${isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10 pointer-events-none"
        }
      `}
      aria-label="Back to top"
      title="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
      {/* Optional: Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] animate-ping opacity-20"></span>
    </button>
  );
};

export default BackToTop;