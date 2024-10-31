import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="text-center">
        <p>CopyRight Berat Güdelek WebSite 2024</p>
      </div>
      <div className="social-links">
        <div className="link-content">
          <ul className="links list-unstyled">
            <li className="link-item">
              <a
                href="https://www.linkedin.com/in/beratgudelek/"
                target="_blank"
              />
              <FaLinkedinIn />
            </li>
            <li className="link-item">
              <a href="www.linkedin.com/in/beratgudelek" target="_blank" />
              <FaGithub />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
