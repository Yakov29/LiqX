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
    },
    {
      name: "For Linux",
      icon: <FaLinux className="download__icon" />,
      description: "Currently unavailable. Linux support is coming later.",
      available: false,
    },
    {
      name: "For macOS",
      icon: <FaApple className="download__icon" />,
      description:
        "Currently unavailable. macOS version is planned for a future release.",
      available: false,
    },
    {
      name: "For Android",
      icon: <FaAndroid className="download__icon" />,
      description:
        "Not available yet — Android version is still in development lol.",
      available: false,
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

            return (
              <li className="download__item" key={item.name}>
                {item.icon}
                <h4 className="download__name">{item.name}</h4>
                
                <button 
                  className="download__button"
                  disabled={isDisabled} 
                >
                  {buttonText}
                </button>
                
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default DownloadForm;