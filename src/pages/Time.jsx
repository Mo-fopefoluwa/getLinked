import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, textVariant2, zoomIn } from "../utils/motion";
import { workExp } from "../utils/data";

const Time = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        className="text-white px-10 py-[6rem]"
      >
        <h4 className="font-bold text-[1.5rem]">Timeline</h4>
        <p className="pt-4">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
        <div className="flex flex-col gap-[1.4rem] relative pt-[10rem]">
          <motion.div variants={textVariant2}>
            <div className="flex gap-[1rem] leading-[30px] md:gap-[10rem] leading-[40px] justify-center items-center flex-col md:flex-row pl-8">
              <div className="md:[w-35%] w-[80%] text-left md:text-right">
                <h1 className="text-[#d434f8] font-semibold text-[1.3rem]">
                  Hackathon Announcement
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  asperiores, praesentium laboriosam suscipit dolorum fugiat
                  sapiente illum
                </p>
              </div>
              <div className="md:[w-35%] w-[80%] text-left">
                <h1 className="text-[#d434f8] font-semibold text-[1.3rem]">
                  November 18, 2023
                </h1>
              </div>
            </div>
            <div className="flex gap-[1rem]  leading-[30px] md:gap-[10rem] leading-[40px] justify-center items-center flex-col-reverse md:flex-row pl-8">
              <div className="md:[w-35%] w-[80%] text-left md:text-right">
                <h1 className="text-[#d434f8] font-semibold text-[1.3rem]">
                  November 18, 2023
                </h1>
              </div>
              <div className="md:[w-35%] w-[80%] text-left">
                <h1 className="text-[#d434f8] font-semibold text-[1.3rem]">
                  Hackathon Announcement
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  asperiores, praesentium laboriosam suscipit dolorum fugiat
                  sapiente illum
                </p>
              </div>
            </div>
            <div className="flex gap-[1rem] leading-[30px] md:gap-[10rem] leading-[40px] justify-center items-center flex-col  md:flex-row pl-8">
              <div className="md:[w-35%] w-[80%] text-left md:text-right">
                <h1 className="text-[#d434f8] font-semibold text-[1.3rem]">
                  Hackathon Announcement
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  asperiores, praesentium laboriosam suscipit dolorum fugiat
                  sapiente illum
                </p>
              </div>
              <div className="md:[w-35%] w-[80%] text-left">
                <h1 className="text-[#d434f8] font-semibold text-[1.3rem]">
                  November 18, 2023
                </h1>
              </div>
            </div>
            <div className="flex gap-[1rem] leading-[30px] md:gap-[10rem] leading-[40px] justify-center items-center flex-col-reverse md:flex-row pl-8">
              <div className="md:[w-35%] w-[80%] text-left md:text-right">
                <h1 className="text-[#d434f8] font-semibold text-[1.3rem]">
                  November 18, 2023
                </h1>
              </div>
              <div className="md:[w-35%] w-[80%] text-left">
                <h1 className="text-[#d434f8] font-semibold text-[1.3rem]">
                  Hackathon Announcement
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  asperiores, praesentium laboriosam suscipit dolorum fugiat
                  sapiente illum
                </p>
              </div>
            </div>
            <div className="flex gap-[1rem] leading-[30px] md:gap-[10rem] leading-[40px] justify-center items-center flex-col md:flex-row pl-8">
              <div className="md:[w-35%] w-[80%] text-left md:text-right">
                <h1 className="text-[#d434f8] font-semibold text-[1.3rem]">
                  Hackathon Announcement
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  asperiores, praesentium laboriosam suscipit dolorum fugiat
                  sapiente illum
                </p>
              </div>
              <div className="md:[w-35%] w-[80%] text-left">
                <h1 className="text-[#d434f8] font-semibold text-[1.3rem]">
                  November 18, 2023
                </h1>
              </div>
            </div>
            <div className="flex gap-[1rem] leading-[30px] md:gap-[10rem] leading-[40px] justify-center items-center flex-col-reverse md:flex-row pl-8">
              <div className="md:[w-35%] w-[80%] text-left md:text-right">
                <h1 className="text-[#d434f8] font-semibold text-[1.3rem]">
                  November 18, 2023
                </h1>
              </div>
              <div className="md:[w-35%] w-[80%] text-left">
                <h1 className="text-[#d434f8] font-semibold text-[1.3rem]">
                  Hackathon Announcement
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  asperiores, praesentium laboriosam suscipit dolorum fugiat
                  sapiente illum
                </p>
              </div>
            </div>
          </motion.div>
          {/* {workExp.map((exp, i) => {
            return (
              <motion.div variants={textVariant2} className="exps" key={i}>
                <div className="post">
                  <h1>{exp.place}</h1>
                  <p>{exp.tenure}</p>
                </div>
                <div className="role">
                  <h1>{exp.role}</h1>
                  <p>{exp.detail}</p>
                </div>
              </motion.div>
            );
          })} */}
          <motion.div
            variants={zoomIn(1, 1)}
            className="absolute h-[100%] flex flex-col md:gap-[1.4rem] md:left-[50%] gap-[1.4rem] left-[4%]"
          >
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className="w-[2px] absolute md:w-[4px] left-[48%] z-10 rounded-[5px] md:h-[10%] h-[12%] top-[-1.5rem] md:top-[-4rem] bg-[#d434f8]"
            ></motion.div>
            <div className="z-20 pt-[8.7rem] md:pt-[4rem] ">
              {" "}
              <div className="rounded-full bg-[#d434f8] text-white text-center font-semibold w-[2rem] h-[2rem]">
                {" "}
                1
              </div>{" "}
            </div>
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className="w-[2px] absolute md:w-[4px] left-[48%] z-10 rounded-[5px] md:h-[8%] h-[10%] top-[11.5rem] md:top-[8rem] bg-[#d434f8]"
            ></motion.div>
            <div className="z-20 pt-[8.2rem] md:pt-[8rem]">
              {" "}
              <div className="rounded-full bg-[#d434f8] text-white text-center font-semibold w-[2rem] h-[2rem]">
                {" "}
                2
              </div>{" "}
            </div>
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className="w-[2px] absolute md:w-[4px] left-[48%] z-10 rounded-[5px] md:h-[8%] h-[10%] top-[23rem] md:top-[19.5rem] bg-[#d434f8]"
            ></motion.div>
            <div className="z-20 pt-[8.4rem] md:pt-[8rem]">
              {" "}
              <div className="rounded-full bg-[#d434f8] text-white text-center font-semibold w-[2rem] h-[2rem]">
                {" "}
                3
              </div>{" "}
            </div>
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className="w-[2px] absolute md:w-[4px] left-[48%] z-10 rounded-[5px] md:h-[8%] h-[10%] top-[35rem] md:top-[30rem] bg-[#d434f8]"
            ></motion.div>
            <div className="z-20 pt-[8.4rem] md:pt-[8rem]">
              {" "}
              <div className="rounded-full bg-[#d434f8] text-white text-center font-semibold w-[2rem] h-[2rem]">
                {" "}
                4
              </div>{" "}
            </div>
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className="w-[2px] absolute md:w-[4px] left-[48%] z-10 rounded-[5px] md:h-[8%] h-[10%] top-[47rem] md:top-[42rem] bg-[#d434f8]"
            ></motion.div>
            <div className="z-20 pt-[8.4rem] md:pt-[8rem]">
              {" "}
              <div className="rounded-full bg-[#d434f8] text-white text-center font-semibold w-[2rem] h-[2rem]">
                {" "}
                5
              </div>{" "}
            </div>
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className="w-[2px] absolute md:w-[4px] left-[48%] z-10 rounded-[5px] md:h-[8%] h-[10%] top-[58.5rem] md:top-[53.5rem] bg-[#d434f8]"
            ></motion.div>
            <div className="z-20 pt-[8.4rem] md:pt-[8rem]">
              {" "}
              <div className="rounded-full bg-[#d434f8] text-white text-center font-semibold w-[2rem] h-[2rem]">
                {" "}
                6
              </div>{" "}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Time;
