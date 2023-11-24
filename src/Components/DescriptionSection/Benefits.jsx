import React from "react";
import moneyImg from "../../assets/Money.png";
import worldImg from "../../assets/World.png";
import messageImg from "../../assets/Message.png";

export const Benefits = () => {
  return (
    <div className="benefits-container">
      <div className="benefit">
        <img src={moneyImg} />
        <p>10+  Años trabajando para mejorar la relación con tus empleados </p>
      </div>
      <div className="benefit">
        <img src={worldImg} />
        <p>Alrededor de 50+ empleados utilizando Nómina Center   </p>
      </div>
      <div className="benefit">
        <img src={messageImg} />
        <p>Alrededor de 30+ empresass utilizando Nómina Center </p>
      </div>
    </div>
  );
};
