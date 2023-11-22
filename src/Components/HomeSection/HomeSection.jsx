import React from "react";
import NavBar from "./NavBar";
import { HomeHero } from "./HomeHero";
import { HomeDescription } from "./HomeDescription";

export const HomeSection = () => {
  return (
    <section id="home">
      <NavBar />
      <div className="background-container">
        <div className="background Left"></div>
        <div className="background right"></div>
      </div>
      <HomeHero />
      <HomeDescription />
    </section>
  );
};
