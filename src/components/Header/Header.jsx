import Container from "../Container/Container";
import logo from "../../images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";
import { FaWindows, FaLinux, FaApple, FaAndroid } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

// Почтовый адрес для поддержки
const SUPPORT_EMAIL = "btc1941X@tutamail.com";

const Header = () => {
  const [platform, setPlatform] = useState("unknown");
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модалки
  const [copyStatus, setCopyStatus] = useState("Copy"); // Статус копирования
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.includes("Win")) setPlatform("windows");
    else if (userAgent.includes("Linux") && !userAgent.includes("Android")) setPlatform("linux");
    else if (userAgent.includes("Mac")) setPlatform("mac");
    else if (userAgent.includes("Android")) setPlatform("android");
  }, []);

  // Функция копирования в буфер обмена
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus("Copied!");
      // Сброс статуса через 1.5 секунды
      setTimeout(() => setCopyStatus("Copy"), 1500);
    } catch (err) {
      setCopyStatus("Failed!");
      console.error('Failed to copy text: ', err);
      setTimeout(() => setCopyStatus("Copy"), 1500);
    }
  };

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleScroll = (id) => {
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
  
  // Функция для открытия модалки (закрывает меню, если открыто)
  const openSupportModal = () => {
    setIsMenuOpen(false);
    setIsModalOpen(true);
    setCopyStatus("Copy"); // Сброс статуса при открытии
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
      <Container>
        <div className="header__logo">
          <img className="header__logo-img" src={logo} alt="" />
        </div>
        
        <ul className={`header__list ${isMenuOpen ? "header__list--open" : ""}`}>
          
          <button className="header__close-btn" onClick={toggleMenu}>
              <IoClose />
          </button>
          
          <li className="header__item">
            <button onClick={() => handleScroll("home")} className="header__link">Home</button>
          </li>
          <li className="header__item">
            <button onClick={() => handleScroll("about")} className="header__link">About</button>
          </li>
          
          {/* Кнопка "Support Me" - теперь открывает модалку */}
          <li className="header__item">
            <button 
                onClick={openSupportModal} 
                className="header__link"
            >
                Support Me
            </button>
          </li>

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
        
        <button className="header__burger" onClick={toggleMenu}>
            <GiHamburgerMenu />
        </button>
        
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

      {/* Мини-модальное окно */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
                <IoClose />
            </button>
            <h3 className="modal-title">Support Email</h3>
            
            <div className="modal-email-container">
                <span className="modal-email">{SUPPORT_EMAIL}</span>
                <button 
                    className={`modal-copy-btn ${copyStatus === 'Copied!' ? 'modal-copy-btn--success' : ''}`}
                    onClick={() => copyToClipboard(SUPPORT_EMAIL)}
                >
                    {copyStatus}
                </button>
            </div>
            
            <p className="modal-info">You can also use mailto: <a href={`mailto:${SUPPORT_EMAIL}`}>link</a></p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;