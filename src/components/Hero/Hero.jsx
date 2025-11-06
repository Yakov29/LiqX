import Container from "../Container/Container";
import "./Hero.css";
import image from "../../images/logo.png";


import { FaArrowDown } from "react-icons/fa6";

const Hero = () => {
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

  return (
    <section className="hero">
      <Container>
        <div className="hero__box">
          <h1 className="hero__title" data-text='LiqX'>LiqX</h1>
          <p className="hero__description">Your secure messaging platform.</p>
          <button className="hero__button">Download</button>
        </div>
        <div className="hero__image">
          <img className="hero__image-png" src={image} alt="" />
        </div>
      </Container>
      <button onClick={scrollToAbout} className="hero__arrow">
        <FaArrowDown />
      </button>
    </section>
  );
};

export default Hero;
