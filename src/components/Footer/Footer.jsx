import Container from "../Container/Container";
import logo from "../../images/logo.png";
import { useEffect, useState } from "react"; // Импортируем хуки
import { FaWindows, FaLinux, FaApple, FaAndroid } from "react-icons/fa"; // Импортируем иконки

import "./Footer.css";

const Footer = () => {
  // Логика определения платформы (скопирована из Header)
  const [platform, setPlatform] = useState("unknown");

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.includes("Win")) setPlatform("windows");
    else if (userAgent.includes("Linux") && !userAgent.includes("Android"))
      setPlatform("linux");
    else if (userAgent.includes("Mac")) setPlatform("mac");
    else if (userAgent.includes("Android")) setPlatform("android");
  }, []);

  // Функция рендеринга контента кнопки (скопирована из Header)
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

  // Проверка состояния кнопки (скопирована из Header)
  const isDisabled = ["linux", "mac", "android"].includes(platform);

  return (
    <footer className="footer">
      <Container>
        <div className="footer__content-wrapper">
          <div className="footer__logo">
            <img className="footer__logo-img" src={logo} alt="" />
          </div>

          {/* Добавленная кнопка Download */}
          <button
            className={`footer__button ${
              isDisabled ? "footer__button--disabled" : ""
            }`}
            disabled={isDisabled}
            onClick={() => {
              if (!isDisabled) window.location.href = "/download";
            }}
          >
            {renderButtonContent()}
          </button>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;