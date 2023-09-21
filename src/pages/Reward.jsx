import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, zoomIn } from "../utils/motion";

const Reward = () => {
  return (
    <div className="pt-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        className="px-8"
      >
        <div className="pb-20 md:ml-[40rem] text-center md:text-left">
          <motion.h4
            variants={fadeIn("right", "tween", 0.2, 1.5)}
            className="text-white text-[1.5rem] md:text-[2rem] font-bold "
          >
            Prizes and <br /> <span className="text-[#d434f8]">Rewards</span>
          </motion.h4>
          <motion.p
            variants={fadeIn("right", "tween", 0.4, 1.5)}
            className="md:pr-[15rem] text-[1.2rem] text-white pt-6"
          >
            Highlights of the prizes and reward for winners and participants
          </motion.p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <motion.img
            variants={zoomIn(0.6, 1)}
            className="w-[80%] md:w-[35%]"
            src="rewards2.png"
            alt=""
          />
          <motion.img variants={zoomIn(0.8, 1)} src="Rewards.png" alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default Reward;
