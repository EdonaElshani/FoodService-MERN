import React from "react";
import Accordion from "./Accordion";
import { HeroSection } from "./HeroSection";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <div className="container">
      <HeroSection />
      <Testimonials />
      <Accordion />
    </div>
  );
};

export default HomePage;
