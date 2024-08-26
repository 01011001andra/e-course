import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./(hero)";
import AboutUs from "./(about us)";
import Courses from "./(courses)";
import ContactUs from "./(contact us)";
import Review from "./(review)";
import Footer from "./components/Footer";

const LandingPageView = () => {
  return (
    <div className="min-h-screen h-full">
      <Navigation />

      <Hero />
      <AboutUs />
      <Courses />
      <ContactUs />
      <Review />
      <Footer />
    </div>
  );
};

export default LandingPageView;
