import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <div>
      <div
        id="default-modal"
        className="hidden absolute top-0 md:w-[100vw] h-[100vh] z-[80]  bg-[#150e28] bg-opacity-75"
      >
        <div className="flex justify-center items-center px-8 py-[5rem]">
          <div className=" border-[.5px] border-[#d434fe] py-8 px-8">
            <img src="congrat.png" alt="" />
            <div className="text-white ">
              <h3 className="font-bold text-[1.2rem] md:text-[1.4rem]">
                Congratulations
              </h3>
              <h5 className="font-bold text-[1.2rem] md:text-[1.4rem]">
                you have successfully Registered
              </h5>
              <span className="text-[.8rem] ">
                <p>Yes, it was easy and you did it!</p>
                <span className="flex flex-row justify-center gap-2 pb-4">
                  <p>Check your mail box for the next step</p>
                  <img src="emoji.png" alt="" />
                </span>
              </span>

              <Link
                to={"/"}
                className="md:px-[11rem] px-[8rem] py-[.4rem] bg-gradient-to-r from-[#fe34b9] to-[#903aff]"
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
