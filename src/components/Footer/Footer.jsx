import Container from "../Container/Container";
import logo from "../../images/logo.png";
import { useEffect, useState } from "react";
import { FaWindows, FaTelegramPlane } from "react-icons/fa";

import "./Footer.css";

const TELEGRAM_URL = "https://t.me/liqxcommunity";

const Footer = () => {
  const [platform, setPlatform] = useState("unknown");

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.includes("Win")) setPlatform("windows");
    else if (userAgent.includes("Linux") && !userAgent.includes("Android"))
      setPlatform("linux");
    else if (userAgent.includes("Mac")) setPlatform("mac");
    else if (userAgent.includes("Android")) setPlatform("android");
  }, []);

  const renderButtonContent = () => {
    if (platform === "windows") {
      return <>Download <FaWindows /></>;
    }
    return "Download";
  };

  return (
    <footer className="footer">
      <Container>
        <div className="footer__content-wrapper">
          <div className="footer__logo">
            <img className="footer__logo-img" src={logo} alt="" />
          </div>

          <div className="footer__buttons">
            <button
              className="footer__button"
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
              className="footer__button footer__button--telegram"
            >
              Join <FaTelegramPlane />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;