import React from "react";
import NavBar from "./NavBar";
import { HomeHero } from "./HomeHero";
import { HomeDescription } from "./HomeDescription";
import backgroundImg from "../../assets/Top-Background.png";

export const HomeSection = () => {
  return (
    <section id="home">
      <NavBar />
      <img src={backgroundImg} className="background-container" />
      <HomeHero />
      <HomeDescription />
    </section>
  );
};
