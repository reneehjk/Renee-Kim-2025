import heroImg from "../../assets/qux.png";
import "./Qux.css";

export default function Qux() {
    return (
        <div className="container qux-page">
        {/* Hero */}
        <section className="qux-hero">
            <img
            src={heroImg}
            alt="Queen’s UX Club website preview"
            className="qux-hero-image"
            />
        </section>

        {/* Header */}
        <section className="qux-header">
            <h1 className="title">Queen’s UX Club (QUX)</h1>

            <div className="qux-meta-row">
                <p className="qux-subtitle">A case study on being a founder</p>
                <span className="qux-year">2025</span>
            </div>
        </section>

        {/* Overview + Impact */}
        <section className="qux-overview">
            <div className="qux-overview-left">
            <h2 className="qux-section-title">Overview</h2>
            <p className="qux-body">
                Co-founding a new university club meant building everything from
                scratch, especially when it came to designing and running events
                with no precedent. I planned and led UX workshops, socials, and
                larger events by treating each as an experience-design problem:
                iterating on structure, content, and facilitation to make UX
                approachable for students encountering it for the first time.
                Alongside event planning, I helped build the foundations that
                enabled growth, including interviewing over 60 candidates to hire a
                25-person executive team, co-creating a cohesive brand and website,
                and growing our social presence to over 600 followers. These efforts
                turned an initial idea into a sustainable, student-led UX community
                at Queen’s University.
            </p>
            </div>

            <aside className="qux-impact-card">
            <h3 className="qux-impact-title">My impact</h3>
            <ul className="qux-impact-list">
                <li>Planned and led UX workshops, socials, and events from the ground up</li>
                <li>Designed event experiences focused on accessibility, engagement, and psychological safety</li>
                <li>Connected with mentors and speakers to support our annual designathon</li>
                <li>Interviewed and hired the executive team, shaping the club’s long-term structure</li>
                <li>Co-created a branding guide used across events, social media, and web</li>
                <li>Contributed to a culture centered on curiosity, empathy, and experimentation</li>
            </ul>
            </aside>
        </section>
        <p className="qux-coming-soon">Case study coming soon…</p>
        </div>
    );
}
