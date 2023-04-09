import React, { useState } from "react";
import me from "../media/images/me.png";
import github from "../media/icons/github.png";
import linkedin from "../media/icons/linkedin.png";

export default function Nav() {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <>
      <button onClick={() => setNavToggle(!navToggle)} className="nav-toggle">
        Toggle
      </button>

      <nav className={`${navToggle ? "not-visible" : "visible"}`}>
        <div>
          <img
            className="nav-img"
            src={me}
            alt="Portrait of an awesome person!"
          />
          <div className="nav-name">Luka Mikic</div>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <div className="nav-social">
          <div>
            <img src={github} alt="Github Logo" />
          </div>
          <div>
            <img src={linkedin} alt="LinkedIn Logo" />
          </div>
        </div>
      </nav>
    </>
  );
}
