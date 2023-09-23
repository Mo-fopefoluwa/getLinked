import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, zoomIn } from "../utils/motion";

const Parts = () => {
  return (
    <div className="text-white pt-[6rem]">
      <div
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        className="relative py-[4rem]"
      >
        <img
          className="absolute w-[50%] opacity-40 left-0 top-0 md:top-[-10rem]"
          src="purplecright.png"
          alt=""
        />
        <img
          className="absolute opacity-40 w-[50%] right-0 bottom-[-18rem] md:top-[10rem]"
          src="purpleparts.png"
          alt=""
        />
        <img
          className="stars absolute top-[18.5rem] md:top-[18rem] md:right-[39rem] right-[13rem]"
          src="starlightpurp.png"
          alt=""
        />
        <img
          className="stars absolute md:top-[11rem] top-[14rem] md:left-[19rem] left-[4rem]"
          src="stardp.png"
          alt=""
        />
        <img
          className="stars absolute bottom-[4rem] md:bottom-[8rem] md:right-[40rem] right-[5rem]"
          src="starwhitesmall.png"
          alt=""
        />

        <h5
          variants={fadeIn("right", "tween", 0.2, 1.5)}
          className="font-bold text-[2rem]"
        >
          Partners and Sponsors
        </h5>
        <p
          variants={fadeIn("left", "tween", 0.4, 1.5)}
          className="px-[4rem] md:px-[28rem] pt-[1rem] mpb-[4rem]"
        >
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
        <div variants={zoomIn(0.6, 1.5)} className="flex justify-center ">
          <img className="px-10 pt-8 md:w-[70%]" src="parts.png" alt="" />
        </div>
        {/* <div className="border-2 border-[#d434f8] py-[3rem] md:py-[6rem] mx-[4rem] md:mx-[8rem]">
          <div className="flex flex-row justify-center items-center gap-6 md:gap-14">
            <img
              className="w-[90px] md:w-[150px] h-[20px] md:h-[30px]"
              src="Liberty.png"
              alt=""
            />
            <img
              className="w-[2px] md:w-[5px] h-[100px] md:h-[160px]"
              src="Line1.png"
              alt=""
            />
            <img
              className="w-[90px] md:w-[150px] h-[20px] md:h-[30px]"
              src="Liberty.png"
              alt=""
            />
            <img
              className="w-[2px] md:w-[5px] h-[100px] md:h-[160px]"
              src="Line1.png"
              alt=""
            />
            <img
              className="w-[60px] h-[30px] md:w-[110px] md:h-[70px]"
              src="Winwise.png"
              alt=""
            />
          </div>
          <div className="flex flex-row pl-[2rem] md:pl-10 pt-4 md:pt-8 gap-8 md:gap-14 justify-center items-center">
            <img
              className="w-[90px] h-[2px] md:w-[220px] md:h-[4px] "
              src="Line2.png"
              alt=""
            />
            <img
              className="w-[120px] h-[2px] md:w-[220px] md:h-[4px]"
              src="Line2.png"
              alt=""
            />
            <img
              className="w-[90px] h-[2px] md:w-[220px] md:h-[4px] "
              src="Line2.png"
              alt=""
            />
          </div>
          <div className="flex flex-row justify-center pl-[1rem] md:pl-[4.5rem] pt-8 items-center gap-6 md:gap-14">
            <img
              className="w-[80px] md:w-[150px] h-[50px] md:h-[90px]"
              src="wisper.png"
              alt=""
            />
            <img
              className="w-[2px] md:w-[5px] h-[100px] md:h-[160px]"
              src="Line1.png"
              alt=""
            />
            <img
              className="w-[70px] md:w-[150px] h-[20px] md:h-[30px]"
              src="Paybox.png"
              alt=""
            />
            <img
              className="w-[2px] md:w-[5px] h-[100px] md:h-[160px]"
              src="Line1.png"
              alt=""
            />
            <img
              className="w-[70px] md:w-[180px] h-[30px] md:h-[70px]"
              src="Vizual.png"
              alt=""
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Parts;
