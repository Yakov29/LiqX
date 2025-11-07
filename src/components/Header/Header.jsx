import Container from "../Container/Container";
import logo from "../../images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";
import { FaWindows, FaLinux, FaApple, FaAndroid } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5"; // Импортируем иконку для закрытия


const Header = () => {
  const [platform, setPlatform] = useState("unknown");
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.includes("Win")) setPlatform("windows");
    else if (userAgent.includes("Linux") && !userAgent.includes("Android")) setPlatform("linux");
    else if (userAgent.includes("Mac")) setPlatform("mac");
    else if (userAgent.includes("Android")) setPlatform("android");
  }, []);

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleScroll = (id) => {
    // Закрываем меню после клика
    setIsMenuOpen(false); 
    
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => scrollToId(id), 100);
    } else {
      scrollToId(id);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderButtonContent = () => {
    switch (platform) {
      case "windows":
        return <>Download <FaWindows /></>;
      case "linux":
        return <>Not supported <FaLinux /></>;
      case "mac":
        return <>Not supported <FaApple /></>;
      case "android":
        return <>Not supported <FaAndroid /></>;
      default:
        return "Detecting...";
    }
  };

  const isDisabled = ["linux", "mac", "android"].includes(platform);

  return (
    <header className="header">
      {/* Container должен быть position: relative для корректной работы 
        position: absolute внутри него, если вы хотите, чтобы меню было 
        абсолютным относительно контейнера хедера.
      */}
      <Container>
        <div className="header__logo">
          <img className="header__logo-img" src={logo} alt="" />
        </div>
        
        <ul className={`header__list ${isMenuOpen ? "header__list--open" : ""}`}>
          
          {/* 1. Кнопка закрытия (Крестик) внутри меню */}
          <button className="header__close-btn" onClick={toggleMenu}>
             <IoClose />
          </button>
          
          <li className="header__item">
            <button onClick={() => handleScroll("home")} className="header__link">Home</button>
          </li>
          <li className="header__item">
            <button onClick={() => handleScroll("about")} className="header__link">About</button>
          </li>
          <li className="header__item">
            <button onClick={() => handleScroll("developers")} className="header__link">Developers</button>
          </li>
          {/* Дублируем кнопку Download внутрь меню для мобильного вида */}
          <li className="header__item header__item--mobile-button">
             <button
              className={`header__button ${isDisabled ? "header__button--disabled" : ""}`}
              disabled={isDisabled}
              onClick={() => {
                if (!isDisabled) window.location.href = "/download";
                setIsMenuOpen(false);
              }}
            >
              {renderButtonContent()}
            </button>
          </li>
        </ul>
        
        {/* 2. Бургер-кнопка всегда показывает только иконку бургера */}
        <button className="header__burger" onClick={toggleMenu}>
            <GiHamburgerMenu />
        </button>
        
        {/* Основная кнопка, которая обычно скрывается на мобильном */}
        <button
          className={`header__button header__button--desktop ${isDisabled ? "header__button--disabled" : ""}`}
          disabled={isDisabled}
          onClick={() => {
            if (!isDisabled) window.location.href = "/download";
          }}
        >
          {renderButtonContent()}
        </button>
      </Container>
    </header>
  );
};

export default Header;