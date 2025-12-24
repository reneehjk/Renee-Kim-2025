import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");
  const [open, setOpen] = useState(false);

  // Close drawer on route change (when any link is clicked)
  const handleLinkClick = () => setOpen(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ESC to close
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <nav className="nav">
      <div className="nav-inner">
        {/* Desktop links (unchanged layout) */}
        <div className="nav-links-desktop">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
          <a
            className="nav-link"
            href="https://drive.google.com/file/d/1Bf7mEL7FkjMcq-2DmaNk3umj_lr2zXm4/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-burger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`nav-overlay ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-in drawer */}
      <aside className={`nav-drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="nav-drawer-header">
          <button className="nav-close" aria-label="Close menu" onClick={() => setOpen(false)}>
            ×
          </button>
        </div>

        <div className="nav-drawer-links">
          <NavLink to="/" end className={linkClass} onClick={handleLinkClick}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClass} onClick={handleLinkClick}>
            Projects
          </NavLink>
          <NavLink to="/about" className={linkClass} onClick={handleLinkClick}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={handleLinkClick}>
            Contact
          </NavLink>

          <a
            className="nav-link"
            href="https://drive.google.com/file/d/1Bf7mEL7FkjMcq-2DmaNk3umj_lr2zXm4/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            onClick={handleLinkClick}
          >
            Resume
          </a>
        </div>
      </aside>
    </nav>
  );
}
