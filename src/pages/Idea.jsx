import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, zoomIn } from "../utils/motion";

const Idea = () => {
  return (
    <div className="relative w-[100%]">
      <img
        className="stars absolute md:top-[16.5rem] top-[12rem] md:left-[6rem] left-[3rem]"
        src="starlightpurp.png"
        alt=""
      />
      <img
        className="stars absolute top-[30rem] sm:top-[35rem] md:top-[15.5rem] right-[2.6rem] sm:right-[3rem] md:right-[12rem]"
        src="stardp.png"
        alt=""
      />
      <img
        className="absolute bottom-[28rem] sm:bottom-[37rem]  md:bottom-[5rem] left-[9rem] sm:left-[11rem] md:left-[38rem]"
        src="arrow.png"
        alt=""
      />
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        className="flex border-t-[.5px] border-white border-opacity-50 flex-col md:flex-row justify-center items-center gap-12 px-4  py-20"
      >
        <motion.img
          variants={zoomIn(0.2, 1)}
          className="w-[80%] md:w-[40%]"
          src="idea.png"
          alt=""
        />
        <div className="text-white text-center md:text-left w-[80%] md:w-[40%] pt-14">
          <motion.h3
            variants={fadeIn("down", "tween", 0.4, 1.5)}
            className="text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] font-bold"
          >
            Introduction to getlinked <br />
            <span className="text-[#d434f8]">tech Hackathon 1.0</span>
          </motion.h3>
          <p className="pt-4 text-[15px] sm:text-[1.15rem] md:text-[1.15rem]">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Idea;
