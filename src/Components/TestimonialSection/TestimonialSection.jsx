import React from "react";
import { TestimonialsCarrousel } from "./TestimonialsCarrousel";
import { ClientsPictures } from "./ClientsPictures";
import { ActionCall } from "./ActionCall";

export const TestimonialSection = () => {
  return (
    <div id="testimonials">
      <h1>Historias de exito</h1>
      <TestimonialsCarrousel />
      <ClientsPictures />
      <ActionCall />
    </div>
  );
};
