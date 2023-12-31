import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, zoomIn } from "../utils/motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        className="relative  flex flex-col gap-16 pt-[6rem]  border-t-[0.5px] border-[#fff]"
      >
        <img
          className="stars absolute top-[10rem] left-[9rem]"
          src="starwhitesmall.png"
          alt=""
        />
        <img
          className="stars absolute left-[18rem] sm:left-[23rem] md:left-[48rem] top-[10rem] md:top-[13rem]"
          src="stargraysmall.png"
          alt=""
        />
        <img
          className="stars absolute md:bottom-[11rem] bottom-[28rem] sm:bottom-[35rem] left-[19rem] sm:left-[23rem] md:left-[30rem]"
          src="stargraysmall.png"
          alt=""
        />
        <img
          className="absolute opacity-50 top-0 md:top-[-5rem] md:w-[45%] left-[-4rem] md:left-[7rem]"
          src="Purple1.png"
          alt=""
        />
        <div className="flex relative justify-end pr-[4rem]">
          <p className="text-white font-[700] italic text-[1rem] md:text-[36px]">
            Igniting a Revolution in HR Innovation
          </p>
          <motion.img
            variants={fadeIn("up", "tween", 0.2, 1.5)}
            className="absolute w-[7rem] sm:w-[9rem] md:w-[15rem] bottom-[-18px]"
            src="Vector4.png"
            alt=""
          />
        </div>
        <div className="flex flex-col md:flex-row px-12 justify-center items-center gap-8">
          <div className="text-white md:w-[45%] flex flex-col justify-center  items-center md:items-start text-center md:text-left">
            {/* <img src="title.png" alt="" /> */}
            <div className="relative">
              <img
                className="absolute w-[8%] top-[-1.8rem] md:top-[-3rem] right-[4.2rem] md:right-[8.8rem]"
                src="Creative.png"
                alt=""
              />
              <h1 className="flex flex-col text-[1.8rem] sm:text-[2rem] md:text-[4rem] font-bold md:items-left leading-[3rem]  md:leading-[4.5rem]">
                <span className="ml-[-2.5rem] md:ml-0">getlinked Tech</span>
                <span className="flex flex-row gap-[.1rem]">
                  Hackathon <span className="text-[#d434f8]"> 1.0</span>{" "}
                  <span className="flex flex-row md:justify-center items-end md:items-center">
                    <img
                      className="w-[35%] md:w-[48%]"
                      src="chain.png"
                      alt=""
                    />{" "}
                    <img
                      className="w-[25%] md:w-[30%] h-[70%]"
                      src="explode.png"
                      alt=""
                    />
                  </span>
                </span>
              </h1>
            </div>

            <p className="md:pr-[7rem]  pt-[1rem] font-[400] text-[12px] sm:text-[15px] md:text-[20px]">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <Link
              to={"register"}
              className="bg-gradient-to-r from-[#fe34b9] to-[#903aff] mt-12 w-[172px] rounded h-[53px] py-2 text-center"
            >
              Register
            </Link>

            <img
              className="w-[60%] md:w-[50%] pt-[5rem]"
              src="time.png"
              alt=""
            />
          </div>
          <motion.div
            variants={zoomIn(0.4, 1)}
            className="w-[100%] md:w-[45%] relative"
          >
            <img
              className="absolute w-[80%] opacity-75 left-[3rem] z-10 "
              src="matrix.png"
              alt=""
            />
            <img className="w-full relative" src="man.png" alt="" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
