import React from "react";
import cciLogo from "../../assets/teriyaky.png";
import papaterraLogo from "../../assets/Hermanos Papaterra.jpg";
import hidalgosLogo from "../../assets/Los Hidalgos Farmacia.png";
import cruzrojaLogo from "../../assets/Cruz Roja logo peque.png";
import elnuevodiarioLogo from "../../assets/Nuevo Diario.png";

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
