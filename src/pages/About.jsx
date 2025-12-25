import second from "../assets/2.png";
import fourth from "../assets/4.png";
import fifth from "../assets/skating.jpg";
import sixth from "../assets/conference.jpeg";
import seven from "../assets/7.jpg";
import eight from "../assets/8.png";

import { useState } from "react";

function PhotoCard({ src, alt, caption }) {
  const [open, setOpen] = useState(false);

  return (
    <figure
      className={`about-photo-card about-photo-card--inline about-photo-hover ${
        open ? "is-open" : ""
      }`}
      tabIndex={0}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <img src={src} alt={alt} loading="lazy" />
      <figcaption className="about-photo-tooltip">{caption}</figcaption>
    </figure>
  );
}


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

            
            <div className="about-inline-photos" aria-label="Photos in story">
              <PhotoCard
                src={eight}
                alt="Plotd team"
                caption="The super cool Plotd team!!"
              />

              <PhotoCard
                src={sixth}
                alt="Conference moment"
                caption="Conference + community moments"
              />

              <PhotoCard
                src={second}
                alt="Working session"
                caption="QWIC ♡ QUX"
              />
            </div>


            <p>
              As I grew, this instinct showed up in many ways, from leading projects and organizing events to supporting others through transitions. When I started Computer Science at Queen’s, I expected to focus mostly on coding, and I did. But things really clicked when I joined clubs like QMIND, Queen’s Web Dev, GameDev, and RISE Lab. Designing interfaces alongside building web apps helped me better understand user needs as well as the constraints developers work within. A Human–Computer Interaction course tied everything together, connecting creativity with technical problem-solving. 
            </p>

            <p><strong>Since then, I’ve stepped fully into product design.</strong></p>

            <p>
              In my final year, I co-founded Queen’s UX to create the kind of design-focused space I had been looking for, one centered on thoughtful, user-driven work. As Vice-Chair of Marketing for Queen’s Women in Computing, I brought that same mindset to campaigns and events. Today, I design with both structure and empathy, creating experiences that are intuitive, collaborative, and human.
            </p>
            <div className="about-inline-photos" aria-label="Photos in story">
              <PhotoCard
                src={fourth}
                alt="Pokémon"
                caption="Pokémon card show!!"
              />

              <PhotoCard
                src={seven}
                alt="Dance"
                caption="CCDC dance team photoshoot"
              />

              <PhotoCard
                src={fifth}
                alt="Figure skating"
                caption="Figure skating = my reset"
              />
            </div>


            <p>
              Outside of tech, I stay inspired through dance, figure skating, anime, and Pokémon. These communities remind me why I love design in the first place: storytelling, connection, and creating moments that make people feel something.
            </p>

          </div>
          
        </div>
        
      </section>

      

      {/* Skills */}
      <section className="about-story-grid" style={{ marginTop: "90px" }}>
        <p className="about-section-label"><strong>My skills</strong></p>

        <div className="skills-list">
          <div>
            <h3 style={{ color:"#372A2A" }}>UX Research & Analysis</h3>
            <p>User Surveys/Interviews | Competitor Analysis | Personas | Journey Mapping</p>
          </div>

          <div>
            <h3 style={{ color:"#372A2A" }}>UX Design</h3>
            <p>User Flows | Information Architecture | Wireframing & Prototyping | Usability Testing</p>
          </div>

          <div>
            <h3 style={{ color:"#372A2A" }}>UI Design</h3>
            <p>Visual Design | Colour Theory | Typography | Accessibility | Figma</p>
          </div>

          <div>
            <h3 style={{ color:"#372A2A" }}>Coding</h3>
            <p>HTML | CSS & Tailwind CSS | Javascript | Typescript | Python | C | Java | React | Next.js | R | Bash</p>
          </div>

          <div>
            <h3 style={{ color:"#372A2A" }}>Project Management</h3>
            <p>Project Planning | People Management/Organization | Facilitating Meetings | Client Communication </p>
          </div>

          <div>
            <h3 style={{ color:"#372A2A" }}>Miscellaneous</h3>
            <p>CapCut | SEO | Google Suite | Event Planning</p>
          </div>
        </div>
      </section>
    </div>
  );
}
