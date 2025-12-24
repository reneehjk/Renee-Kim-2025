import diagonalArrow from "../assets/black-arrow.svg";
import sf from "../assets/smallFlower.svg";
import mf from "../assets/medFlower.svg";
import lf from "../assets/largeFlower.svg";

export default function Contact() {
  return (
    <div className="contact contact--flowers">
      <div className="container contact-inner">
        <div className="contact-left">
          <p className="contact-kicker">Contact</p>
          <h1 className="contact-title">Let’s connect</h1>

          <div className="contact-grid">
            <div className="contact-item">
              <p className="contact-label">Email</p>
              <a className="contact-link" href="mailto:reneehjkimll@gmail.com">
                <span>reneehjkimll@gmail.com</span>
                <img src={diagonalArrow} alt="" className="contact-arrow" />
              </a>
            </div>

            <div className="contact-item">
              <p className="contact-label">LinkedIn</p>
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/reneehjkim/"
                target="_blank"
                rel="noreferrer"
              >
                <span>https://www.linkedin.com/in/reneehjkim/</span>
                <img src={diagonalArrow} alt="" className="contact-arrow" />
              </a>
            </div>

            <div className="contact-item">
              <p className="contact-label">Phone Number</p>
              <a className="contact-link" href="tel:+16043494822">
                <span>+1 604 349-4822</span>
                <img src={diagonalArrow} alt="" className="contact-arrow" />
              </a>
            </div>

            <div className="contact-item">
              <p className="contact-label">Location</p>
              <p className="contact-value">Vancouver BC | Kingston ON</p>
            </div>
          </div>
        </div>
      </div>

      {/* Flowers */}
      <div className="contact-flowers" aria-hidden="true">
        <img src={sf} alt="" className="contact-flower contact-flower--small" />
        <img src={mf} alt="" className="contact-flower contact-flower--med" />
        <img src={lf} alt="" className="contact-flower contact-flower--large" />
      </div>
    </div>
  );
}
