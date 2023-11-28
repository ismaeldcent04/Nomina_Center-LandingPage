import React from "react";
import NavBar from "./NavBar";
import { HomeHero } from "./HomeHero";
import { HomeDescription } from "./HomeDescription";

export const HomeSection = () => {
  return (
    <section id="home">
      <NavBar />
      <HomeHero />
      <HomeDescription />
    </section>
  );
};
