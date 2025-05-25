import React, { useState } from "react";
import UilWebGrid from "@iconscout/react-unicons/icons/uil-web-grid";
import UilArrow from "@iconscout/react-unicons/icons/uil-arrow";
import UilPen from "@iconscout/react-unicons/icons/uil-pen";
import UilDatabase from "@iconscout/react-unicons/icons/uil-database";
import UilCheckCircle from "@iconscout/react-unicons/icons/uil-check-circle";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";
import UilArrowRight from "@iconscout/react-unicons/icons/uil-arrow-right";

const services = [
  {
    title: "UI/UX Designer",
    icon: UilWebGrid,
    description: [
      "I develop the user interface.",
      "Web page development.",
      "I create UX element interactions.",
      "I position your company brand.",
    ],
  },
  {
    title: "Front-end Development",
    icon: UilArrow,
    description: [
      "I create websites and applications using web languages.",
      "I build the content with HTML.",
      "I style the website with CSS.",
      "I build some functions with JavaScript.",
    ],
  },
  {
    title: "Branding Design",
    icon: UilPen,
    description: [
      "I convert your ideas into attractive designs that express you.",
      "I create logos.",
      "I create social media posts.",
      "I create stationery designs.",
    ],
  },
  {
    title: "Back-end Development",
    icon: UilDatabase,
    description: [
      "Database creation, integration, and management.",
      "Security settings and hack prevention.",
      "I build server-side software.",
      "Web server technologies.",
    ],
  },
];

const Service = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (index) => setActiveModal(index);
  const closeModal = () => setActiveModal(null);

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I can offer</span>

      <div className="services__container container grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div className="services__content" key={index}>
              <div>
                <Icon
                  size="32"
                  color="var(--first-color)"
                  className="services__icon"
                />
                <h3 className="services__title">
                  {service.title.split(" ")[0]} <br />
                  {service.title.split(" ").slice(1).join(" ")}
                </h3>
              </div>
              <span
                className="button button--flex button--small button--link services__button"
                onClick={() => openModal(index)}
              >
                View More{" "}
                <UilArrowRight
                  size="20"
                  color="var(--first-color)"
                  className="button__icon"
                />
              </span>

              {activeModal === index && (
                <div className="services__modal active-modal">
                  <div className="services__modal-content">
                    <h4 className="services__modal-title">
                      {service.title.split(" ")[0]} <br />
                      {service.title.split(" ").slice(1).join(" ")}
                    </h4>
                    <UilTimes
                      size="24"
                      color="var(--first-color)"
                      className="uil services__modal-close"
                      onClick={closeModal}
                    />
                    <ul className="services__modal-services grid">
                      {service.description.map((desc, i) => (
                        <li className="services__modal-service" key={i}>
                          <UilCheckCircle
                            size="24"
                            color="var(--first-color)"
                            className="services__modal-icon"
                          />
                          <p>{`\u00A0${desc}`}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
