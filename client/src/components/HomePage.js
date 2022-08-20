import React from "react";
import Accordion from "./Accordion";
import { HeroSection } from "./HeroSection";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <div className="container">
      <HeroSection />
      <HowItWorks/>
      <Testimonials />
      <Accordion />
    </div>
  );
};

export default HomePage;
