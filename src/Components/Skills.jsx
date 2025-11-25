import { useState } from "react";
import UilBracketsCurly from "@iconscout/react-unicons/icons/uil-brackets-curly";
import UilServerNetwork from "@iconscout/react-unicons/icons/uil-server-network";
import UilDesktop from "@iconscout/react-unicons/icons/uil-desktop";
import UilSwatchbook from "@iconscout/react-unicons/icons/uil-swatchbook";
import UilAngleDown from "@iconscout/react-unicons/icons/uil-angle-down";

const ICON_SIZE = 32;
const ARROW_ICON_SIZE = 32;

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggleSkill = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const SKILL_SECTIONS = [
    {
      title: "Front-end Developer",
      subtitle: "+2 year experience",
      icon: UilBracketsCurly,
      skills: [
        { name: "HTML", percent: 90, barClass: "skills__html" },
        { name: "CSS", percent: 80, barClass: "skills__css" },
        { name: "Bootstrap", percent: 70, barClass: "skills__bootstrap" },
        { name: "JavaScript", percent: 80, barClass: "skills__js" },
        { name: "React.js", percent: 80, barClass: "skills__react" },
      ],
    },
    {
      title: "Back-end Developer",
      subtitle: "Recently",
      icon: UilServerNetwork,
      skills: [
        { name: "Node Js", percent: 70, barClass: "skills__node" },
        { name: "express", percent: 80, barClass: "skills__express" },
        { name: "Sql", percent: 90, barClass: "skills__sql" },
        { name: "MongoDb", percent: 70, barClass: "skills__mongoDb" },
      ],
    },
    {
      title: "Software Development",
      subtitle: "+1 year experience",
      icon: UilDesktop,
      skills: [
        { name: "Python", percent: 90, barClass: "skills__python" },
        { name: "C++", percent: 90, barClass: "skills__cpp" },
        { name: "C#", percent: 80, barClass: "skills__cs" },
        { name: "Java", percent: 70, barClass: "skills__java" },
      ],
    },
    {
      title: "Designer",
      subtitle: "More than 2 years",
      icon: UilSwatchbook,
      skills: [
        { name: "Photoshop", percent: 90, barClass: "skills__photoshop" },
        { name: "Illustrator", percent: 60, barClass: "skills__illustartor" },
      ],
    },
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        {SKILL_SECTIONS.map((section, index) => {
          const Icon = section.icon;
          return (
            <div
              className={`skills__content ${
                activeIndex === index ? "skills__open" : "skills__close"
              }`}
              key={index}
            >
              <button
                type="button"
                className="skills__header"
                onClick={() => handleToggleSkill(index)}
                aria-expanded={activeIndex === index}
              >
                <Icon
                  size={String(ICON_SIZE)}
                  color="var(--first-color)"
                  className="skills__icon"
                />
                <div>
                  <h1 className="skills__title">{section.title}</h1>
                  <span className="skills__subtitle">{section.subtitle}</span>
                </div>
                <UilAngleDown
                  size={String(ARROW_ICON_SIZE)}
                  color="var(--first-color)"
                  className="skills__arrow"
                />
              </button>

              <div className="skills__list grid">
                {section.skills.map((skill, idx) => (
                  <div className="skills__data" key={idx}>
                    <div className="skills__titles">
                      <h3 className="skills__name">{skill.name}</h3>
                      <span className="skills__number">{skill.percent}%</span>
                    </div>
                    <div className="skills__bar">
                      <span
                        className={`skills__percantage ${skill.barClass}`}
                      ></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
