import UilDownloadAlt from "@iconscout/react-unicons/icons/uil-download-alt";
import AboutImg from "../assets/about.jpg";
import AboutCv from "../assets/Abdullah-Cv.pdf";

const ICON_SIZE = 20;

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <p className="about__discription">
            I have valuable experience in software development and web
            development across front-end and back-end technologies. I also bring
            over 2 years of professional freelance experience in graphic design.
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">2+</span>
              <span className="about__info-name">
                Years <br />
                Experience
              </span>
            </div>
            <div>
              <span className="about__info-title">4+</span>
              <span className="about__info-name">
                Completed <br />
                Projects
              </span>
            </div>
            <div>
              <span className="about__info-title">3</span>
              <span className="about__info-name">
                Companies <br />
                Worked
              </span>
            </div>
          </div>
          <div className="about__button">
            <a download href={AboutCv} className="button button--flex">
              Download CV
              <UilDownloadAlt
                size={String(ICON_SIZE)}
                color="#fff"
                className="button__icon"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
