import { useEffect, useState } from "react";
import NavItems from "./NavItems";

import UilEstate from "@iconscout/react-unicons/icons/uil-estate";
import UilUser from "@iconscout/react-unicons/icons/uil-user";
import UilFileAlt from "@iconscout/react-unicons/icons/uil-file-alt";
import UilBriefcase from "@iconscout/react-unicons/icons/uil-briefcase";
import UilScenery from "@iconscout/react-unicons/icons/uil-scenery";
import UilMessage from "@iconscout/react-unicons/icons/uil-message";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";
import UilApps from "@iconscout/react-unicons/icons/uil-apps";
import UilMoon from "@iconscout/react-unicons/icons/uil-moon";
import UilSun from "@iconscout/react-unicons/icons/uil-sun";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("selected-theme") === "dark";
  });

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  const toggleTheme = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);

    if (isDark) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("selected-theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("selected-theme", "light");
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [darkMode]);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Elsabie
        </a>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            <NavItems
              point="home"
              onClick={handleLinkClick}
              icon={
                <UilEstate
                  size="24"
                  color={darkMode ? "#fff" : ""}
                  className="nav__icon"
                />
              }
            />
            <NavItems
              point="about"
              onClick={handleLinkClick}
              icon={
                <UilUser
                  size="24"
                  color={darkMode ? "#fff" : ""}
                  className="nav__icon"
                />
              }
            />
            <NavItems
              point="skills"
              onClick={handleLinkClick}
              icon={
                <UilFileAlt
                  size="24"
                  color={darkMode ? "#fff" : ""}
                  className="nav__icon"
                />
              }
            />
            <NavItems
              point="services"
              onClick={handleLinkClick}
              icon={
                <UilBriefcase
                  size="24"
                  color={darkMode ? "#fff" : ""}
                  className="nav__icon"
                />
              }
            />
            <NavItems
              point="portfolio"
              onClick={handleLinkClick}
              icon={
                <UilScenery
                  size="24"
                  color={darkMode ? "#fff" : ""}
                  className="nav__icon"
                />
              }
            />
            <NavItems
              point="contact"
              onClick={handleLinkClick}
              icon={
                <UilMessage
                  size="24"
                  color={darkMode ? "#fff" : ""}
                  className="nav__icon"
                />
              }
            />
            <li className="nav__dark-mode" onClick={toggleTheme}>
              <a className="nav__link">
                <span className="nav__name">Theme</span>
                {darkMode ? (
                  <UilSun size="24" color="#fff" className="nav__icon" />
                ) : (
                  <UilMoon size="24" className="nav__icon" />
                )}
              </a>
            </li>
            <li>
              <UilTimes
                size="24"
                color={darkMode ? "#fff" : ""}
                className="nav__close"
                id="nav-close"
                onClick={() => setShowMenu(false)}
              />
            </li>
          </ul>
        </div>

        <div className="nav__btns">
          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => setShowMenu(true)}
          >
            <UilApps size="24" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
