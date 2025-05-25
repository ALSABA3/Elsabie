import UilFacebookF from "@iconscout/react-unicons/icons/uil-facebook-f";
import UilInstagram from "@iconscout/react-unicons/icons/uil-instagram";
import UilTwitterAlt from "@iconscout/react-unicons/icons/uil-twitter-alt";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Elsabie</h1>
            <span className="footer__subtitle">Computer Engineer</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>
            <li>
              <a href="#portifolio" className="footer__link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact Me
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.facebook.com/profile.php?id=100006622530665/"
              className="footer__social"
            >
              <UilFacebookF size="24" color="#fff" />
            </a>

            <a
              href="https://www.instagram.com/aboodyalsabaa/"
              className="footer__social"
            >
              <UilInstagram size="24" color="#fff" />
            </a>

            <a
              href="https://twitter.com/AboodAlsabaa"
              className="footer__social"
            >
              <UilTwitterAlt size="24" color="#fff" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
