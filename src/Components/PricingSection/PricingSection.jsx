import React, { useState } from "react";
import { PricingHeader } from "./PricingHeader";
import { PricingCards } from "./PricingCards";
import RegisterModal from "../UI/RegisterModal";

export const PricingSection = () => {

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
    <div id="pricing">
      {/* PricingHeader */}
      <PricingHeader handleOpenRegisterModal={handleOpenRegisterModal} />
      {/* <div className="basic-plan">
        <div className="basic-plan_content">
          <h2>Hasta 5 empleados Gratis</h2>
          <button onClick={handleOpenRegisterModal} className="normal-button">Registrate Gratis</button>
        </div>
      </div> */}
      {/* PricingCards */}
      <PricingCards />
      {/* <div className="advanced-plan">
        <div className="advanced-plan_content">
        <h2>Más de 50 Empleados</h2>
        <button className="normal-button">Solicita Demo</button>
        </div>
      </div> */}

    <RegisterModal  show={showRegisterModal} handleClose={handleCloseRegisterModal} handleOpenLogin={handleOpenLoginModal}/>
    </div>
  );
};
