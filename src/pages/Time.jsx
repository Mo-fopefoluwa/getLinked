import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, zoomIn } from "../utils/motion";

const Time = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        className="relative border-t-[.5px] border-white border-opacity-70 text-white px-10 py-[6rem]"
      >
        <img
          className="stars absolute top-[18rem] left-[8rem] md:left-[24rem]"
          src="stardp.png"
          alt=""
        />
        <img
          className="stars absolute bottom-[3rem] md:bottom-[9rem] left-[2rem] md:left-[15rem]"
          src="stargraysmall.png"
          alt=""
        />
        <img
          className="stars absolute top-[59rem] md:top-[38rem] md:right-[18rem] right-[6rem]"
          src="starwhitesmall.png"
          alt=""
        />

        <h4 className="font-bold text-[1.5rem]">Timeline</h4>
        <p className="pt-4">
          Here is the breakdown of the time we anticipate <br /> using for the
          upcoming event.
        </p>
        <div className="flex flex-col gap-[1.4rem] relative pt-[10rem]">
          <div>
            <div className="flex gap-[1rem] leading-[30px] md:gap-[10rem] leading-[40px] justify-center items-center flex-col md:flex-row pl-8">
              <div className="md:[w-35%] w-[80%] text-left md:text-right">
                <h1 className="text-[#d434f8] font-semibold text-[1.2rem]">
                  Hackathon Announcement
                </h1>
                <p>
                  The getlinked tech hackathon 1.0 is formally announced to the
                  general public and teams begin to get ready to register
                </p>
              </div>
              <div className="md:[w-35%] w-[80%] text-left">
                <h1 className="text-[#d434f8] font-semibold text-[1.2rem]">
                  November 18, 2023
                </h1>
              </div>
            </div>
            <div className="flex gap-[1rem]  leading-[30px] md:gap-[10rem] leading-[40px] justify-center items-center flex-col-reverse md:flex-row pl-8">
              <div className="md:[w-35%] w-[80%] text-left md:text-right">
                <h1 className="text-[#d434f8] font-semibold text-[1.2rem]">
                  November 18, 2023
                </h1>
              </div>
              <div className="md:[w-35%] w-[80%] text-left">
                <h1 className="text-[#d434f8] font-semibold text-[1.2rem]">
                  Teams Registration begins
                </h1>
                <p>
                  Interested teams can now show their interest in the getlinked
                  tech hackathon 1.0 2023 by proceeding to register
                </p>
              </div>
            </div>
            <div className="flex gap-[1rem] leading-[30px] md:gap-[10rem] leading-[40px] justify-center items-center flex-col  md:flex-row pl-8">
              <div className="md:[w-35%] w-[80%] text-left md:text-right">
                <h1 className="text-[#d434f8] font-semibold text-[1.2rem]">
                  Teams Registration ends
                </h1>
                <p>Interested Participants are no longer Allowed to register</p>
              </div>
              <div className="md:[w-35%] w-[80%] text-left">
                <h1 className="text-[#d434f8] font-semibold text-[1.2rem]">
                  November 18, 2023
                </h1>
              </div>
            </div>
            <div className="flex gap-[1rem] leading-[30px] md:gap-[10rem] leading-[40px] justify-center items-center flex-col-reverse md:flex-row pl-8">
              <div className="md:[w-35%] w-[80%] text-left md:text-right">
                <h1 className="text-[#d434f8] font-semibold text-[1.2rem]">
                  November 18, 2023
                </h1>
              </div>
              <div className="md:[w-35%] w-[80%] text-left">
                <h1 className="text-[#d434f8] font-semibold text-[1.2rem]">
                  Announcement of the accepted teams and ideas
                </h1>
                <p>
                  All teams whom idea has been accepted into getlinked tech
                  hackathon 1.0 2023 are formally announced
                </p>
              </div>
            </div>
            <div className="flex gap-[1rem] leading-[30px] md:gap-[10rem] leading-[40px] justify-center items-center flex-col md:flex-row pl-8">
              <div className="md:[w-35%] w-[80%] text-left md:text-right">
                <h1 className="text-[#d434f8] font-semibold text-[1.2rem]">
                  Getlinked Hackathon 1.0 Offically Begins
                </h1>
                <p>
                  Accepted teams can now proceed to build their ground breaking
                  skill driven solutions
                </p>
              </div>
              <div className="md:[w-35%] w-[80%] text-left">
                <h1 className="text-[#d434f8] font-semibold text-[1.2rem]">
                  November 18, 2023
                </h1>
              </div>
            </div>
            <div className="flex gap-[1rem] leading-[30px] md:gap-[10rem] leading-[40px] justify-center items-center flex-col-reverse md:flex-row pl-8">
              <div className="md:[w-35%] w-[80%] text-left md:text-right">
                <h1 className="text-[#d434f8] font-semibold text-[1.2rem]">
                  November 18, 2023
                </h1>
              </div>
              <div className="md:[w-35%] w-[80%] text-left">
                <h1 className="text-[#d434f8] font-semibold text-[1.2rem]">
                  Demo Day
                </h1>
                <p>
                  Teams get the opportunity to pitch their projects to judges.
                  The winner of the hackathon will also be announced on this day
                </p>
              </div>
            </div>
          </div>

          <div
            variants={zoomIn(1, 1)}
            className="absolute h-[100%] flex flex-col md:gap-[1.4rem] md:left-[50%] gap-[1.4rem] left-[4%]"
          >
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className="w-[2px] absolute md:w-[4px] left-[48%] z-10 rounded-[5px] md:h-[10%] h-[12%] top-[-2rem] md:top-[-5rem] lg:top-[-4rem] bg-[#d434f8]"
            ></motion.div>
            <div className="z-20 pt-[11rem] md:pt-[5.2rem] lg:pt-[2.8rem] ">
              {" "}
              <div className="rounded-full bg-[#d434f8] text-white text-center font-semibold w-[2rem] h-[2rem]">
                {" "}
                1
              </div>{" "}
            </div>
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className="w-[2px] absolute md:w-[4px] left-[48%] z-10 rounded-[5px] md:h-[10.5%] lg:h-[7%] h-[9%] top-[14.5rem] md:top-[7.8rem] lg:top-[5.5rem] bg-[#d434f8]"
            ></motion.div>
            <div className="z-20 pt-[10.4rem] md:pt-[9rem] lg:pt-[4rem]">
              {" "}
              <div className="rounded-full bg-[#d434f8] text-white text-center font-semibold w-[2rem] h-[2rem]">
                {" "}
                2
              </div>{" "}
            </div>
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className="w-[2px] absolute md:w-[4px] left-[48%] z-10 rounded-[5px] md:h-[7%] lg:h-[6%] h-[8%] top-[27.5rem] md:top-[21rem] lg:top-[13rem] bg-[#d434f8]"
            ></motion.div>
            <div className="z-20 pt-[7.8rem] md:pt-[7rem] lg:pt-[3rem]">
              {" "}
              <div className="rounded-full bg-[#d434f8] text-white text-center font-semibold w-[2rem] h-[2rem]">
                {" "}
                3
              </div>{" "}
            </div>
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className="w-[2px] absolute md:w-[4px] left-[48%] z-10 rounded-[5px] md:h-[7%] lg:h-[6%] h-[10%] top-[39.5rem] md:top-[31.5rem] lg:top-[19.5rem] bg-[#d434f8]"
            ></motion.div>
            <div className="z-20 pt-[12.2rem] md:pt-[7.6rem] lg:pt-[3rem]">
              {" "}
              <div className="rounded-full bg-[#d434f8] text-white text-center font-semibold w-[2rem] h-[2rem]">
                {" "}
                4
              </div>{" "}
            </div>
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className="w-[2px] absolute md:w-[4px] left-[48%] z-10 rounded-[5px] md:h-[10%] lg:h-[6%] h-[10%] top-[54.5rem] md:top-[43rem] lg:top-[26.3rem] bg-[#d434f8]"
            ></motion.div>
            <div className="z-20 pt-[10rem] md:pt-[10.5rem] lg:pt-[4rem]">
              {" "}
              <div className="rounded-full bg-[#d434f8] text-white text-center font-semibold w-[2rem] h-[2rem]">
                {" "}
                5
              </div>{" "}
            </div>
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className="w-[2px] absolute md:w-[4px] left-[48%] z-10 rounded-[5px] md:h-[10%] lg:h-[7%] h-[10%] top-[69rem] md:top-[56rem] lg:top-[33.2rem] bg-[#d434f8]"
            ></motion.div>
            <div className="z-20 pt-[12.4rem] md:pt-[9rem] lg:pt-[4.2rem]">
              {" "}
              <div className="rounded-full bg-[#d434f8] text-white text-center font-semibold w-[2rem] h-[2rem]">
                {" "}
                6
              </div>{" "}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Time;
