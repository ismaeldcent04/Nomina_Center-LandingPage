import React, { useState } from "react";
import laptopImg from "../../assets/Laptop.png";
import nominaImg from "../../assets/Nominacenter.png";
import backgroundImg from "../../assets/Top-Background.png";
import secondbackgroundImg from "../../assets/Second-Top-Background.png";
import RegisterModal from "../UI/RegisterModal";
export const HomeHero = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleOpenRegisterModal=()=>{
    setShowRegisterModal(true);
  }

  const handleCloseRegisterModal =()=>{
    setShowRegisterModal(false);
  }

  const handleOpenLoginModal= ()=>{
    window.location.href = "http://66.94.104.127:2030/Login.aspx";
  }
  return (
    <div className="hero-container">
      <RegisterModal show={showRegisterModal} handleClose={handleCloseRegisterModal} handleOpenLogin={handleOpenLoginModal} plan={"Plan Gratis"}/>
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
          
          <button  onClick={handleOpenRegisterModal} className="button">Registrate Gratis</button>
         
        </div>
        <div className="hero-images">
          <img src={laptopImg} className="image first" />
        </div>
      </div>
    </div>
  );
};
