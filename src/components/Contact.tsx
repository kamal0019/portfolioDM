import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:dikshamathur31@gmail.com"
                data-cursor="disable"
              >
                Email — dikshamathur31@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+918209261585"
                data-cursor="disable"
              >
                Phone — +91 8209261585
              </a>
            </p>
            <h4>Education</h4>
            <p>
              Bachelor of Computer Applications (BCA) — University of Maharani College, Jaipur (2019–2022)
            </p>
            <p>
              Certifications: SQL, Power BI, Python for Data Analysis
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/diksha-mathur-1b58741a8"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Diksha Mathur</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
