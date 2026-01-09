import "./Solus.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import heroImg from "../../assets/solus/hero.png";
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
      "discovery",
      "methods",
      "insights",
      "flow",
      "research",
      "iterations",
      "final",
      "reflection",
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
                  {id === "discovery" && "Discovery"}
                  {id === "methods" && "Research Methods"}
                  {id === "insights" && "Insights"}
                  {id === "flow" && "Flow + IA"}
                  {id === "research" && "Research"}
                  {id === "iterations" && "Iterations"}
                  {id === "final" && "Final Product"}
                  {id === "reflection" && "Reflection"}
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
            <section className="solus-section" id="discovery">
              <p className="solus-miniKicker">DISCOVERY</p>
              <h2 className="solus-h2">Understanding the student experience</h2>
              <p className="solus-body">
                Before designing anything, I wanted to understand{" "}
                <strong>how students actually experience SOLUS</strong>, not how the
                system is structured internally.
              </p>

              <div className="solus-discoveryCards">
                <div className="solus-discoveryCard">
                  <p className="solus-discoveryTitle">UNDERSTAND</p>
                  <p className="solus-discoveryText">
                    When and why students use SOLUS
                  </p>
                </div>

                <div className="solus-discoveryCard">
                  <p className="solus-discoveryTitle">IDENTIFY</p>
                  <p className="solus-discoveryText">
                    Where confusion and stress appear in the experience
                  </p>
                </div>

                <div className="solus-discoveryCard">
                  <p className="solus-discoveryTitle">EXPLORE</p>
                  <p className="solus-discoveryText">
                    How students mentally model academic tasks
                  </p>
                </div>
              </div>
            </section>

            {/* Research Methods (blue accordion) */}
            <section className="solus-section" id="methods">
              <p className="solus-miniKicker">RESEARCH METHODS</p>
              <h2 className="solus-h2">How insights were gathered</h2>
              <p className="solus-body">
                To capture both behaviors and sentiment, I used a mixed-methods
                approach.
              </p>

              <MethodsAccordion />
            </section>

            {/* KEY INSIGHTS */}
<section className="insights" id="insights">
  <div className="insights-wrap">
    <p className="insights-kicker">KEY INSIGHTS</p>
    <h2 className="insights-h2">What stood out in the research</h2>

    {/* INSIGHT 01 */}
    <div className="insight">
      <p className="insight-label">INSIGHT 01</p>
      <h3 className="insight-title">Visual hierarchy is misleading</h3>
      <p className="insight-body">
        Low-priority actions are given the same visual weight as critical tasks.
      </p>

      <p className="insight-caption">Current view of home page:</p>

      <img
        src={heroImg}
        alt="SOLUS home page screenshot"
        className="insight-img"
        />


      <p className="insight-takeaway">
        When everything looks important, students don’t know where to focus.
      </p>
    </div>

    {/* INSIGHT 02 */}
    <div className="insight">
      <p className="insight-label">INSIGHT 02</p>
      <h3 className="insight-title">Degree progress is unclear</h3>
      <p className="insight-body">
        Students have no single place to see how close they are to completing their degree.
      </p>

      <p className="insight-caption">Complicated view of academic progress:</p>

      <img
        src={degreePImg}
        alt="Complicated view of academic progress in SOLUS"
        className="insight-img"
        />


      <p className="insight-takeaway">
        Unclear progress creates anxiety and forces students to rely on advisors or manual checks.
      </p>
    </div>

    {/* INSIGHT 03 */}
    <div className="insight">
      <p className="insight-label">INSIGHT 03</p>
      <h3 className="insight-title">Enrollment is slowed by unnecessary steps</h3>
      <p className="insight-body">
        Course enrollment requires clicking through multiple “Next” steps, even when the information could be shown on a single page.
      </p>

      <p className="insight-caption">All the next button pages:</p>

      <img
        src={enrollImg}
        alt="Enrollment flow with multiple next steps"
        className="insight-img"
        />


      <p className="insight-takeaway">
        Extra steps and page loads slow students down during time-sensitive enrollment periods.
      </p>
    </div>

    {/* INSIGHT 04 */}
    <div className="insight">
      <p className="insight-label">INSIGHT 04</p>
      <h3 className="insight-title">Load times lack feedback</h3>
      <p className="insight-body">
        Pages load slowly without clear progress indicators.
      </p>

      <img
        src={loadImg}
        alt="Loading screen without clear feedback"
        className="insight-img"
        />


      <p className="insight-takeaway">
        Without feedback, students assume something went wrong and repeat actions.
      </p>
    </div>
  </div>
</section>


            {/* Flow + IA */}
            <section className="solus-section" id="flow">
              <p className="solus-miniKicker">FLOW + INFORMATION ARCHITECTURE</p>
              <h2 className="solus-h2">From cluttered paths to a clear sequence</h2>

              <div className="solus-stack">
                <PH label="User Flow (Before)" ratio="16/9" tone="mid" />
                <PH label="User Flow (After)" ratio="16/9" tone="mid" />
              </div>

              <div className="solus-twoUp">
                <div>
                  <p className="solus-colLabel">Before</p>
                  <PH label="Before Screen" ratio="4/3" />
                </div>
                <div>
                  <p className="solus-colLabel">After</p>
                  <PH label="After Screen" ratio="4/3" />
                </div>
              </div>
            </section>

            {/* Research */}
            <section className="solus-section" id="research">
              <p className="solus-miniKicker">RESEARCH</p>
              <h2 className="solus-h2">What we mapped + evaluated</h2>

              <div className="solus-stack">
                <PH
                  label="Current Journey Map / Pain Points"
                  ratio="16/9"
                  tone="mid"
                />
                <PH
                  label="Heuristic Evaluation Notes / Findings"
                  ratio="16/10"
                  tone="mid"
                />
              </div>
            </section>

            {/* Iterations */}
            <section className="solus-section" id="iterations">
              <p className="solus-miniKicker">ITERATIONS</p>
              <h2 className="solus-h2">Refining hierarchy + feedback states</h2>

              <div className="solus-stack">
                <PH label="Iteration 01 — Wireframes" ratio="16/9" />
                <PH label="Iteration 02 — Mid Fidelity" ratio="16/9" />
                <PH label="Iteration 03 — Feedback / Progress Indicators" ratio="16/9" />
              </div>
            </section>

            {/* Final Product */}
            <section className="solus-section" id="final">
              <p className="solus-miniKicker">FINAL PRODUCT</p>
              <h2 className="solus-h2">Final screens</h2>

              <div className="solus-finalGrid">
                <PH label="Final Screen 01" ratio="3/4" />
                <PH label="Final Screen 02" ratio="3/4" />
                <PH label="Final Screen 03" ratio="3/4" />
                <PH label="Final Screen 04" ratio="3/4" />
              </div>

              <div className="solus-stack" style={{ marginTop: 22 }}>
                <PH
                  label="Full Prototype / End-to-End Flow"
                  ratio="16/9"
                  tone="mid"
                />
              </div>
            </section>

            {/* Reflection */}
            <section className="solus-section" id="reflection">
              <p className="solus-miniKicker">REFLECTION</p>
              <h2 className="solus-h2">What I learned</h2>

              <div className="solus-reflect">
                <p className="solus-body">
                  Placeholder reflection text. This section usually mirrors the
                  reference with a short paragraph + a visual.
                </p>
                <PH label="Team / Process Photo" ratio="4/3" />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
