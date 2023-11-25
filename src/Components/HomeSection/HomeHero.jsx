import React from "react";
import laptopImg from "../../assets/Laptop.png";
import nominaImg from "../../assets/Nominacenter.png";

export const HomeHero = () => {
  return (
    <div className="hero-container">
      <div className="hero-description">
        <h1>Automatiza tus procesos de RRHH</h1>
        <p>
          Nomina center es un sistema de pagos a empleados, intuitivo, pero a la
          vez poderoso que te asistirá con todo lo relacionado a los cálculos de
          ley de todas los ingresos o deducciones del personal y la ejecución de
          su pago.
        </p>
        <div className="button">
          <a href="">Solicitar Sistema</a>
        </div>
      </div>
      <div className="hero-images">
        <img src={laptopImg} className="image first" />
      </div>
    </div>
  );
};
