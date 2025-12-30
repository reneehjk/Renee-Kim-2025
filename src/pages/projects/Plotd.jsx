import heroImg from "../../assets/plotd.png";
import heroImg2 from "../../assets/plotd2.png";

// Final product / featured
import finalImg from "../../assets/plotd/final.png";

// Iterations
import initialImg from "../../assets/plotd/initial.png";
import secondImg from "../../assets/plotd/second.png";

// Screens / features
import homeImg from "../../assets/plotd/home.png";
import missionImg from "../../assets/plotd/mission.png";
import leaderboardImg from "../../assets/plotd/leaderboard.png";
import profileImg from "../../assets/plotd/profile.png";

// Visual direction / moodboards
import modernImg from "../../assets/plotd/modern.png";
import retroImg from "../../assets/plotd/retro.png";

// Vibe / extra
import vibeImg from "../../assets/plotd/vibe.png";
import logo from "../../assets/plotd/logo.png"
import team from "../../assets/8.PNG";
import design from "../../assets/plotd/design.png"

import "./Plotd.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Plotd() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("overview");

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // keeps the URL hash in sync (optional, but nice)
    window.history.replaceState(null, "", `#${id}`);
    setActiveSection(id);
  };

  useEffect(() => {
    const ids = [
      "overview",
      "discovery",
      "insights",
      "visual",
      "iterations",
      "final",
      "reflection",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the visible section with the highest intersection ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      {
        // activates when section is around the middle of the viewport
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-35% 0px -55% 0px",
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container plotd-page">
      {/* Max width wrapper (controls the whole case study width) */}
      <div className="plotd-max">
        <div className="plotd-shell">
          {/* Left Sidebar */}
          <aside className="plotd-side">
            <button
              className="plotd-back"
              type="button"
              onClick={() => navigate("/projects")}
            >
              ← BACK
            </button>

            <nav className="plotd-side-nav" aria-label="Case study sections">
              <a
                href="#overview"
                onClick={(e) => handleNavClick(e, "overview")}
                className={activeSection === "overview" ? "is-active" : ""}
              >
                Overview
              </a>

              <a
                href="#discovery"
                onClick={(e) => handleNavClick(e, "discovery")}
                className={activeSection === "discovery" ? "is-active" : ""}
              >
                Discovery
              </a>

              <a
                href="#insights"
                onClick={(e) => handleNavClick(e, "insights")}
                className={activeSection === "insights" ? "is-active" : ""}
              >
                Insights to Concept
              </a>

              <a
                href="#visual"
                onClick={(e) => handleNavClick(e, "visual")}
                className={activeSection === "visual" ? "is-active" : ""}
              >
                Visual Design
              </a>

              <a
                href="#iterations"
                onClick={(e) => handleNavClick(e, "iterations")}
                className={activeSection === "iterations" ? "is-active" : ""}
              >
                Iterations
              </a>

              <a
                href="#final"
                onClick={(e) => handleNavClick(e, "final")}
                className={activeSection === "final" ? "is-active" : ""}
              >
                Final Product
              </a>

              <a
                href="#reflection"
                onClick={(e) => handleNavClick(e, "reflection")}
                className={activeSection === "reflection" ? "is-active" : ""}
              >
                Reflection
              </a>
            </nav>
          </aside>

          {/* Main */}
          <main className="plotd-main">
            {/* Header / Overview */}
            <header className="plotd-top" id="overview">
              <p className="plotd-kicker">PLOTD | MOBILE APPLICATION</p>
              <h1 className="plotd-h1">
                Giving students reasons to hang out
              </h1>

              {/* Hero blue card */}
              <div className="plotd-heroCard">
                <div className="plotd-heroPhones">
                  <img src={heroImg} alt="Plotd app screen" />
                  <img src={heroImg2} alt="Plotd app screen" />
                </div>
              </div>

              {/* Meta row */}
              <div className="plotd-meta">
                <div className="plotd-metaCol">
                  <p className="plotd-metaLabel">MY ROLE</p>
                  <p className="plotd-metaValue">UX/UI Designer</p>
                </div>

                <div className="plotd-metaCol">
                  <p className="plotd-metaLabel">TIMELINE</p>
                  <p className="plotd-metaValue">May 2025 - March 2026</p>
                </div>

                <div className="plotd-metaCol">
                  <p className="plotd-metaLabel">TEAM</p>
                  <p className="plotd-metaValue">1 PM</p>
                  <p className="plotd-metaValue">3 BAs</p>
                  <p className="plotd-metaValue">3 Designers</p>
                  <p className="plotd-metaValue">4 Developers</p>
                </div>

                <div className="plotd-metaCol">
                  <p className="plotd-metaLabel">SKILLS</p>
                  <p className="plotd-metaValue">User Research</p>
                  <p className="plotd-metaValue">Product Design</p>
                  <p className="plotd-metaValue">User Interviews</p>
                  <p className="plotd-metaValue">Iterations</p>
                </div>
              </div>
            </header>

            {/* Discovery */}
            <section className="plotd-section" id="discovery">
              <p className="plotd-miniKicker">DISCOVERY</p>
              <h2 className="plotd-h2">Three insights on students stood out:</h2>
              <p className="plotd-body">
                We surveyed over 150 students, asking how they spend their free time and what fuels making
                plans.
              </p>

              <div className="plotd-stats" >
                <div className="plotd-statCard">
                  <div className="plotd-statNum">77%</div>
                  <p className="plotd-body-black">
                    wanted more reasons to hang out with peers
                  </p>
                </div>

                <div className="plotd-statCard">
                  <div className="plotd-statNum">49%</div>
                  <p className="plotd-body-black" >
                    of students reported feeling bored
                  </p>
                </div>

                <div className="plotd-statCard">
                  <div className="plotd-statNum">60%</div>
                  <p className="plotd-body-black">
                    said they would try new activities if prompted
                  </p>
                </div>
              </div>

              <p className="plotd-body" style={{ marginTop: "20px" }}>
                Students didn’t lack options, they lacked motivation to connect.
              </p>
            </section>

            {/* Insights to Concept */}
            <section className="plotd-section" id="insights">
              <div className="plotd-insightsHeader">
                <p className="plotd-miniKicker">INSIGHTS TO CONCEPTS</p>
                <h2 className="plotd-h2">The creation of Plotd</h2>
                <p className="plotd-body">
                  We focused on creating a clear, low-effort prompt for shared
                  experiences. Social competition and team
                  challenges emerged as a natural way to
                  turn boredom into action.
                </p>
              </div>

              <p className="plotd-body">This led to…</p>

              <img
                src={logo}
                alt="Plotd logo"
                className="plotd-insightsLogo"
              />

              <p className="plotd-body">
                A social drop-in app built around team missions and friendly competition.
              </p>
            </section>



            {/* Visual Design */}
            <section className="plotd-section" id="visual">
              <p className="plotd-miniKicker">VISUAL DESIGN</p>
              <h2 className="plotd-h2">Deciding on a visual direction</h2>
              <p className="plotd-body">Two visual directions emerged early on.</p>

              <div className="plotd-twoCols">
                <div>
                  <img
                    src={modernImg}
                    alt="Modern image"
                    className="plotd-insightsLogo"
                  />
                  <p className="plotd-colLabel">Modern and secretive</p>
                </div>
                <div>
                  <img
                    src={retroImg}
                    alt="Modern image"
                    className="plotd-insightsLogo"
                  />
                  <p className="plotd-colLabel">Retro gaming and playful</p>
                </div>
              </div>
              <p className="plotd-body">
                Through A/B testing, we found that students liked both directions so we merged both into a hybrid visual language.
              </p>
              <img
                src={vibeImg}
                alt="vibe"
                className="plotd-insightsLogo"
              />
              <div className="plotd-iterRow">
                <img
                src={design}
                alt="vibe"
                className="plotd-insightsLogo"
              />
              </div>
            </section>

            {/* Iterations */}
            <section className="plotd-section" id="iterations">
              <p className="plotd-miniKicker">ITERATIONS</p>
              <h2 className="plotd-h2">Continuing to improve the designs</h2>
              <p className="plotd-body">Feedback drove quick refinement.</p>

              <div className="plotd-iterRow">
                <img
                src={initialImg}
                alt="vibe"
                className="plotd-insightsLogo"
              />
              </div>

              <p className="plotd-body">
                In early versions, feedback suggested the interface lacked energy,
                so we increased contrast and colour to add energy.
              </p>

              <div className="plotd-iterRow">
                <img
                src={secondImg}
                alt="vibe"
                className="plotd-insightsLogo"
              />
              </div>

              <p className="plotd-body">
                Later on, the interface felt cluttered and distracted from the core
                experience. This led to us removing decorative elements to reduce
                clutter.
              </p>

              <div className="plotd-iterRow">
                <img
                src={finalImg}
                alt="vibe"
                className="plotd-insightsLogo"
              />
              </div>

              

              <p className="plotd-body">
                The result balanced clarity with personality.
              </p>
            </section>

            {/* Final Product */}
            <section className="plotd-section" id="final">
              <p className="plotd-miniKicker">FINAL PRODUCT</p>
              <h2 className="plotd-h2">Our final high fidelity iteration</h2>
              <p className="plotd-body">
                Plotd turns boredom into shared experiences through playful challenges.
              </p>

              <div className="plotd-finalList">
                <div className="plotd-finalItem">
                  <div className="plotd-phoneSquare">
                    <img src={homeImg} className="plotd-phoneImg" alt="Plotd Home screen" />
                  </div>

                  <div className="plotd-finalText">
                    <h3 className="plotd-h3">Home</h3>
                    <p className="plotd-body">
                      Quick access to popular missions and leaderboard.
                    </p>
                  </div>
                </div>

                <div className="plotd-finalItem">
                  <div className="plotd-phoneSquare">
                    <img
                      src={missionImg}
                      className="plotd-phoneImg"
                      alt="Plotd Missions screen"
                    />
                  </div>

                  <div className="plotd-finalText">
                    <h3 className="plotd-h3">Missions</h3>
                    <p className="plotd-body">
                      Low-effort prompts designed for group participation.
                    </p>
                  </div>
                </div>

                <div className="plotd-finalItem">
                  <div className="plotd-phoneSquare">
                    <img
                      src={leaderboardImg}
                      className="plotd-phoneImg"
                      alt="Plotd Leaderboard screen"
                    />
                  </div>

                  <div className="plotd-finalText">
                    <h3 className="plotd-h3">Leaderboard</h3>
                    <p className="plotd-body">
                      Visible rankings encourage friendly competition.
                    </p>
                  </div>
                </div>

                <div className="plotd-finalItem">
                  <div className="plotd-phoneSquare">
                    <img
                      src={profileImg}
                      className="plotd-phoneImg"
                      alt="Plotd Profile screen"
                    />
                  </div>

                  <div className="plotd-finalText">
                    <h3 className="plotd-h3">Profile</h3>
                    <p className="plotd-body">
                      Personal progress within a team-based experience.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Reflection */}
            <section className="plotd-section" id="reflection">
              <h2 className="plotd-miniKicker">REFLECTION</h2>
              <h2 className="plotd-h2">My learnings from this project</h2>
              <div className="plotd-twoCols" style={{ marginTop: "40px"}}>
                <div>
                  <p className="plotd-body" style={{ marginBottom: "20px"}}>
                    Plotd reinforced the importance of understanding the problem before designing a solution. Our research showed that student boredom wasn’t caused by a lack of options, but by a lack of social motivation.
                  </p>
                  <p className="plotd-body">
                    Through iteration, we learned that team-based interaction and visible progress can encourage participation without requiring heavy planning. Visually, the project highlighted the need to balance clarity with personality, using contrast and hierarchy to keep the experience playful yet focused.
                  </p>
                </div>
                
                <img src={team} className="plotd-phoneImg"/>
                
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
