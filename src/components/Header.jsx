import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState("");

  const Nav = () => {
    return (
      <div>
        <ul className="absolute z-20 bg-[#150e28] left-0 top-[8rem] text-left w-[100%] px-[4rem] justify-center flex flex-col gap-14  text-white pb-[6rem]">
          <Link to={"/"}>
            <li>Timeline</li>
          </Link>
          <a href="/">
            <li>Overview</li>
          </a>
          <a href="/">
            <li>FAQs</li>
          </a>
          <Link to={"contact"}>
            <li>Contact</li>
          </Link>
          <li className="ml-14">
            {" "}
            <Link
              to={"register"}
              className="ml-[-2.2rem] px-[2rem] py-[.5rem] md:py-[1rem] rounded bg-gradient-to-r from-[#d434fe] to-[#903aff]"
            >
              Register
            </Link>{" "}
          </li>
        </ul>{" "}
      </div>
    );
  };

  return (
    <div>
      <div className="relative flex flex-row justify-between  items-center px-20 py-10">
        <img className="w-[6rem] md:w-[9rem]" src="getlinked.png" alt="" />
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
          <Link to={"contact"}>
            <li>Contact</li>
          </Link>
          <li className="ml-14">
            {" "}
            <Link
              to={"register"}
              className="px-[3rem] py-[.8rem] rounded bg-gradient-to-r from-[#fe34b9] to-[#903aff]"
            >
              Register
            </Link>{" "}
          </li>
        </ul>
        <div className="block  md:hidden">
          <button className="text-white  " onClick={() => setOpen(!open)}>
            {open ? (
              <img src="close.png" alt="" />
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
