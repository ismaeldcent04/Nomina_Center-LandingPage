import React from "react";
import { PricingHeader } from "./PricingHeader";
import { PricingCards } from "./PricingCards";

export const PricingSection = () => {
  return (
    <div id="pricing">
      {/* PricingHeader */}
      <PricingHeader />
      {/* PricingCards */}
      <PricingCards />
    </div>
  );
};
