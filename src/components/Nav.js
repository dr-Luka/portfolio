import me from "../media/images/me.png";
import { github, linkedin } from "../media/icons/icons.js";
export default function Nav() {
  return (
    <>
      <nav>
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
