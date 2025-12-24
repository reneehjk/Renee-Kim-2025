import first from "../assets/1.png";
import second from "../assets/2.png";
import third from "../assets/3.png";
import fourth from "../assets/4.png";

export default function About() {
  return (
    <div className="container about-page">

      {/* Intro */}
      <section className="about-intro">
        <p className="about-kicker">About Me</p>

        <h1 className="about-title">
          <span className="about-title--muted">Hi I’m Renee!</span>
          <span className="about-title--dark">A Product Designer</span>
          <span className="about-title--muted">with a background in development.</span>
        </h1>

        <h3 className="about-subhead">
          Leading design and building of purposeful digital products using empathy,
          logic and creativity.
        </h3>
      </section>

      {/* Story */}
      <section className="about-story">
        <div className="about-story-grid">
          {/* LEFT COLUMN — label */}
          <div className="about-story-label">
            <p><strong>My story</strong></p>
          </div>

          {/* RIGHT COLUMN — content */}
          <div className="about-story-content">
            <p><strong>I’ve always loved creating things for people.</strong></p>
            <p>
              When I was younger, I would choreograph dances and teach them to my little sister. In hindsight, they were terrible dances, but I loved watching how she reacted, what she found fun, and what didn’t work. Without realizing it, I was already testing, iterating, and designing experiences.
            </p>
            {/* Row 1 */}
            <p>
              As I grew, this instinct showed up in different forms, leading group projects, organizing student events, helping younger students adjust to school. I found myself in positions where I was trying to understand what people needed and building something to support them. When I started at Queen’s for Computer Science, I expected to write code, build systems, and think logically, which I did end up doing. But something clicked when I joined clubs like QMIND, Queen’s Web Dev, GameDev, and RISE Lab. I was coding web apps as well as designing interfaces. This meant I understood and experienced the constraints developers face and understood the importance of clarity in design. Then, I took a Human–Computer Interaction course, and everything came together. UX research, interaction design, prototyping, it felt like the perfect bridge between the creativity I grew up with and the technical foundation I built in CS.            
            </p>
            <p><strong>Since then, I’ve stepped fully into product design.</strong></p>
            {/* Row 2 */}
            <p>
              In my final year, I co-founded Queen’s UX because students like me needed a space to learn design properly, not just pretty screens, but real user-centered thinking. As Vice-Chair of Marketing for Queen’s Women in Computing, I brought that same mindset to every campaign, workshop, and community event. I approached club members the way I approach users: talk to them, understand the gaps, and design better experiences for them. Now, I design with both sides of the product in mind. My CS background helps me think structurally as well as communicate with the engineering side. My design training helps me craft interfaces that feel intuitive, thoughtful, and human. And my leadership experience keeps me grounded in empathy, always designing with people, not just for them.
            </p>
            <p>
              Outside of tech, I stay inspired through dance, figure skating, anime, and Pokémon. These communities remind me why I love design in the first place: storytelling, connection, and creating moments that make people feel something.
            </p>
          </div>
        </div>
      </section>


      {/* Skills */}
      <section className="about-story-grid" style = {{marginTop: "90px"}}>
        <p className="about-section-label"><strong>My skills</strong></p>

        <div className="skills-list">
          <div>
            <h3 style = {{ color:"#372A2A" }}>UX Research & Analysis</h3>
            <p>User Surveys/Interviews | Competitor Analysis | Personas | Journey Mapping</p>
          </div>

          <div>
            <h3 style = {{ color:"#372A2A" }}>UX Design</h3>
            <p>User Flows | Information Architecture | Wireframing & Prototyping | Usability Testing</p>
          </div>

          <div>
            <h3 style = {{ color:"#372A2A" }}>UI Design</h3>
            <p>Visual Design | Colour Theory | Typography | Accessibility | Figma</p>
          </div>

          <div>
            <h3 style = {{ color:"#372A2A" }}>Coding</h3>
            <p>HTML | CSS & Tailwind CSS | Javascript | Typescript | Python | C | Java | React | Next.js | R | Bash</p>
          </div>

          <div>
            <h3 style = {{ color:"#372A2A" }}>Project Management</h3>
            <p>Project Planning | People Management/Organization | Facilitating Meetings | Client Communication </p>
          </div>

          <div>
            <h3 style = {{ color:"#372A2A" }}>Miscellaneous</h3>
            <p>CapCut | SEO | Google Suite | Event Planning</p>
          </div>
        </div>
      </section>
    </div>
  );
}
