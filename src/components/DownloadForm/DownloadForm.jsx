import React, { useState } from "react";
import Container from "../Container/Container";
import { FaDownload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import "./DownloadForm.css";

import { FaWindows, FaLinux, FaApple, FaAndroid } from "react-icons/fa";

const DownloadForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const download = [
    {
      name: "For Windows 10/11",
      icon: <FaWindows className="download__icon" />,
      color: "#0078D6",
      description:
        "The desktop version of LiqX for Windows 10 and 11 — a fast, lightweight, and modern messenger focused on privacy and minimalism.",
      available: true,
      downloadLink: "https://github.com/Yakov29/LiqX/releases/download/v1.9.4.1/LiqX_x64.msi",
      buttonText: "Download .msi",
    },
    {
      name: "For Linux",
      icon: <FaLinux className="download__icon" />,
      description: "Currently unavailable. Linux support is coming later.",
      available: false,
      downloadLink: "#",
    },
    {
      name: "For macOS",
      icon: <FaApple className="download__icon" />,
      color: "#A2AAAD",
      description:
        "Currently unavailable. macOS version is planned for a future release.",
      available: false,
      downloadLink: "#",
    },
    {
      name: "For Android",
      icon: <FaAndroid className="download__icon" />,
      color: "#3DDC84",
      description:
        "Not available yet — Android version is still in development lol.",
      available: false,
      downloadLink: "#",
    },
  ];

  const handleDownload = (downloadLink) => {
    setIsModalOpen(true);
    window.location.href = downloadLink;
  };

  return (
    <section className="download">
      <Container>
        <h2 className="download__title">
          Download for your device <FaDownload className="download__title-icon" />
        </h2>
        <ul className="download__list">
          {download.map((item) => {
            const buttonText = item.available
              ? item.buttonText || "Download"
              : "Unavailable";
            const isDisabled = !item.available;
            const buttonClass = `download__button ${
              isDisabled ? "download__button--disabled" : ""
            }`;

            return (
              <li className="download__item" key={item.name}>
                {item.color
                  ? React.cloneElement(item.icon, { style: { color: item.color } })
                  : item.icon}
                <h4 className="download__name">{item.name}</h4>
                {item.available ? (
                  <button
                    onClick={() => handleDownload(item.downloadLink)}
                    className={buttonClass}
                  >
                    {buttonText}
                  </button>
                ) : (
                  <button className={buttonClass} disabled={isDisabled}>
                    {buttonText}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </Container>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              <IoClose />
            </button>
            <h3 className="modal-title">Thank you for downloading!</h3>
            <p className="modal-info">Your download has started.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default DownloadForm;