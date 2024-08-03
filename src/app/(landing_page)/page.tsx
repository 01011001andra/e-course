import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./(hero)";
import AboutUs from "./(about us)";
import Courses from "./(courses)";

const LandingPage = () => {
  return (
    <div className="min-h-screen h-full ">
      <Navigation />
      <Hero />
      <AboutUs />
      <Courses />
      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
    </div>
  );
};

export default LandingPage;
