import React from "react";
import backgroundImg from "../../assets/Background.png";
export const ActionCall = () => {
  return (
    <div className="actionCall-container">
      <img id="background-image" src={backgroundImg} />
      <div className="actionCall_content-container">
        <div className="actionCall-content-text">
          <h1 id="actionCall-header">Comenzar la nomina.</h1>
          <p>
            Cuenta con múltiples herramientas relacionadas de manejo de personal
            que te facilita la relación con tus colaboradores y cuenta con todos
            los reportes/archivos que requieren las instituciones
            gubernamentales a las empresas.
          </p>
        </div>
        <button>Iniciar Sesion/Registrarse</button>
      </div>
    </div>
  );
};
