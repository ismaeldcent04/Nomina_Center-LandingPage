import React from "react";

export const TestimonialsCarrouselItem = ({
  testimony,
  name,
  position,
  image,
}) => {
  return (
    <div className="testimonials_carrousel-container">
      <div className="carrousel-testimonial">
        <p>"{testimony}"</p>
      </div>
      <div className="testimonials_picture-container">
        <img src={image} className="active" />
      </div>
      <p>{name}</p>
      <p>{position}</p>
    </div>
  );
};
