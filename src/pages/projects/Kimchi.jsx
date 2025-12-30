import heroImg from "../../assets/kimchiS.png";
import "./Kimchi.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import diagonalArrow from "../../assets/diagonal-arrow.svg";

export default function Kimchi() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("overview");

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
    setActiveSection(id);
  };

  useEffect(() => {
    const ids = ["overview", "summary"];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { threshold: [0.2, 0.35, 0.5, 0.65], rootMargin: "-35% 0px -55% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container kimchi-page">
      <div className="kimchi-max">
        <div className="kimchi-shell">
          {/* Left Sidebar */}
          <aside className="kimchi-side">
            <button className="kimchi-back" type="button" onClick={() => navigate("/projects")}>
              ← BACK
            </button>

            <nav className="kimchi-side-nav" aria-label="Case study sections">
              <a
                href="#overview"
                onClick={(e) => handleNavClick(e, "overview")}
                className={activeSection === "overview" ? "is-active" : ""}
              >
                Overview
              </a>

              <a
                href="#summary"
                onClick={(e) => handleNavClick(e, "summary")}
                className={activeSection === "summary" ? "is-active" : ""}
              >
                Summary
              </a>
            </nav>
          </aside>

          {/* Main */}
          <main className="kimchi-main">
            {/* Header / Overview */}
            <header className="kimchi-top" id="overview">
              <p className="kimchi-kicker">KIMCHI STUDIOS | BRANDING</p>
              <h1 className="kimchi-h1">Branding an artistic nail studio</h1>

              {/* Hero blue card (same height behavior as Plotd) */}
              <div className="kimchi-heroCard">
                <div className="kimchi-heroMedia">
                  <img src={heroImg} alt="Kimchi Studios preview" className="kimchi-heroImage" />
                </div>
              </div>

              {/* Meta row (same 4-col structure as Plotd) */}
              <div className="kimchi-meta">
                <div className="kimchi-metaCol">
                  <p className="kimchi-metaLabel">MY ROLE</p>
                  <p className="kimchi-metaValue">Designer & Developer</p>
                </div>

                <div className="kimchi-metaCol">
                  <p className="kimchi-metaLabel">TIMELINE</p>
                  <p className="kimchi-metaValue">July-August 2025</p>
                </div>

                <div className="kimchi-metaCol">
                  <p className="kimchi-metaLabel">TEAM</p>
                  <p className="kimchi-metaValue">1 Founder</p>
                  <p className="kimchi-metaValue">1 Designer</p>
                </div>

                <div className="kimchi-metaCol">
                  <p className="kimchi-metaLabel">SKILLS</p>
                  <p className="kimchi-metaValue">Brand Creation</p>
                  <p className="kimchi-metaValue">Website Design</p>
                  <p className="kimchi-metaValue">Website Development</p>
                  <p className="kimchi-metaValue">Product Design</p>
                </div>
              </div>
            </header>

            {/* Summary */}
            <section className="kimchi-section" id="summary">
                <p className="kimchi-miniKicker">SUMMARY</p>
                <h2 className="kimchi-h2">Designing a playful and scalable nail studio brand</h2>
                <p className="kimchi-body">
                    Kimchi Studios is a nail studio branding project focused on building a visual identity that feels playful, polished, and welcoming. I explored typography, colour, and logo applications to create a system that can scale across digital and physical touchpoints, while staying approachable and consistent.
                </p>
                <a
                href="https://kimchistudios.ca/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                >
                    <button className="cta-button hero-cta">
                        <span>View project</span>
                        <img src={diagonalArrow} alt="" className="arrow" />
                    </button>
                </a>

                <p className="kimchi-body" style ={{ marginTop: "40px"}}>
                    Case study coming soon…
                </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
