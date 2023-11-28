import React from "react";
import laptopImg from "../../assets/Laptop.png";
import nominaImg from "../../assets/Nominacenter.png";
import backgroundImg from "../../assets/Top-Background.png";
import secondbackgroundImg from "../../assets/Second-Top-Background.png";
export const HomeHero = () => {
  return (
    <div className="hero-container">
      <img src={backgroundImg} className="background-container" />
      <img src={secondbackgroundImg} className="background-container second" />
      <div className="hero-description">
        <div>
          <h1>Automatiza tus procesos de RRHH</h1>
          <p>
            Nomina center es un sistema de pagos a empleados, intuitivo, pero a
            la vez poderoso que te asistirá con todo lo relacionado a los
            cálculos de ley de todas los ingresos o deducciones del personal y
            la ejecución de su pago.
          </p>
          <div className="button">
            <a href="">Solicitar Sistema</a>
          </div>
        </div>
        <div className="hero-images">
          <img src={laptopImg} className="image first" />
        </div>
      </div>
    </div>
  );
};
