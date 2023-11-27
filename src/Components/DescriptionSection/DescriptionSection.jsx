import React from "react";
import { DescriptionInfo } from "./DescriptionInfo";
import { Benefits } from "./Benefits";
import backgroundImg from "../../assets/GreyBackground.png";

export const DescriptionSection = () => {
  return (
    <div id="description">
      {/* Description */}
      <DescriptionInfo />
      <img src={backgroundImg} className="description_info-text-background" />
      {/* <div className="description_info-text-background"></div> */}
      {/* Benefits */}
      <Benefits />
    </div>
  );
};
