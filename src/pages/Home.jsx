import { useEffect } from "react";
import diagonalArrow from "../assets/diagonal-arrow.svg";
import { Link } from "react-router-dom";

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

export default function Home() {
  useEffect(() => {
    const flowers = document.querySelectorAll(".flower");

    flowers.forEach((el) => {
      let rafId = null;

      const smoothPause = () => {
        // Cancel any pending resume frame
        if (rafId) cancelAnimationFrame(rafId);

        // Grab the current angle of the running animation
        const angle = getAngleFromTransform(getComputedStyle(el).transform);

        // Freeze at the current angle
        el.style.setProperty("--freeze-angle", `${angle}deg`);
        el.classList.add("is-pausing");

        // After transition finishes, actually pause animation (keeps exact frame)
        // This prevents the “snap” feeling.
        setTimeout(() => {
          el.classList.add("is-paused");
        }, 260);
      };

      const smoothResume = () => {
        // Remove paused state first
        el.classList.remove("is-paused");

        // Let browser apply styles, then remove pausing so animation continues
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
    <div className="hero hero--flowers">
      {/* Flowers layer */}
      <div className="hero-flowers">
        <img
          src={lf}
          alt=""
          className="flower flower--large spin-cw"
          draggable="false"
        />
        <img
          src={mf}
          alt=""
          className="flower flower--med spin-ccw"
          draggable="false"
        />
        <img
          src={sf}
          alt=""
          className="flower flower--small spin-cw"
          draggable="false"
        />
      </div>

      {/* Your existing content */}
      <div className="container hero-content">
        <p className="hero-kicker">Renee Kim · Canada</p>

        <h1>
          <span style={{ display: "block", color: "#372A2A" }}>
            Product Designer
          </span>
          <span style={{ display: "block", color: "#6D6565" }}>
            User focused design,
          </span>
          <span style={{ display: "block", color: "#6D6565" }}>
            Smooth developer handoff.
          </span>
        </h1>
        <Link to="/projects" style={{ textDecoration: "none" }}>
            <button className="cta-button hero-cta">
                <span>Projects</span>
                <img src={diagonalArrow} alt="" className="arrow" />
            </button>
        </Link>
      </div>
      
    </div>
  );
}
