import Container from "../Container/Container";
import "./Hero.css";
import image from "../../images/logo.png";
import { FaWindows, FaLinux, FaApple, FaAndroid } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Hero = () => {
  const [platform, setPlatform] = useState("unknown");

  useEffect(() => {
    const userAgent = window.navigator.userAgent;

    if (userAgent.includes("Win")) setPlatform("windows");
    else if (userAgent.includes("Linux") && !userAgent.includes("Android"))
      setPlatform("linux");
    else if (userAgent.includes("Mac")) setPlatform("mac");
    else if (userAgent.includes("Android")) setPlatform("android");
  }, []);

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

  const renderButtonContent = () => {
    switch (platform) {
      case "windows":
        return (
          <>
            Download <FaWindows />
          </>
        );
      case "linux":
        return (
          <>
            Not supported <FaLinux />
          </>
        );
      case "mac":
        return (
          <>
            Not supported <FaApple />
          </>
        );
      case "android":
        return (
          <>
            Not supported <FaAndroid />
          </>
        );
      default:
        return "Detecting...";
    }
  };

  const isDisabled = ["linux", "mac", "android"].includes(platform);

  return (
    <section className="hero" id="home">
      <Container>
        <div className="hero__box">
          <h1 className="hero__title" data-text="LiqX">
            LiqX
          </h1>
          <p className="hero__description">Your secure messaging platform.</p>
          <button
            className={`hero__button ${isDisabled ? "hero__button--disabled" : ""}`}
            disabled={isDisabled}
          >
            {renderButtonContent()}
          </button>
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
