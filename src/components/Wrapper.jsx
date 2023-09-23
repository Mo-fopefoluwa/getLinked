import React from "react";
import Hero from "../pages/Hero";
import Idea from "../pages/Idea";
import Rules from "../pages/Rules";
import Key from "../pages/Key";
import Faq from "../pages/Faq";
import Time from "../pages/Time";
import Reward from "../pages/Reward";
import Parts from "../pages/Parts";
import Terms from "../pages/Terms";
import Footer from "./Footer";

const Wrapper = () => {
  return (
    <div className="font-['Montserrat', sans-serif]">
      <Hero />
      <Idea />
      <Rules />
      <Key />
      <Faq />
      <Time />
      <Reward />
      <Parts />
      <Terms />
      <Footer />
    </div>
  );
};

export default Wrapper;
