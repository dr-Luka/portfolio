import stack from "../media/icons/stack.png";

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
            <div>Name: Luka Mikic</div>
            <div>Email: luka000mikic@gmail.com</div>
            <div>Age: 25</div>
            <div>Language: English</div>

            <a href="index" className="button buttonFill">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
