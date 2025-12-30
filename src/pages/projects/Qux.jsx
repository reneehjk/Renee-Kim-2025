import heroImg from "../../assets/qux.png";
import "./Qux.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import diagonalArrow from "../../assets/diagonal-arrow.svg";

export default function Qux() {
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
    <div className="container qux-page">
      <div className="qux-max">
        <div className="qux-shell">
          {/* Left Sidebar */}
          <aside className="qux-side">
            <button className="qux-back" type="button" onClick={() => navigate("/projects")}>
              ← BACK
            </button>

            <nav className="qux-side-nav" aria-label="Case study sections">
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
          <main className="qux-main">
            {/* Header / Overview */}
            <header className="qux-top" id="overview">
              <p className="qux-kicker">QUEEN’S UX CLUB | COMMUNITY BUILDING</p>
              <h1 className="qux-h1">Creating a UI/UX community</h1>

              {/* Hero blue card */}
              <div className="qux-heroCard">
                <div className="qux-heroMedia">
                  <img src={heroImg} alt="QUX preview" className="qux-heroImage" />
                </div>
              </div>

              {/* Meta row */}
              <div className="qux-meta">
                <div className="qux-metaCol">
                  <p className="qux-metaLabel">MY ROLE</p>
                  <p className="qux-metaValue">Co-Founder</p>
                </div>

                <div className="qux-metaCol">
                  <p className="qux-metaLabel">TIMELINE</p>
                  <p className="qux-metaValue">March 2025 - Present</p>
                </div>

                <div className="qux-metaCol">
                  <p className="qux-metaLabel">TEAM</p>
                  <p className="qux-metaValue">4 Co-Founders</p>
                  <p className="qux-metaValue">24 Execs</p>
                </div>

                <div className="qux-metaCol">
                  <p className="qux-metaLabel">SKILLS</p>
                  <p className="qux-metaValue">Branding</p>
                  <p className="qux-metaValue">Website Design</p>
                  <p className="qux-metaValue">Marketing</p>
                  <p className="qux-metaValue">Event Planning</p>
                </div>
              </div>
            </header>

            {/* Summary */}
            <section className="qux-section" id="summary">
                <p className="qux-miniKicker">SUMMARY</p>
                <h2 className="qux-h2">Building a student-led UX community from the ground up</h2>
                <p className="qux-body">
                    Co-founding Queen’s UX Club meant designing a community from scratch. I planned and led workshops, socials, and larger events by iterating on structure and facilitation to make UX approachable for beginners. Alongside building programming and culture, I helped hire a 25-person executive team, grow our social presence, and support a sustainable student-led UX community.
                </p>
                <a
                href="https://queensux.club/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                >
                <button className="cta-button hero-cta">
                    <span>View project</span>
                    <img src={diagonalArrow} alt="" className="arrow" />
                </button>
                </a>


                <p className="qux-body" style ={{ marginTop: "40px"}}>
                    Case study coming soon…
                </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
