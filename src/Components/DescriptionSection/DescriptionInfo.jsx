import React from "react";
import computerImg from "../../assets/Computerpng.png";

export const DescriptionInfo = () => {
  return (
    <div className="description_info-container">
      <img src={computerImg} />
      <div className="description_info-text">
        <h2>
          Nomina<span>Center</span>
          <br /> !Innovar para crecer!
        </h2>

        <p>
          La innovación es lo que distingue a un lider de los demás, por ello es
          el momento de dar el paso y colocar tu empresa un nivel más alto.
          Forma parte de la familia y organicemos tu Nomina.
        </p>
        <button className="button">Contáctanos</button>
      </div>
    </div>
  );
};
