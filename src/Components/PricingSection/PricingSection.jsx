import React from "react";
import { PricingHeader } from "./PricingHeader";
import { PricingCards } from "./PricingCards";

export const PricingSection = () => {
  return (
    <div id="pricing">
      {/* PricingHeader */}
      <PricingHeader />
      <div className="basic-plan">
        <div className="basic-plan_content">
          <h2>Hasta 5 empleados Gratis</h2>
          <button className="normal-button">Registrate Gratis</button>
        </div>
      </div>
      {/* PricingCards */}
      <PricingCards />
      <div className="advanced-plan">
        <div className="advanced-plan_content">
        <h2>Más de 50 Empleados</h2>
        <button className="normal-button">Solicita Demo</button>
        </div>
      </div>
    </div>
  );
};
