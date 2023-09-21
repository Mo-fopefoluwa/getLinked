import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, zoomIn } from "../utils/motion";

const Key = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        className="relative pt-[10rem] flex flex-col md:flex-row px-10 justify-center items-center"
      >
        <motion.img
          variants={zoomIn(0.2, 1)}
          className="w-[80%] md:w-[50%]"
          src="key.png"
          alt=""
        />
        <div className="text-white text-center md:text-left">
          <motion.h3
            variants={fadeIn("right", "tween", 0.4, 1.5)}
            className="text-[1.5rem] md:text-[1.8rem] font-bold"
          >
            Judging Criteria <br />{" "}
            <span className="text-purple-500">Key attributes</span>
          </motion.h3>
          <p className="pt-4">
            <span className="text-purple-500">Innovation and Creativity:</span>{" "}
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
          <p className="pt-4">
            <span className="text-purple-500">Functionality:</span> Assess how
            well the solution works. Does it perform its intended functions
            effectively and without major issues? Judges would consider the
            completeness and robustness of the solution.
          </p>
          <p clas pt-4>
            <span className="text-purple-500">Impact and Relevance:</span>{" "}
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p className="pt-4">
            <span className="text-purple-500">Technical Complexity:</span>{" "}
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
          <p className="pt-4">
            <span className="text-purple-500">
              Adherence to Hackathon Rules:
            </span>{" "}
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </p>

          <button className="mt-10 bg-gradient-to-r from-[#fe34b9] to-[#903aff] md:w-[172px] w-[8rem] h-[3rem] md:h-[53px] rounded bg-purple-200">
            Read More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Key;
