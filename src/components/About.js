import stack from "../media/icons/stack.png";

export default function About() {
  return (
    <>
      <div className="section knowMe" id="about">
        <div className="h2-bg">ABOUT ME</div>
        <h2>Know Me More</h2>
        <div className="studies">
          Graduated from Noroff University with Front-End Development as my
          focus.
        </div>
        <div className="flex">
          <div className="techStack">
            <span>Tech Stack</span>
            <img src={stack} alt="Tech Stack" />
          </div>
          <div className="myInfo">
            <div>Name: Luka Mikic</div>
            <div>Email: luka000mikic@gmail.com</div>
            <div>Age: 25</div>
            <div>Language: English</div>
          </div>
        </div>
      </div>
    </>
  );
}
