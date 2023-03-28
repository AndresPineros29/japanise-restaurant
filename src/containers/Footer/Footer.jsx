import "./footer.css";
import { Link } from "react-router-dom";
import { GiAsianLantern } from "react-icons/gi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <div className="footer__icons">
          <GiAsianLantern />

          <div className="footer__contact__icons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AndresPineros29/japanise-restaurant"
            >
              <BsGithub />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/andres-felipe-pi%C3%B1eros-pabon-0b1524264/"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
        <div className="footer__contact">
          <h4>
            <Link to={"/contact"}>Contactanos</Link>
          </h4>
          <ul>
            <li>
              <b>Sede Norte:</b> +57 320654321
            </li>
            <li>
              <b>Sede Centro:</b> +57 313123456
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
