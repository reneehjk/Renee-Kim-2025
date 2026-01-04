import second from "../assets/2.png";
import fourth from "../assets/4.png";
import fifth from "../assets/5.JPG";
import sixth from "../assets/6.JPEG";
import seven from "../assets/7.JPG";
import eight from "../assets/8.PNG";

import { useEffect, useState } from "react";

// flower asset (use whichever one you want)
import mf from "../assets/medFlower.svg";

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

function PhotoCard({ src, alt, caption }) {
  const [open, setOpen] = useState(false);

  return (
    <figure
      className={`about-photo-card about-photo-card--inline about-photo-hover ${
        open ? "is-open" : ""
      }`}
      tabIndex={0}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <img src={src} alt={alt} loading="lazy" />
      <figcaption className="about-photo-tooltip">{caption}</figcaption>
    </figure>
  );
}

export default function About() {
  useEffect(() => {
    const flowers = document.querySelectorAll(".about-flower");

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
    <div className="container about-page about--flowers">
      {/* Flowers layer (behind content) */}
      <div className="about-flowers" aria-hidden="true">
        <img
          src={mf}
          alt=""
          className="about-flower about-flower--med spin-ccw"
          draggable="false"
        />
      </div>

      {/* Intro */}
      <section className="about-intro">
        <p className="about-kicker">About Me</p>

        <h1 className="about-title">
          <span className="about-title--muted">Hi I’m Renee!</span>
          <span className="about-title--dark">A Product Designer</span>
          <span className="about-title--muted">
            with a background in development.
          </span>
        </h1>
      </section>

      {/* Story */}
      <section className="about-story">
        <div className="about-story-grid">
          <div className="about-story-label">
            <p>
              <strong>My story</strong>
            </p>
          </div>

          <div className="about-story-content">
            <p>
              <strong>I’ve always loved creating things for people.</strong>
            </p>

            <p>
              I studied Computer Science at Queen’s, where designing interfaces
              alongside code helped me understand both user needs and technical
              constraints. A Human–Computer Interaction course led me fully into
              product design.
            </p>

            <p>
              <strong>
                Today, I focus on designing intuitive, human-centered
                experiences.
              </strong>{" "}
              Outside of tech, I stay inspired through dance, figure skating,
              anime, and Pokémon.
            </p>
          </div>
        </div>

        <div className="about-inline-photos" aria-label="Photos in story">
          <PhotoCard src={fourth} alt="Pokémon" caption="Pokémon card show!!" />
          <PhotoCard src={seven} alt="Dance" caption="CCDC dance team photoshoot" />
          <PhotoCard src={fifth} alt="Figure skating" caption="Figure skating = my reset" />
          <PhotoCard src={eight} alt="Plotd team" caption="The super cool Plotd team!!" />
          <PhotoCard src={sixth} alt="Conference moment" caption="Conference + community moments" />
          <PhotoCard src={second} alt="Working session" caption="QWIC ♡ QUX" />
        </div>
      </section>
    </div>
  );
}
