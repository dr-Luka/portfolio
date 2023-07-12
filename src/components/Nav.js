import React, { useState, useEffect } from "react";
import me from "../media/images/me.png";
import github from "../media/icons/github.png";
import linkedin from "../media/icons/linkedin.png";

export default function Nav() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function scroll(event) {
    let id = event.target.name;
    const section = document.getElementById(id);
    section.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  }

  return (
    <>
      <nav className={` ${screenSize < 420 ? "small-screen" : ""}`} name="nav">
        <div>
          <img
            className="nav-img"
            src={me}
            alt="Portrait of an awesome person!"
          />
          <div className="nav-name">Luka Mikic</div>
        </div>
        <ul className="nav-links">
          <li>
            <button onClick={scroll} name="home" className="nav-link">
              Home
            </button>
          </li>
          <li>
            <button onClick={scroll} name="about" className="nav-link">
              About Me
            </button>
          </li>
          <li>
            <button onClick={scroll} name="portfolio" className="nav-link">
              Portfolio
            </button>
          </li>
          <li>
            <button onClick={scroll} name="contact" className="nav-link">
              Contact
            </button>
          </li>
        </ul>
        <div className="nav-social">
          <div>
            <a href="https://github.com/dr-Luka">
              {" "}
              <img src={github} alt="Github Logo" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/luka-mikic-8a9758225/">
              <img src={linkedin} alt="LinkedIn Logo" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
