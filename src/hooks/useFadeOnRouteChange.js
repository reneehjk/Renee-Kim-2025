import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useFadeOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const selector = ".container h1, .container h2, .container h3, .container p, .container a, .container span, .container label, .container li";
    const elements = document.querySelectorAll(selector);

    elements.forEach((el, i) => {
      el.style.animation = "none";
      el.style.animationDelay = "0ms";
      el.offsetHeight; // force reflow

      el.style.animation = "fade-in-up 900ms ease forwards";
      el.style.animationDelay = `${i * 70}ms`;
    });
  }, [location.pathname]);
}
