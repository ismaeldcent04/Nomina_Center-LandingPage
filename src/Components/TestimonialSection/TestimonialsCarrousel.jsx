import React from "react";
import Slider from "react-slick";
import leftImg from "../../assets/Left-Arrow.png";
import rightImg from "../../assets/Right-Arrow.png";
import { testimonialsData } from "./TestimonialsData";
import { TestimonialsCarrouselItem } from "./TestimonialsCarrouselItem";

export const TestimonialsCarrousel = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <img src={rightImg} className="next-arrow" />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <img src={leftImg} className="next-arrow" />
      </div>
    );
  };
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings}>
      {testimonialsData.map((testimony, idx) => {
        return (
          <div key={testimony.id} className="testimonials-slider">
            <TestimonialsCarrouselItem
              testimony={testimony.testimony}
              image={testimony.image}
              name={testimony.name}
              position={testimony.position}
            />
          </div>
        );
      })}
    </Slider>
  );
};
