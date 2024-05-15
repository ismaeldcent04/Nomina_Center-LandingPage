import React from "react";
import RegisterModal from "../UI/RegisterModal";

export const PricingHeader = ({handleOpenRegisterModal}) => {

  return (
    <div className="pricing_header-container">
       <div className="plans_title-container">
        <h2>Planes</h2>
       
        {/* <div className="free-plan">
        <p>Hasta 5 empleados Gratis</p>
        <button onClick={handleOpenRegisterModal} className="button">Registrate Gratis</button>
        </div> */}
      </div>
      <h1>Escoge un plan que mejor se acomode a tus necesidades</h1>
      
    </div>
  );
};
