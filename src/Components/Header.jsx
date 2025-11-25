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

const ICON_SIZE = 24;
const THEME_STORAGE_KEY = "selected-theme";
const DARK_THEME_CLASS = "dark-theme";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem(THEME_STORAGE_KEY) === "dark";
  });

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  const toggleTheme = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);

    if (isDark) {
      document.body.classList.add(DARK_THEME_CLASS);
      localStorage.setItem(THEME_STORAGE_KEY, "dark");
    } else {
      document.body.classList.remove(DARK_THEME_CLASS);
      localStorage.setItem(THEME_STORAGE_KEY, "light");
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add(DARK_THEME_CLASS);
    } else {
      document.body.classList.remove(DARK_THEME_CLASS);
    }
  }, [darkMode]);

  return (
    <header className="header" id="header">
      <nav className="nav container nav__container">
        <a href="/" className="nav__logo">
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
                  size={String(ICON_SIZE)}
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
                  size={String(ICON_SIZE)}
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
                  size={String(ICON_SIZE)}
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
                  size={String(ICON_SIZE)}
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
                  size={String(ICON_SIZE)}
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
                  size={String(ICON_SIZE)}
                  color={darkMode ? "#fff" : ""}
                  className="nav__icon"
                />
              }
            />
            {/* <li className="nav__dark-mode" onClick={toggleTheme}>
              <a className="nav__link">
                <span className="nav__name">Theme</span>
                {darkMode ? (
                  <UilSun
                    size={String(ICON_SIZE)}
                    color="#fff"
                    className="nav__icon"
                  />
                ) : (
                  <UilMoon size={String(ICON_SIZE)} className="nav__icon" />
                )}
              </a>
            </li> */}
            <NavItems
              point="theme"
              onClick={toggleTheme}
              icon={
                darkMode ? (
                  <UilSun
                    size={String(ICON_SIZE)}
                    color="#fff"
                    className="nav__icon"
                  />
                ) : (
                  <UilMoon size={String(ICON_SIZE)} className="nav__icon" />
                )
              }
            />
            <li>
              <UilTimes
                size={String(ICON_SIZE)}
                color={darkMode ? "#fff" : ""}
                className="nav__close"
                id="nav-close"
                onClick={() => setShowMenu(false)}
              />
            </li>
          </ul>
        </div>
        <div>
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
