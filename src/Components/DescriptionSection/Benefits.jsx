import React from "react";
import moneyImg from "../../assets/Money.png";
import worldImg from "../../assets/World.png";
import messageImg from "../../assets/Message.png";

export const Benefits = () => {
  return (
    <div className="benefits-container">
      <div className="benefit">
        <img src={moneyImg} />
        <p>+25 Años trabajando junto a empresas dominicanas y sus nominas </p>
      </div>
      <div className="benefit">
        <img src={worldImg} />
        <p>Alrededor de 5000 empleados son actualmente manejados a traves de nuestro portal   </p>
      </div>
      <div className="benefit">
        <img src={messageImg} />
        <p>Mas de 50 empresas utilizan NominaCenter.com para manejar sus pagos a empleados. </p>
      </div>
    </div>
  );
};
