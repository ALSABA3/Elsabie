import UilFacebookF from "@iconscout/react-unicons/icons/uil-facebook-f";
import UilInstagram from "@iconscout/react-unicons/icons/uil-instagram";
import UilTwitterAlt from "@iconscout/react-unicons/icons/uil-twitter-alt";

const SOCIAL_ICON_SIZE = 24;
const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=100006622530665/",
  instagram: "https://www.instagram.com/aboodyalsabaa/",
  twitter: "https://twitter.com/AboodAlsabaa",
};

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
              <a href="#portfolio" className="footer__link">
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
              href={SOCIAL_LINKS.facebook}
              className="footer__social"
              rel="noopener noreferrer"
              target="_blank"
            >
              <UilFacebookF size={String(SOCIAL_ICON_SIZE)} color="#fff" />
            </a>

            <a
              href={SOCIAL_LINKS.instagram}
              className="footer__social"
              rel="noopener noreferrer"
              target="_blank"
            >
              <UilInstagram size={String(SOCIAL_ICON_SIZE)} color="#fff" />
            </a>

            <a
              href={SOCIAL_LINKS.twitter}
              className="footer__social"
              rel="noopener noreferrer"
              target="_blank"
            >
              <UilTwitterAlt size={String(SOCIAL_ICON_SIZE)} color="#fff" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
