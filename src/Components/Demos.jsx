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

const projects = [
  {
    img: FirstImg,
    title: "Coundown Game",
    description:
      "Web game adaptable to all devices, with UI components and animated interactions.",
    link: "https://boda-countdown.netlify.app/",
  },
  {
    img: SecondImg,
    title: "TicTacToe",
    description: "A Simple TicTacToe web game to play with a freind.",
    link: "https://boda-ticktactoe.netlify.app/",
  },
  {
    img: ThirdImg,
    title: "Quiz App",
    description:
      "A Simple Quiz app with timer also it randomise the questions and answers everytime.",
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
          {projects.map((project, index) => (
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
                    size="20"
                    color="#fff"
                    className="button__icon"
                  ></UilArrowRight>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-button-next">
          <UilAngleRightB
            size="56"
            color="var(--first-color)"
            className="swiper-portfolio-icon"
          ></UilAngleRightB>
        </div>
        <div className="swiper-button-prev">
          <UilAngleLeftB
            size="56"
            color="var(--first-color)"
            className="swiper-portfolio-icon"
          ></UilAngleLeftB>
        </div>

        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Demos;
