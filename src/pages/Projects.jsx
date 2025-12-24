import ks from "../assets/kimchiS.png"
import pt from "../assets/plotd.png"
import qu from "../assets/qux.png"
import flower from "../assets/medFlower.svg";


export default function Projects() {
  return (
    <div className="container">
      <p style={{ marginBottom: "30px" }}>Projects</p>
        <h1 style={{ marginBottom: "80px" }}>
            Featured Work
        </h1>

        <section className="projects-grid">
            {/* wrapper: 3:2 layout INSIDE */}
            <div className="project-card--row">
                {/* Right (2 parts) — QUX (different layout) */}
                <article className="project-card--inner project-card--qux">
                <div className="project-media">
                    <img src={flower} alt="" className="project-flower" />
                    <img src={qu} alt="" />
                </div>

                <div className="project-meta">
                    <h2 className="project-title">QUX</h2>
                    <p className="project-subtitle">Queen's UX Club | 2025</p>
                    <p className="project-tags">Co-Founder</p>
                </div>
                </article>
                {/* Left (3 parts) — Plotd */}
                <article className="project-card project-card--plotd">
                    <div className="project-meta">
                        <h2 className="project-title">Plotd</h2>
                        <p className="project-subtitle">Gaming Platform App | 2026</p>
                        <p className="project-tags">Product Design</p>
                    </div>

                    <div className="project-media">
                        <img src={flower} alt="" className="project-flower" />
                        <img src={pt} alt="Plotd app mockup" />
                    </div>
                </article>
                <article className="project-card project-card--wide">
                    <div className="project-media">
                        <img src={flower} alt="" className="project-flower" />
                        <img src={ks} alt="" />
                    </div>
                    <div className="project-meta">
                        <h2 className="project-title">Kimchi Studios</h2>
                        <p className="project-subtitle">Nail Studio Branding | 2025</p>
                        <p className="project-tags">
                            Project Management | Brand Creation | Web Development
                        </p>
                    </div>
                </article>
            </div>
        </section>
    </div>
  );
}
