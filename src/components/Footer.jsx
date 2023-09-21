import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#100B20]">
        <div className="flex flex-wrap md:flex-row flex-col text-white justify-between py-[4rem] px-[5rem] md:px-[8rem]">
          <div className="md:w-[40%] text-left pb-[1.5rem]">
            <p className="font-[700] text-[30px] text-white ">
              get<span className="text-[#D434FE]">linked</span>
            </p>
            <p className="text-[1rem] font-[400] text-white">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <span className="flex flex-row gap-4 pt-[4rem]">
              <p className="border-r-[3px] pr-4 border-[#d434fe]">
                Terms of Use{" "}
              </p>
              <p>Privacy Policy</p>
            </span>
          </div>
          <div className="text-left md:w-[20%] pb-[1.5rem]">
            <p className="text-[#D434FE] text-[1.2rem] font-semibold pb-[.6rem]">
              Useful Links
            </p>
            <ul className="flex flex-col gap-[.6rem]">
              <a href="">
                <li>Overview</li>
              </a>
              <a href="">
                <li>Timeline</li>
              </a>
              <a href="">
                <li>FAQs</li>
              </a>
              <a href="">
                <li>Register</li>
              </a>
            </ul>
            <div className="flex flex-row gap-4 pt-[2rem]">
              <p className="text-[#D434FE]">Follow us</p>
              <ul className="flex flex-row gap-4">
                <li>Ig</li>
                <li>X</li>
                <li>Fb</li>
                <li>LI</li>
              </ul>
            </div>
          </div>
          <div className="text-left md:w-[18%]">
            <p className="text-[#D434FE] text-[1.2rem] font-semibold pb-[.8rem]">
              Contact Us
            </p>
            <ul>
              <li className="pb-[.8rem]">+234 679 81819</li>
              <li>27,Alara Street Yaba 100012 Lagos State</li>
            </ul>
          </div>
        </div>

        <p className="text-white pt-8 pb-8">
          {" "}
          All rights reserved. © getlinked Ltd.
        </p>
      </div>
    </div>
  );
};

export default Footer;
