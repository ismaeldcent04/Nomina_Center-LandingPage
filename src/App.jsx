import { useState } from "react";
import { HomeSection } from "./Components/HomeSection/HomeSection";
import "../index.css";
import { DescriptionSection } from "./Components/DescriptionSection/DescriptionSection";
import { PricingSection } from "./Components/PricingSection/PricingSection";
import { TestimonialSection } from "./Components/TestimonialSection/TestimonialSection";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <main>
        {/* HOME SECTION */}
        <HomeSection />
        {/* DESCRIPTION SECTION  */}
        {/* <DescriptionSection /> */}
        {/* PRICING SECTION  */}
        {/* <PricingSection /> */}
        {/* TESTIMONIALS SECTION */}
        {/* <TestimonialSection /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
