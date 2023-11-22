import React from "react";
import integralImg from "../../assets/Integral.png";
import rentableImg from "../../assets/Rentable.png";
import eficienteImg from "../../assets/Eficiente.png";
import seguroImg from "../../assets/Seguro.png";

export const HomeDescription = () => {
  return (
    <div className="home_description-container">
      <div className="feature">
        <div className="title">
          <img src={integralImg} />
          <h3>Integral</h3>
        </div>
        <p>
          Gestiona todas las áreas de tu negocio desde un único entorno con una
          ficha única de cliente.
        </p>
      </div>
      <div className="feature">
        <div className="title">
          <img src={rentableImg} />
          <h3>Rentable</h3>
        </div>
        <p>
          Ahorra tiempo y mejora la oferta de servicios de valor a tus clientes
          con total seguridad
        </p>
      </div>
      <div className="feature">
        <div className="title">
          <img src={eficienteImg} />
          <h3>Eficiente</h3>
        </div>
        <p>
          Automatiza tareas, realiza procesos masivos y agiliza la gestión con
          la Administración con la presentación directa.
        </p>
      </div>
      <div className="feature">
        <div className="title">
          <img src={seguroImg} />
          <h3>Seguro</h3>
        </div>
        <p>
          Más de 15.000 horas de I+D cada año garantizan su  adecuación a los
          cambios normativos.
        </p>
      </div>
    </div>
  );
};
