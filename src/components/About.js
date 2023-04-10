import stack from "../media/icons/stack.png";
import me from "../media/images/me.png";
export default function About() {
  return (
    <>
      <div className="section about" id="about">
        <div className="h2-bg">ABOUT ME</div>
        <h2>Know Me More</h2>
        <div className="studies">
          Graduated from <span className="accent">Noroff University</span> with{" "}
          <span className="accent">Front-End Development</span> as my focus.
        </div>
        <div className="info">
          <div className="techStack">
            <span>Tech Stack</span>
            <img src={stack} alt="Tech Stack" />
          </div>
          <div className="myInfo">
            <img
              className="nav-img about-img"
              src={me}
              alt="Portrait of an awesome person!"
            />
            <div>
              <span className="darken">Name:</span> Luka Mikic
            </div>
            <div>
              <span className="darken">Email:</span> luka000mikic@gmail.com
            </div>
            <div>
              <span className="darken">Age: </span>25
            </div>
            <div>
              <span className="darken">Language:</span> English
            </div>

            <button className="button buttonFill">Download CV</button>
          </div>
        </div>
      </div>
    </>
  );
}
