import React from "react";
import { TestimonialsCarrouselItem } from "./TestimonialsCarrouselItem";
import { ClientsPictures } from "./ClientsPictures";
import { ActionCall } from "./ActionCall";
import { TestimonialsCarrousel } from "./TestimonialsCarrousel";

export const TestimonialSection = () => {
  return (
    <div id="testimonials">
      <h1>Historias de éxito</h1>
      <TestimonialsCarrousel />
      {/* <TestimonialsCarrouselItem /> */}
      <ClientsPictures />
      <ActionCall />
    </div>
  );
};
