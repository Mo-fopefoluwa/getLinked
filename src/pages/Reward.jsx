import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, zoomIn } from "../utils/motion";

const Reward = () => {
  return (
    <div className=" pt-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        className=" relative px-8 py-[4rem]"
      >
        <img
          className="absolute w-[80%] md:w-[50%] opacity-50 md:top-[5rem] top-[4rem] md:left-[2rem] left-[-1rem]"
          src="Purple1.png"
          alt=""
        />
        <img
          className="absolute opacity-50 right-0 top-[20rem] w-[80%] md:w-[50%] md:top-[2rem]"
          src="purplereward.png"
          alt=""
        />
        <img
          className="stars absolute top-[6rem] left-[20rem]"
          src="starlightpurp.png"
          alt=""
        />
        <img
          className="stars absolute top-0 md:top-[11rem] right-[25rem]"
          src="starlightpurp.png"
          alt=""
        />
        <img
          className="stars absolute top-[36rem] md:top-[20rem] left-[6rem] md:left-[43rem]"
          src="starwhite.png"
          alt=""
        />
        <img
          className="hidden md:block stars absolute top-[25rem]  md:right-[8rem]"
          src="starwhite.png"
          alt=""
        />
        <img
          className="stars absolute bottom-0 md:bottom-[4rem] right-[8rem] md:right-[20rem]"
          src="stargraysmall.png"
          alt=""
        />
        <img
          className="stars absolute bottom-[20rem] md:bottom-0 left-[25rem] md:left-[20rem]"
          src="starwhitet.png"
          alt=""
        />

        <div className="pb-20 md:ml-[40rem] text-center md:text-left">
          <motion.h4
            variants={fadeIn("up", "tween", 0.2, 1.5)}
            className="text-white text-[1.5rem] md:text-[2rem] font-bold "
          >
            Prizes and <br /> <span className="text-[#d434f8]">Rewards</span>
          </motion.h4>
          <p className="md:pr-[15rem] text-[1.2rem] text-white pt-6">
            Highlights of the prizes and reward for winners and participants
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-[4rem] md:gap-8 justify-center items-center">
          <motion.img
            variants={zoomIn(0.6, 1)}
            className="w-[80%] md:w-[35%]"
            src="rewards2.png"
            alt=""
          />
          <motion.img
            variants={zoomIn(0.8, 1)}
            className="md:w-[40%] w-[90%] "
            src="Rewards.png"
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Reward;
