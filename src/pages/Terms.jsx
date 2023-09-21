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
        className="flex flex-col md:flex-row gap-12 text-white pt-20 justify-center md:items-top items-center pb-[12rem]"
      >
        <div className="text-center md:text-left w-[80%] md:w-[40%] ">
          <motion.h5
            variants={fadeIn("left", "tween", 0.2, 1.5)}
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
          <div className=" border-2 border-[#d434f8] px-[2.2rem] py-16">
            <p className="leading-8 text-[1.1rem]">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <div className="text-left">
              <h6 className="text-[#d434f8] pt-10 font-semibold text-[1.2rem] pb-2">
                Licensing Policy
              </h6>
              <p className=" font-semibold text-[1.1rem] pb-8">
                Here are some of our Standard License:
              </p>

              <ul className=" ">
                <li className="pb-10 text-[1.1rem]">
                  <p className="text-white">
                    <i
                      class="bx bxs-check-circle"
                      style={{ color: "#45c302" }}
                    ></i>
                  </p>
                  <p>
                    {" "}
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </li>
                <li className="text-[1.1rem]">
                  <p>
                    You are licensed to use the item available at any free
                    source sites, for your project developement
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <button className="w-[40%] md:w-[20%] py-[.8rem] mt-8 rounded bg-gradient-to-r from-[#fe34b9] to-[#903aff]">
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
