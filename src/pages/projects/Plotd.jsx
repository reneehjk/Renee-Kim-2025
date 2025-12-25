import heroImg from "../../assets/plotd.png";
import heroImg2 from "../../assets/plotd2.png";
import "./Plotd.css";

export default function Plotd() {
  return (
    <div className="container plotd-page">
      {/* Hero */}
      <section className="plotd-hero">
        <img
          src={heroImg}
          alt="Plotd app screen"
          className="plotd-hero-image"
        />
        <img
          src={heroImg2}
          alt="Plotd app gameplay screen"
          className="plotd-hero-image"
        />
      </section>

      {/* Header */}
      <section className="plotd-header">
        <h1 className="title">Plotd</h1>

        <div className="plotd-meta-row">
          <p className="plotd-subtitle">Gaming Platform App</p>
          <span className="plotd-year">2026</span>
        </div>
      </section>

      {/* Overview + Impact */}
      <section className="plotd-overview">
        <div className="plotd-overview-left">
          <h2 className="plotd-section-title">Overview</h2>
          <p className="plotd-body">
            Plotd is a gaming platform concept focused on blending social
            interaction with interactive storytelling. The project explores
            how players discover, share, and progress through narrative-driven
            games while remaining connected to a broader community.
            This case study examines early product thinking, interface
            exploration, and experience design decisions.
          </p>
        </div>

        <aside className="plotd-impact-card">
          <h3 className="plotd-impact-title">My impact</h3>
          <ul className="plotd-impact-list">
            <li>Explored early product direction and feature scope</li>
            <li>Designed interface concepts for gameplay and discovery</li>
            <li>Considered player motivation, retention, and flow</li>
            <li>Iterated on layouts to balance narrative and utility</li>
            <li>Applied UX principles to a gaming-focused context</li>
          </ul>
        </aside>
      </section>

      <p className="plotd-coming-soon">Case study coming soon…</p>
    </div>
  );
}
