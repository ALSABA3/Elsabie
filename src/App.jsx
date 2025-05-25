import "./App.css";
import { useEffect } from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Service from "./Components/Service";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Demos from "./Components/Demos";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        const navLink = document.querySelector(
          `.nav__menu a[href*="${sectionId}"]`
        );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink?.classList.add("active-link");
        } else {
          navLink?.classList.remove("active-link");
        }
      });
    };

    window.addEventListener("scroll", scrollActive);

    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Service />
        <Demos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
