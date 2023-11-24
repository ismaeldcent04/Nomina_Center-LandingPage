import React from "react";
import cciLogo from "../../assets/CCI.png";
import papaterraLogo from "../../assets/HermanosPapaterra.png";
import hidalgosLogo from "../../assets/Hidalgos.png";
import cruzrojaLogo from "../../assets/Cruz-Roja.png";
import elnuevodiarioLogo from "../../assets/ElnuevoDiario.png";

export const ClientsPictures = () => {
  return (
    <div className="clients_Pictures-container">
      <img src={papaterraLogo} />
      <img src={hidalgosLogo} />
      <img src={cruzrojaLogo} />
      <img src={cciLogo} />
      <img src={elnuevodiarioLogo} />
    </div>
  );
};
