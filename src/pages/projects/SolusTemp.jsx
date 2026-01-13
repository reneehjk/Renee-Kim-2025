import "./Solus.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import heroImg from "../../assets/solus/heroSec.png";
import degreePImg from "../../assets/solus/degreeP.png";
import enrollImg from "../../assets/solus/enroll.png";
import loadImg from "../../assets/solus/load.png";


/* Reusable placeholder “image” block */
function PH({ label, ratio = "16/9", tone = "light" }) {
  return (
    <div
      className={`ph ph--${tone}`}
      style={{ aspectRatio: ratio }}
      aria-label={label}
      role="img"
    >
      <span>{label}</span>
    </div>
  );
}


/* =========================
   METHODS Accordion (blue)
========================= */
function MethodsAccordion() {
  const items = [
    {
      id: "m1",
      title: "1. Moderated usability testing",
      why:
        "Observed real student behavior during critical tasks to uncover confusion and uncertainty.",
    },
    {
      id: "m2",
      title: "2. Student survey",
      why:
        "Validated which pain points were common and worth prioritizing.",
    },
    {
      id: "m3",
      title: "3. First-click testing",
      why:
        "Revealed where the system’s structure conflicted with student expectations.",
    },
  ];

  const [openId, setOpenId] = useState(items[0].id);

  return (
    <div className="acc acc--methods">
      {items.map((it) => {
        const isOpen = openId === it.id;

        return (
          <div key={it.id} className={`accCard ${isOpen ? "is-open" : ""}`}>
            <button
              type="button"
              className="accBtnBlue"
              onClick={() => setOpenId(isOpen ? null : it.id)}
              aria-expanded={isOpen}
            >
              <span className="accTitleBlue">{it.title}</span>
              <span className="accPlusMinus">
                {isOpen ? "–" : "+"}
                </span>

            </button>

            <div className="accPanelBlue">
              <p className="accWhy">Why?</p>
              <p className="accWhyText">{it.why}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Solus() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("overview");

  const ids = useMemo(
    () => [
      "overview",
      "summary"
    ],
    []
  );

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
    setActiveSection(id);
  };

  /* ✅ Better active section logic:
     choose the section whose top is closest to top of viewport
  */
  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)
          )[0];

        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0.01, 0.1, 0.2],
      }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return (
    <div className="container solus-page">
      <div className="solus-max">
        <div className="solus-shell">
          {/* Sidebar */}
          <aside className="solus-side">
            <button
              className="solus-back"
              type="button"
              onClick={() => navigate("/projects")}
            >
              ← BACK
            </button>

            <nav className="solus-side-nav" aria-label="Case study sections">
              {ids.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className={activeSection === id ? "is-active" : ""}
                >
                  {id === "overview" && "Overview"}
                  {id === "summary" && "Summary"}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main */}
          <main className="solus-main">
            {/* Overview */}
            <header className="solus-top" id="overview">
              <p className="solus-kicker">SOLUS | PERSONAL PROJECT</p>
              <h1 className="solus-h1">
                Rethinking how students navigate their academic lives
              </h1>

              {/* Hero blue card */}
              <div className="solus-heroCard">
                <div className="solus-heroSingle">
                  <img
                    src={heroImg}
                    alt="Solus hero screen"
                    className="solus-heroImg"
                  />
                </div>
              </div>

              {/* Meta row */}
              <div className="solus-meta">
                <div className="solus-metaCol">
                  <p className="solus-metaLabel">MY ROLE</p>
                  <p className="solus-metaValue">UX Research</p>
                  <p className="solus-metaValue">UX/UI Designer</p>
                </div>

                <div className="solus-metaCol">
                  <p className="solus-metaLabel">TIMELINE</p>
                  <p className="solus-metaValue">December 2025</p>
                </div>

                <div className="solus-metaCol">
                  <p className="solus-metaLabel">TEAM</p>
                  <p className="solus-metaValue">Myself</p>
                </div>

                <div className="solus-metaCol">
                  <p className="solus-metaLabel">SKILLS</p>
                  <p className="solus-metaValue">User Research</p>
                  <p className="solus-metaValue">User Interviews</p>
                  <p className="solus-metaValue">Iterations</p>
                  <p className="solus-metaValue">UX/UI Design</p>
                </div>
              </div>
            </header>

            {/* Discovery */}
            <section className="solus-section" id="summary">
              <p className="solus-miniKicker">SUMMARY</p>
              <h2 className="solus-h2">Understanding the student experience</h2>
              <p className="solus-body">
                Solus is a product design case study where I led the end-to-end design process to improve a complex student-facing system. Through user research and iterative design, I translated pain points into clear user flows and high-fidelity prototypes focused on clarity, efficiency, and usability.
                  </p>
                
              <p className="solus-body" style ={{ marginTop: "40px"}}>
                    Case study coming soon…
                </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
