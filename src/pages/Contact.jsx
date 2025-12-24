import { useEffect } from "react";
import diagonalArrow from "../assets/black-arrow.svg";

import sf from "../assets/smallFlower.svg";
import mf from "../assets/medFlower.svg";
import lf from "../assets/largeFlower.svg";

function getAngleFromTransform(transform) {
  if (!transform || transform === "none") return 0;

  const values = transform
    .match(/matrix\(([^)]+)\)/)?.[1]
    .split(",")
    .map((v) => Number(v.trim()));

  if (!values || values.length < 2) return 0;

  const [a, b] = values;
  return Math.atan2(b, a) * (180 / Math.PI);
}

export default function Contact() {
  useEffect(() => {
    const flowers = document.querySelectorAll(".flower");

    flowers.forEach((el) => {
      let rafId = null;

      const smoothPause = () => {
        if (rafId) cancelAnimationFrame(rafId);

        const angle = getAngleFromTransform(getComputedStyle(el).transform);
        el.style.setProperty("--freeze-angle", `${angle}deg`);
        el.classList.add("is-pausing");

        setTimeout(() => {
          el.classList.add("is-paused");
        }, 260);
      };

      const smoothResume = () => {
        el.classList.remove("is-paused");

        rafId = requestAnimationFrame(() => {
          el.classList.remove("is-pausing");
          el.style.removeProperty("--freeze-angle");
        });
      };

      el.addEventListener("mouseenter", smoothPause);
      el.addEventListener("mouseleave", smoothResume);

      el._cleanup = () => {
        if (rafId) cancelAnimationFrame(rafId);
        el.removeEventListener("mouseenter", smoothPause);
        el.removeEventListener("mouseleave", smoothResume);
      };
    });

    return () => flowers.forEach((el) => el._cleanup?.());
  }, []);

  return (
    <div className="contact hero--flowers">
      <div className="hero-flowers">
        <img src={lf} alt="" className="flower flower--large spin-cw" draggable="false" />
        <img src={mf} alt="" className="flower flower--med spin-ccw" draggable="false" />
        <img src={sf} alt="" className="flower flower--small spin-cw" draggable="false" />
      </div>

      <div className="container contact-inner">
        <div className="contact-left">
          <p className="contact-kicker">Contact</p>
          <h1 className="contact-title">Let’s connect</h1>

          <div className="contact-grid">
            <div className="contact-item">
              <p className="contact-label">Email</p>
              <a className="contact-link" href="mailto:reneehjkimll@gmail.com">
                <span>reneehjkimll@gmail.com</span>
                <img src={diagonalArrow} alt="" className="arrow arrow--sm" />
              </a>
            </div>

            <div className="contact-item">
              <p className="contact-label">LinkedIn</p>
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/reneehjkim/"
                target="_blank"
                rel="noreferrer"
              >
                <span>https://www.linkedin.com/in/reneehjkim/</span>
                <img src={diagonalArrow} alt="" className="arrow arrow--sm" />
              </a>
            </div>

            <div className="contact-item">
              <p className="contact-label">Location</p>
              <p className="contact-value">Vancouver BC | Toronto ON</p>
            </div>

            <div className="contact-item">
              <p className="contact-label">Phone Number</p>
              <a className="contact-link" href="tel:+16043494822">
                <span>+1 604 349-4822</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
