import Container from "../Container/Container";
import "./Hero.css";
import { FaWindows, FaTelegramPlane } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import { useEffect, useState } from "react";

const TELEGRAM_URL = "https://t.me/liqxcommunity";

const Hero = () => {
  const [platform, setPlatform] = useState("unknown");

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.includes("Win")) setPlatform("windows");
    else if (userAgent.includes("Linux") && !userAgent.includes("Android")) setPlatform("linux");
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
    }
  };

  const renderButtonContent = () => {
    if (platform === "windows") {
      return <>Download <FaWindows /></>;
    }
    return "Download";
  };

  return (
    <section className="hero" id="home">
      <Container>
        <div className="hero__box">
          <h1 className="hero__title" data-text="LiqX">LiqX</h1>
          <p className="hero__description">Your secure messaging platform.</p>
          <div className="hero__buttons">
            <button
              className="hero__button"
              onClick={() => {
                window.location.href = "/download";
              }}
            >
              {renderButtonContent()}
            </button>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__button hero__button--telegram"
            >
              Join <FaTelegramPlane />
            </a>
          </div>
          <p className="hero__community-subtitle">Join our community!</p>
        </div>
      </Container>
      <button onClick={scrollToAbout} className="hero__arrow">
        <FaArrowDown />
      </button>
    </section>
  );
};

export default Hero;