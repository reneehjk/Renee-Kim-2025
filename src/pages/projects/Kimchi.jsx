import heroImg from "../../assets/kimchiS.png";
import "./Kimchi.css";

export default function Kimchi() {
  return (
    <div className="container kimchi-page">
      {/* Hero */}
      <section className="kimchi-hero">
        <img
          src={heroImg}
          alt="Kimchi Studios branding preview"
          className="kimchi-hero-image"
        />
      </section>

      {/* Header */}
      <section className="kimchi-header">
        <h1 className="title">Kimchi Studios</h1>

        <div className="kimchi-meta-row">
          <p className="kimchi-subtitle">Nail Studio Branding</p>
          <span className="kimchi-year">2025</span>
        </div>
      </section>

      {/* Overview + Impact */}
      <section className="kimchi-overview">
        <div className="kimchi-overview-left">
          <h2 className="kimchi-section-title">Overview</h2>
          <p className="kimchi-body">
            Kimchi Studios is a nail studio branding project focused on creating
            a visual identity that feels playful, polished, and welcoming.
            The goal was to design a brand that could scale across digital and
            physical touchpoints while staying approachable and expressive.
            This project explored how color, typography, and tone can work
            together to reflect a studio’s personality and values.
          </p>
        </div>

        <aside className="kimchi-impact-card">
          <h3 className="kimchi-impact-title">My impact</h3>
          <ul className="kimchi-impact-list">
            <li>Developed the brand’s visual direction and overall aesthetic</li>
            <li>Explored typography, color palettes, and logo applications</li>
            <li>Designed assets adaptable for social media and in-studio use</li>
            <li>Balanced trend-driven visuals with long-term brand clarity</li>
            <li>Iterated on concepts to ensure consistency across touchpoints</li>
          </ul>
        </aside>
      </section>

      <p className="kimchi-coming-soon">Case study coming soon…</p>
    </div>
  );
}
