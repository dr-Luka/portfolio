import email from "../media/icons/email.png";
import phone from "../media/icons/phone.png";

export default function Contact() {
  return (
    <>
      <div className="section contact" id="contact">
        <div className="h2-bg">CONTACT</div>
        <h2>Get in Touch</h2>
        <div className="contact-info">
          <div className="contact-form">
            <span>Contact Me Now</span>
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Phone or Email" />

              <textarea placeholder="Tell me more about your needs......"></textarea>
              <div className="button-wrapper">
                <button className="button buttonFill">Send Message</button>
              </div>
            </form>
          </div>
          <div className="sep">or</div>
          <div className="contact-later">
            <span>Contact Me Later</span>
            <div>
              <span>
                <img src={email} alt="Email Icon" />
                luka000mikic@gmail.com
              </span>
            </div>
            <div>
              <span>
                <img src={phone} alt="Phone Icon" />
                +47 47 722 498
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
