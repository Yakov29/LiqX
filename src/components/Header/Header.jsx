import Container from "../Container/Container";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn('Элемент с ID "about" не найден на странице.');
    }
  };
   const scrollToDevelopers = () => {
    const developerSection = document.getElementById("developer");

    if (developerSection) {
      developerSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn('Элемент с ID "developer" не найден на странице.');
    }
  };
  const scrollToHome = () => {
    const homeection = document.getElementById("home");

    if (homeection) {
      homeection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn('Элемент с ID "home не найден на странице.');
    }
  };
  return (
    <header className="header">
      <Container>
        <div className="header__logo">
          <img className="header__logo-img" src={logo} alt="" />
        </div>
        <ul className="header__list">
          <li className="header__item">
            <Link onClick={scrollToHome} className="header__link">Home</Link>
          </li>
          <li className="header__item">
            <Link onClick={scrollToAbout} className="header__link">About</Link>
          </li>
          <li className="header__item">
            <Link onClick={scrollToDevelopers} className="header__link">Developers</Link>
          </li>
        </ul>

        <button className="header__button">Download</button>
      </Container>
    </header>
  );
};

export default Header;
