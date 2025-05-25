import React from "react";
import UilLinkedinAlt from "@iconscout/react-unicons/icons/uil-linkedin-alt";
import UilGithubAlt from "@iconscout/react-unicons/icons/uil-github-alt";
import UilMessage from "@iconscout/react-unicons/icons/uil-message";
import UilMouseAlt from "@iconscout/react-unicons/icons/uil-mouse-alt";
import UilArrowDown from "@iconscout/react-unicons/icons/uil-arrow-down";
import home from "../assets/home.jpg";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/abdullah-elsabie-41b3a4200/"
              target="_blank"
              className="home__social-icon"
            >
              <UilLinkedinAlt size="20" color="var(--first-color)" />
            </a>
            <a
              href="https://github.com/ALSABA3"
              target="_blank"
              className="home__social-icon"
            >
              <UilGithubAlt size="20" color="var(--first-color)" />
            </a>
          </div>
          <div className="home__img">
            <svg
              className="home__blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <image className="home__blob-img" href={home} />
              </g>
            </svg>
          </div>
          <div className="home__data">
            <h1 className="home__title">Hi, I'am Abdullah Elsabie</h1>
            <h3 className="home__subtitle">Computer Engineering</h3>
            <p className="home__description">
              I am Abdullah Elsabie a Computer Engineering student at Dogus
              university in Istanbul. Speaking three languages: Arabic and
              English and Turkish. I'm always open to improve myself in my field
              and learning new things outside the field that expand my knowledge
            </p>
            <a href="#contact" className="button button--flex">
              Contact me
              <UilMessage
                size="20"
                color="var(--first-color)"
                className="nav__icon button__icon"
              ></UilMessage>
            </a>
          </div>
        </div>
        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <UilMouseAlt
              size="32"
              color="var(--first-color)"
              className="home__scroll-mouse"
            ></UilMouseAlt>
            <span className="home__scroll-name">Scroll down</span>
            <UilArrowDown
              size="20"
              color="var(--first-color)"
              className="home__scroll-arrow"
            ></UilArrowDown>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
