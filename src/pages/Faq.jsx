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
        className="flex flex-col md:flex-row justify-center items-center gap-10"
      >
        <div className="w-[80%] md:w-[35%] text-white text-center md:text-left">
          <motion.h3
            variants={fadeIn("right", "tween", 0.4, 1.5)}
            className="text-[1.5rem] md:text-[1.8rem] text-white font-bold"
          >
            Frequently Asked <br />{" "}
            <span className="text-[#D434FE]">Questions</span>
          </motion.h3>
          <motion.p className="pb-8">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </motion.p>
          <div className="text-left pt-10">
            <div className="border-b-2 border-[#D434FE] pb-4">
              <span className="flex flex-row justify-between items-center">
                <p>Can I work on a project I started before the hackathon?</p>
                <button onClick={() => setFaq1(!faq1)} className="text-4">
                  {faq1 ? (
                    <i class="bx bx-minus"></i>
                  ) : (
                    <i class="bx bx-plus"></i>
                  )}
                </button>
              </span>
              <span>{faq1 && <Faq1 />}</span>
            </div>
            <div className="border-b-2 border-[#D434FE] pt-6 pb-4">
              <span className="flex flex-row justify-between items-center">
                <p> What happens if I need help during the hackathon? </p>
                <button onClick={() => setFaq2(!faq2)} className="text-4">
                  {faq2 ? (
                    <i class="bx bx-minus"></i>
                  ) : (
                    <i class="bx bx-plus"></i>
                  )}
                </button>
              </span>
              <span>{faq2 && <Faq2 />}</span>
            </div>
            <div className="border-b-2 border-[#D434FE] pt-6 pb-4">
              <span className="flex flex-row justify-between items-center">
                <p>What happens if I don't have an idea for a project?</p>
                <button onClick={() => setFaq3(!faq3)} className="text-4">
                  {faq3 ? (
                    <i class="bx bx-minus"></i>
                  ) : (
                    <i class="bx bx-plus"></i>
                  )}
                </button>
              </span>
              <span>{faq3 && <Faq3 />}</span>
            </div>

            <div className="border-b-2 border-[#D434FE] pt-6 pb-4">
              <span className="flex flex-row justify-between items-center">
                <p>Can I join a team or do I have to come with one?</p>
                <button onClick={() => setFaq4(!faq4)} className="text-4">
                  {faq4 ? (
                    <i class="bx bx-minus"></i>
                  ) : (
                    <i class="bx bx-plus"></i>
                  )}
                </button>
              </span>
              <span>{faq4 && <Faq4 />}</span>
            </div>
            <div className="border-b-2 border-[#D434FE] pt-6 pb-4">
              <span className="flex flex-row justify-between items-center">
                <p>What happens after the hackathon ends</p>
                <button onClick={() => setFaq5(!faq5)} className="text-4">
                  {faq5 ? (
                    <i class="bx bx-minus"></i>
                  ) : (
                    <i class="bx bx-plus"></i>
                  )}
                </button>
              </span>
              <span>{faq5 && <Faq5 />}</span>
            </div>
            <div className="border-b-2 border-[#D434FE] pt-6 pb-4">
              <span className="flex flex-row justify-between items-center">
                <p> Can I work on a project I started before the hackathon?</p>
                <button onClick={() => setFaq6(!faq6)} className="text-4">
                  {faq6 ? (
                    <i class="bx bx-minus"></i>
                  ) : (
                    <i class="bx bx-plus"></i>
                  )}
                </button>
              </span>
              <span>{faq6 && <Faq6 />}</span>
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
