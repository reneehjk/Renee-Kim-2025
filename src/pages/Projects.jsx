import ks from "../assets/kimchiS.png"
import pt from "../assets/plotd.png"
import qu from "../assets/qux.png"
import sf from "../assets/smallFlower.svg";
import mf from "../assets/medFlower.svg";
import lf from "../assets/largeFlower.svg";
import so from "../assets/solus/heroSec.png";

import { useNavigate } from "react-router-dom";


export default function Projects() {
    const navigate = useNavigate();
    return (
        <div className="container project-page">
            <p className="projects-kicker">Projects</p>
            <h1 className="projects-title">Featured Work</h1>


            <section className="projects-grid">
                {/* wrapper: 3:2 layout INSIDE */}
                <div className="project-card--row">
                    {/* Right (2 parts) — QUX (different layout) */}
                    <article className="project-card--inner project-card--solus" onClick={() => navigate("/projects/solus")}>
                        <div className="project-media">
                            <img src={sf} alt="" className="project-flower" />
                            <img src={so} alt="" />
                        </div>

                        <div className="project-meta">
                            <h2 className="project-title">Solus</h2>
                            <p className="project-subtitle">Queen's Student Hub | 2025</p>
                            <p className="project-tags">User Research | Product Design</p>
                    </div>
                    </article>
                    {/* Left (3 parts) — Plotd */}
                    <article className="project-card project-card--plotd" onClick={() => navigate("/projects/plotd")}>
                        <div className="project-meta">
                            <h2 className="project-title">Plotd</h2>
                            <p className="project-subtitle">Gaming Platform App | 2026</p>
                            <p className="project-tags">User Research | Product Design</p>
                        </div>

                        <div className="project-media">
                            <img src={lf} alt="" className="project-flower" />
                            <img src={pt} alt="Plotd app mockup" />
                        </div>
                    </article>
                    
                </div>
            </section>
        </div>
    );
}
