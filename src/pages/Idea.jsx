import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, zoomIn } from "../utils/motion";

const Idea = () => {
  return (
    <div className="w-[100%]">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col md:flex-row justify-center items-center gap-12 px-4  py-20"
      >
        <motion.img
          variants={zoomIn(0.2, 1)}
          className="w-[80%] md:w-[40%]"
          src="idea.png"
          alt=""
        />
        <div className="text-white text-center md:text-left w-[80%] md:w-[40%] pt-14">
          <motion.h3
            variants={fadeIn("right", "tween", 0.4, 1.5)}
            className="text-[1.5rem] md:text-[2rem] font-bold"
          >
            Introduction to getlinked <br />
            <span className="text-[#d434f8]">tech Hackathon 1.0</span>
          </motion.h3>
          <p className="pt-4 text-[1.15rem] md:text-[1.15rem]">
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
