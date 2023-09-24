import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, zoomIn } from "../utils/motion";

const Rules = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
      className="pt-14 px-4 md:px-10 relative border-t-[.5px] border-white"
    >
      <img
        className="stars absolute md:bottom-[7rem] top-[11rem] sm:top-[12rem] left-[3rem] sm:left-[6rem]  md:left-[38rem]"
        src="starwhitesmall.png"
        alt=""
      />
      <img
        className="stars absolute top-[22rem] sm:top-[29rem] md:top-[8rem] left-[20rem] sm:left-[25rem] md:left-[24rem]"
        src="stargraysmall.png"
        alt=""
      />
      <img
        className="absolute w-[80%] md:w-[50%] top-[-6rem] md:top-[-2rem] left-[-2rem] md:left-14 opacity-60"
        src="Purple1.png"
        alt=""
      />
      <img
        className="absolute w-[35%] md:w-[25%] bottom-[5rem] md:top-[8rem] right-0 opacity-60"
        src="Purple2.png"
        alt=""
      />

      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="text-white text-center md:text-left w-[80%] md:w-[40%]">
          <motion.h3
            variants={fadeIn("up", "tween", 0.4, 1.5)}
            className="text-[1.5rem] sm:text-[1.8rem] md:text-[2.2rem] font-bold "
          >
            Rules and <br /> <span className="text-purple-500">Guidelines</span>
          </motion.h3>
          <p className="pt-4 text-[.8rem] leading-[1.6rem] sm:leading-normal sm:text-[1rem] md:text-[1.2rem]">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <motion.img
          className="w-[80%] md:w-[45%]"
          variants={zoomIn(0.2, 1)}
          src="img1.png"
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default Rules;
