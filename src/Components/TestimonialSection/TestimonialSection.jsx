import React from "react";
import { TestimonialsCarrouselItem } from "./TestimonialsCarrouselItem";
import { ClientsPictures } from "./ClientsPictures";
import { ActionCall } from "./ActionCall";
import { TestimonialsCarrousel } from "./TestimonialsCarrousel";

export const TestimonialSection = () => {
  return (
    <div id="testimonials">
      <h1>Nuestros Clientes</h1>
      <p className="clients-description">Estos son algunas de las empresas que utilizan nuestros servicios para manejar sus nominas y pagos a sus empleados.</p>
      {/* <TestimonialsCarrousel /> */}
      {/* <TestimonialsCarrouselItem /> */}
      <ClientsPictures />
      <ActionCall />
    </div>
  );
};
