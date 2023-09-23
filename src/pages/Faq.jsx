import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, zoomIn } from "../utils/motion";

const Faq = () => {
  const [faq1, setFaq1] = useState("");
  const [faq2, setFaq2] = useState("");
  const [faq3, setFaq3] = useState("");
  const [faq4, setFaq4] = useState("");
  const [faq5, setFaq5] = useState("");
  const [faq6, setFaq6] = useState("");

  const Faq1 = () => {
    return (
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, ut!
          Saepe distinctio molestiae explicabo doloremque qui adipisci optio.
        </p>
      </div>
    );
  };
  const Faq2 = () => {
    return (
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, ut!
          Saepe distinctio molestiae explicabo doloremque qui adipisci optio.
        </p>
      </div>
    );
  };

  const Faq3 = () => {
    return (
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, ut!
          Saepe distinctio molestiae explicabo doloremque qui adipisci optio.
        </p>
      </div>
    );
  };

  const Faq4 = () => {
    return (
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, ut!
          Saepe distinctio molestiae explicabo doloremque qui adipisci optio.
        </p>
      </div>
    );
  };

  const Faq5 = () => {
    return (
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, ut!
          Saepe distinctio molestiae explicabo doloremque qui adipisci optio.
        </p>
      </div>
    );
  };

  const Faq6 = () => {
    return (
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, ut!
          Saepe distinctio molestiae explicabo doloremque qui adipisci optio.
        </p>
      </div>
    );
  };

  return (
    <div className="pt-[4rem]">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        className="relative py-[4rem] border-t-[.5px] border-white border-opacity-75 flex flex-col md:flex-row justify-center items-center gap-[6rem] md:gap-10"
      >
        <img
          className="stars absolute top-[3rem] left-[6rem] md:left-[8rem]"
          src="stardp.png"
          alt=""
        />
        <img
          className="stars absolute bottom-[20rem] md:top-[4rem] right-[22rem] md:right-[26rem]"
          src="starlightpurp.png"
          alt=""
        />
        <img
          className="stars absolute bottom-[15rem] md:top-[23rem] left-[4rem] md:right-[40rem]"
          src="stargraysmall.png"
          alt=""
        />
        <img
          className="stars absolute bottom-[30rem] md:top-[12rem] right-[14rem] md:right-[35rem]"
          src="starlightpurp.png"
          alt=""
        />
        <img
          className="stars absolute bottom-[4rem] right-[8rem] md:right-[16rem]"
          src="starwhitesmall.png"
          alt=""
        />
        <img
          className="absolute bottom-[26rem] md:top-[3.4rem] right-[12rem] md:right-[21rem] w-[5%] md:w-[3%]"
          src="_.png"
          alt=""
        />
        <img
          className="absolute w-[8%] md:w-[4%] bottom-[28rem] md:top-[1rem] right-[17rem] md:right-[29rem]"
          src="_.png"
          alt=""
        />
        <img
          className="absolute bottom-[26rem] md:top-[3.4rem] right-[22rem] md:right-[38rem] w-[5%] md:w-[3%]"
          src="_.png"
          alt=""
        />

        <div className="w-[80%] md:w-[35%] text-white text-center md:text-left">
          <h3
            variants={fadeIn("right", "tween", 0.4, 1.5)}
            className="text-[1.5rem] md:text-[1.8rem] text-white font-bold"
          >
            Frequently Asked <br />{" "}
            <span className="text-[#D434FE]">Questions</span>
          </h3>
          <p className="pb-8">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <div className="text-left pt-10">
            <div className="border-b-2 border-[#D434FE] pb-4">
              <span className="flex flex-row justify-between items-center">
                <button className="text-left" onClick={() => setFaq1(!faq1)}>
                  {" "}
                  Can I work on a project I started before the hackathon?
                </button>

                <button
                  onClick={() => setFaq1(!faq1)}
                  className="text-4  text-[#D434FE]"
                >
                  {faq1 ? (
                    <i class="bx bx-minus"></i>
                  ) : (
                    <i class="bx bx-plus"></i>
                  )}
                </button>
              </span>
              <span className="mt-[4rem]">{faq1 && <Faq1 />}</span>
            </div>
            <div className="border-b-2 border-[#D434FE] pt-6 pb-4">
              <span className="flex flex-row justify-between items-center">
                <button className="text-left" onClick={() => setFaq2(!faq2)}>
                  {" "}
                  What happens if I need help during the hackathon?{" "}
                </button>
                <button
                  onClick={() => setFaq2(!faq2)}
                  className="text-4 text-[#D434FE]"
                >
                  {faq2 ? (
                    <i class="bx bx-minus"></i>
                  ) : (
                    <i class="bx bx-plus"></i>
                  )}
                </button>
              </span>
              <span className="mt-[4rem]">{faq2 && <Faq2 />}</span>
            </div>
            <div className="border-b-2 border-[#D434FE] pt-6 pb-4">
              <span className="flex flex-row justify-between items-center">
                <button className="text-left" onClick={() => setFaq3(!faq3)}>
                  {" "}
                  What happens if I don't have an idea for a project?
                </button>

                <button
                  onClick={() => setFaq3(!faq3)}
                  className="text-4 text-[#D434FE]"
                >
                  {faq3 ? (
                    <i class="bx bx-minus"></i>
                  ) : (
                    <i class="bx bx-plus"></i>
                  )}
                </button>
              </span>
              <span className="mt-[4rem]">{faq3 && <Faq3 />}</span>
            </div>

            <div className="border-b-2 border-[#D434FE] pt-6 pb-4">
              <span className="flex flex-row justify-between items-center">
                <button className="text-left" onClick={() => setFaq4(!faq4)}>
                  {" "}
                  Can I join a team or do I have to come with one?
                </button>

                <button
                  onClick={() => setFaq4(!faq4)}
                  className="text-4 text-[#D434FE]"
                >
                  {faq4 ? (
                    <i class="bx bx-minus"></i>
                  ) : (
                    <i class="bx bx-plus"></i>
                  )}
                </button>
              </span>
              <span className="mt-[4rem]">{faq4 && <Faq4 />}</span>
            </div>
            <div className="border-b-2 border-[#D434FE] pt-6 pb-4">
              <span className="flex flex-row justify-between items-center">
                <button className="text-left" onClick={() => setFaq5(!faq5)}>
                  {" "}
                  What happens after the hackathon ends
                </button>

                <button
                  onClick={() => setFaq5(!faq5)}
                  className="text-4 text-[#D434FE]"
                >
                  {faq5 ? (
                    <i class="bx bx-minus"></i>
                  ) : (
                    <i class="bx bx-plus"></i>
                  )}
                </button>
              </span>
              <span className="mt-[4rem]">{faq5 && <Faq5 />}</span>
            </div>
            <div className="border-b-2 border-[#D434FE] pt-6 pb-4">
              <span className="flex flex-row justify-between items-center">
                <button className="text-left" onClick={() => setFaq6(!faq6)}>
                  {" "}
                  Can I work on a project I started before the hackathon?
                </button>

                <button
                  onClick={() => setFaq6(!faq6)}
                  className="text-4 text-[#D434FE]"
                >
                  {faq6 ? (
                    <i class="bx bx-minus"></i>
                  ) : (
                    <i class="bx bx-plus"></i>
                  )}
                </button>
              </span>
              <span className="mt-[4rem]">{faq6 && <Faq6 />}</span>
            </div>
          </div>
        </div>
        <motion.img
          variants={zoomIn(0.2, 1)}
          className="w-[80%] md:w-[40%]"
          src="faq.png"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Faq;
