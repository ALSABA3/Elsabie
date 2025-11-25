import { useEffect } from "react";
import Swiper from "swiper/bundle";
import FirstImg from "../assets/1.png";
import SecondImg from "../assets/2.png";
import ThirdImg from "../assets/3.png";
import {
  UilAngleRightB,
  UilArrowRight,
  UilAngleLeftB,
} from "@iconscout/react-unicons";

const ICON_SIZE = 20;
const NAV_ICON_SIZE = 56;

const PORTFOLIO_PROJECTS = [
  {
    img: FirstImg,
    title: "Countdown Game",
    description:
      "A responsive web game with interactive UI components and smooth animations, optimized for all devices.",
    link: "https://boda-countdown.netlify.app/",
  },
  {
    img: SecondImg,
    title: "TicTacToe",
    description: "A classic TicTacToe web game for playing with a friend.",
    link: "https://boda-ticktactoe.netlify.app/",
  },
  {
    img: ThirdImg,
    title: "Quiz App",
    description:
      "An interactive quiz application with a timer and randomized questions and answers for each session.",
    link: "https://boda-quizapp.netlify.app/",
  },
];

const Demos = () => {
  useEffect(() => {
    new Swiper(".portfolio__container", {
      cssMode: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="portfolio__container container swiper">
        <div className="swiper-wrapper">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <div key={index} className="portfolio__content grid swiper-slide">
              <img
                src={project.img}
                className="portfolio__img"
                alt={project.title}
              />

              <div className="portfolio__data">
                <h3 className="portfolio__title">{project.title}</h3>
                <p className="portfolio__description">{project.description}</p>

                <a
                  href={project.link}
                  className="button button--flex button--small portfolio__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo{" "}
                  <UilArrowRight
                    size={String(ICON_SIZE)}
                    color="#fff"
                    className="button__icon"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-button-next">
          <UilAngleRightB
            size={String(NAV_ICON_SIZE)}
            color="var(--first-color)"
            className="swiper-portfolio-icon"
          />
        </div>
        <div className="swiper-button-prev">
          <UilAngleLeftB
            size={String(NAV_ICON_SIZE)}
            color="var(--first-color)"
            className="swiper-portfolio-icon"
          />
        </div>

        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Demos;
