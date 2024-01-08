import React from "react";
import backgroundImg from "../../assets/mobileSection-background.png";
import logoImg from "../../assets/LOGO NOMINA CENTER (.com).png";
import notificationIcon from "../../assets/Notification.png";
export const MobileAppSection = () => {
  return (
    <div id="mobileApp">
      <img src={backgroundImg} className="mobileApp-background" />
      <div className="mobileSection-content">
        <img src={logoImg} id="mobileSection-logo" />
        <h1>
          MOBILE APP <br /> COMING SOON!
        </h1>
        <a
          href="https://www.instagram.com/nominacenter"
          target="_blank"
          className="notification-button"
        >
          Activa la notificación
          <img id="notification-icon" src={notificationIcon} />
        </a>
      </div>
    </div>
  );
};
