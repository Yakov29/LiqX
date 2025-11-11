import Container from "../Container/Container";
import { FaDownload } from "react-icons/fa6";

import "./DownloadForm.css"




import { FaWindows } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";

const DownloadForm = () => {
  const download = [
    {
      name: "For Windows 10/11",
      icon: <FaWindows className="download__icon" />,
      description:
        "The desktop version of LiqX for Windows 10 and 11 — a fast, lightweight, and modern messenger focused on privacy and minimalism.",
      available: true,
      // Добавлена ссылка для скачивания Windows
      downloadLink: "https://github.com/Yakov29/LiqX/releases/download/v1.9.4.1/LiqX_x64.msi", 
    },
    {
      name: "For Linux",
      icon: <FaLinux className="download__icon" />,
      description: "Currently unavailable. Linux support is coming later.",
      available: false,
      downloadLink: "#", // Заглушка для недоступных версий
    },
    {
      name: "For macOS",
      icon: <FaApple className="download__icon" />,
      description:
        "Currently unavailable. macOS version is planned for a future release.",
      available: false,
      downloadLink: "#", // Заглушка для недоступных версий
    },
    {
      name: "For Android",
      icon: <FaAndroid className="download__icon" />,
      description:
        "Not available yet — Android version is still in development lol.",
      available: false,
      downloadLink: "#", // Заглушка для недоступных версий
    },
  ];

  return (
    <section className="download">
      <Container>
        <h2 className="download__title">Download for your device <FaDownload className="download__title-icon"/></h2>
        {/* <p className="download__description">Select your version</p> */}
        <ul className="download__list">
          {download.map((item) => {
            const buttonText = item.available ? "Download" : "Unavailable";
            const isDisabled = !item.available;

            // Определяем класс: если isDisabled === true, добавляем 'download__button--disabled'
            const buttonClass = `download__button ${isDisabled ? 'download__button--disabled' : ''}`;

            return (
              <li className="download__item" key={item.name}>
                {item.icon}
                <h4 className="download__name">{item.name}</h4>
                
                {/* Используем тег <a> вместо <button> для ссылки, если доступно */}
                {/* Если item.available, используем <a> с href, иначе <div> с классом кнопки, но disabled */}
                {item.available ? (
                  <a
                    href={item.downloadLink}
                    className={buttonClass}
                    // Добавлено target="_blank" и rel="noopener noreferrer" для внешних ссылок (по желанию)
                    // target="_blank" 
                    // rel="noopener noreferrer"
                  >
                    {buttonText}
                  </a>
                ) : (
                  <button 
                    className={buttonClass}
                    disabled={isDisabled} 
                  >
                    {buttonText}
                  </button>
                )}
                
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default DownloadForm;