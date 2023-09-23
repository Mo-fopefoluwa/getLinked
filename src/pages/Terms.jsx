import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, zoomIn } from "../utils/motion";

const Terms = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        className="relative border-t-[.5px] border-white border-opacity-50 flex flex-col md:flex-row gap-12 text-white pt-20 justify-center items-center md:items-top pb-[12rem]"
      >
        <img
          className="stars absolute bottom-[30rem] md:bottom-[25rem] left-[2rem] md:left-[6rem]"
          src="stardp.png"
          alt=""
        />
        <img
          className="stars absolute top-[4rem] md:top-[5rem] left-[24rem] md:left-[30rem]"
          src="stargraysmall.png"
          alt=""
        />
        <img
          className="stars absolute top-[19rem] md:top-[10rem] left-[25rem] md:left-[40rem]"
          src="starlightpurp.png"
          alt=""
        />
        <img
          className="stars absolute bottom-[28rem] md:top-[23rem] right-[9rem] md:right-[16rem]"
          src="starwhitet.png"
          alt=""
        />
        <img
          className="stars absolute top-[48rem] md:top-[45rem] right-[28rem]"
          src="starlightpurp.png"
          alt=""
        />
        <img
          className="stars absolute bottom-[8rem] md:top-[48rem] left-[8rem] md:left-[52rem]"
          src="starwhitesmall.png"
          alt=""
        />
        <img
          className="stars absolute bottom-[6rem] md:top-[50rem] right-[4rem] md:right-[8rem]"
          src="stargraysmall.png"
          alt=""
        />
        <img
          className="absolute opacity-50 w-[60%] bottom-[40rem] md:bottom-[-10rem] left-0 "
          src="purplecright.png"
          alt=""
        />

        <div className="text-center md:text-left w-[80%] md:w-[40%] ">
          <motion.h5
            variants={fadeIn("up", "tween", 0.2, 1.5)}
            className="text-[1.5rem] md:text-[2rem] font-bold  "
          >
            Privacy Policy and <br />{" "}
            <span className="text-[#d434f8]">Terms</span>
          </motion.h5>
          <p className="pt-4 pb-10 text-[1.1rem]">
            Last updated on September 12, 2023
          </p>

          <p className="text-[1.1rem] pb-12">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
          <div className=" border-[.5px] border-[#d434f8] rounded bg-[rgba(255,255,255,0.03)] px-[3rem] py-16">
            <p className=" text-[.8rem]">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <div className="text-left">
              <h6 className="text-[#d434f8] pt-10 font-semibold text-[1rem] pb-2">
                Licensing Policy
              </h6>
              <p className=" font-semibold text-[1rem] pb-6">
                Here are some of our Standard License:
              </p>

              <ul className=" ">
                <li className="pb-6 text-[.8rem] flex flex-row gap-2 items-center">
                  <p className="text-white">
                    <img src="list.png" alt="" />
                  </p>
                  <p>
                    {" "}
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </li>
                <li className="text-[.8rem] flex flex-row gap-2 items-center">
                  <p className="text-white">
                    <img src="list.png" alt="" />
                  </p>
                  <p>
                    You are licensed to use the item available at any free
                    source sites, for your project developement
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <button className="w-[40%] py-[.8rem] mt-8 rounded bg-gradient-to-r from-[#fe34b9] to-[#903aff]">
                Read More
              </button>
            </div>
          </div>
        </div>
        <motion.div
          variants={zoomIn(0.6, 1.5)}
          className="w-[65%] md:w-[30%] relative"
        >
          <img className="w-full relative" src="Vector.png" alt="" />
          <img
            className="w-full absolute top-[7rem] md:top-[11rem] left-0"
            src="08.png"
            alt=""
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Terms;
