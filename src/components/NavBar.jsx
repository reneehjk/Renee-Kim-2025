import { NavLink } from "react-router-dom";

export default function NavBar() {
  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <nav className="nav">
      <div className="nav-inner">
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/projects" className={linkClass}>Projects</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>

        <a className="nav-link" href="https://drive.google.com/file/d/1Bf7mEL7FkjMcq-2DmaNk3umj_lr2zXm4/view?usp=sharing" target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </nav>
  );
}
