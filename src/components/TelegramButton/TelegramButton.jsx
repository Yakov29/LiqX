import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import "./TelegramButton.css";

const TELEGRAM_URL = "https://t.me/liqxcommunity";

const TelegramButton = () => {
  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="telegram-fl-button"
      aria-label="Telegram Community"
    >
      <FaTelegramPlane />
    </a>
  );
};

export default TelegramButton;