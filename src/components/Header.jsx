import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState("");

  const Nav = () => {
    return (
      <div>
        <ul className="absolute z-20 bg-[#150e28] left-0 top-[8rem] text-center w-[100%] flex flex-col gap-10 justify-center items-center text-white">
          <a href="/">
            <li>Timeline</li>
          </a>
          <a href="/">
            <li>Overview</li>
          </a>
          <a href="/">
            <li>FAQs</li>
          </a>
          <a href="/">
            <li>Contact</li>
          </a>
          <li className="ml-14">
            {" "}
            <button className="px-[2rem] py-[1rem] rounded bg-gradient-to-r from-[#d434fe] to-[#903aff]">
              Register
            </button>{" "}
          </li>
        </ul>{" "}
      </div>
    );
  };

  return (
    <div>
      <div className="relative flex flex-row md:gap-[28rem] items-center px-20 py-10 border-b-[1px]">
        <img className="w-[5rem] md:w-[9rem]" src="getlinked.png" alt="" />
        <ul className=" hidden md:flex flex-row gap-10 justify-center items-center text-white">
          <a href="/">
            <li>Timeline</li>
          </a>
          <a href="/">
            <li>Overview</li>
          </a>
          <a href="/">
            <li>FAQs</li>
          </a>
          <a href="/">
            <li>Contact</li>
          </a>
          <li className="ml-14">
            {" "}
            <button className="px-[3rem] py-[.8rem] rounded bg-gradient-to-r from-[#fe34b9] to-[#903aff]">
              Register
            </button>{" "}
          </li>
        </ul>
        <div className="block  md:hidden">
          <button
            className="text-white w-[20rem] pl-[14rem]"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <img src="menu.png" alt="" />
            ) : (
              <img src="menu.png" alt="" />
            )}
          </button>
          {open && <Nav />}
        </div>
      </div>
    </div>
  );
};

export default Header;
