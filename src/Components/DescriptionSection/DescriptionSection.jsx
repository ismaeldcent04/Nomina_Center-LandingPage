import React from "react";
import { DescriptionInfo } from "./DescriptionInfo";
import { Benefits } from "./Benefits";

export const DescriptionSection = () => {
  return (
    <div id="description">
      {/* Description */}
      <DescriptionInfo />
      <div className="description_info-text-background"></div>
      {/* Benefits */}
      <Benefits />
    </div>
  );
};
