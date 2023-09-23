import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className=" relative bg-[#100B20]">
        <img
          className="stars absolute md:top-[6rem] top-[10rem] left-[2rem] md:left-[4rem]"
          src="starwhitesmall.png"
          alt=""
        />
        <img
          className="stars absolute bottom-[6rem] left-[12rem] md:left-[38rem]"
          src="stardp.png"
          alt=""
        />
        <img
          className="stars absolute top-[26rem] md:top-[4rem] right-[12rem] md:right-[28rem]"
          src="stargraysmall.png"
          alt=""
        />
        <img
          className="stars absolute bottom-[15rem] md:bottom-[9rem] right-[6rem] md:right-[8rem]"
          src="starwhitesmall.png"
          alt=""
        />

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
              <Link to={"/"}>
                <li>Overview</li>
              </Link>
              <Link to={"timeline"}>
                <li>Timeline</li>
              </Link>
              <Link to={"FAQs"}>
                <li>FAQs</li>
              </Link>
              <Link to={"register"}>
                <li>Register</li>
              </Link>
            </ul>
            <div className="flex flex-row gap-4 pt-[2rem]">
              <p className="text-[#D434FE]">Follow us</p>
              <ul className="flex flex-row gap-4 text-[1.2rem] ">
                <a href="/">
                  <li>
                    <i class="bx bxl-instagram"></i>
                  </li>
                </a>
                <a href="/">
                  <li>
                    {" "}
                    <img src="x.png" alt="" />{" "}
                  </li>
                </a>
                <a href="/">
                  <li>
                    <i class="bx bxl-facebook"></i>
                  </li>
                </a>
                <a href="/">
                  <li>
                    <i class="bx bxl-linkedin"></i>
                  </li>{" "}
                </a>
              </ul>
            </div>
          </div>
          <div className="text-left md:w-[18%]">
            <p className="text-[#D434FE] text-[1.2rem] font-semibold pb-[.8rem]">
              Contact Us
            </p>
            <ul>
              <li className="pb-[.8rem] flex flex-row gap-2">
                <i class="bx bxs-phone-call"></i>
                <p> +234 679 81819</p>
              </li>
              <li className="flex flex-row gap-2">
                <i class="bx bxs-location-plus"></i>
                <p>27,Alara Street Yaba 100012 Lagos State</p>
              </li>
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
