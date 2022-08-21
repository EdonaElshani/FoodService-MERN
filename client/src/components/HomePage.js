import React from "react";
import Accordion from "./Accordion";
import { HeroSection } from "./HeroSection";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import DisplayAll from "./DisplayAll"

const HomePage = () => {
  return (
    <div className="container">
      <DisplayAll />
      <HeroSection />
      <HowItWorks/>
      <Testimonials />
      <Accordion />
    </div>
    )

};


export default HomePage;
