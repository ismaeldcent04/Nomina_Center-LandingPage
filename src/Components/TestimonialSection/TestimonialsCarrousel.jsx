import React from "react";
import leftImg from "../../assets/Left-Arrow.png";
import rightImg from "../../assets/Right-Arrow.png";
import personImg from "../../assets/person.png";
export const TestimonialsCarrousel = () => {
  return (
    <div className="testimonials_carrousel-container">
      <div className="carrousel-testimonial">
        <img src={leftImg} />
        <p>
          "There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly
          believable."
        </p>
        <img src={rightImg} />
      </div>
      <div className="testimonials_picture-container">
        <img src={personImg} />
        <img src={personImg} />
        <img className="active" src={personImg} />
        <img src={personImg} />
        <img src={personImg} />
      </div>
      <p>Calvin Klein</p>
      <p>Security Manager</p>
    </div>
  );
};
