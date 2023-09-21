import React from "react";
import Header from "../components/Header";

const Register = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row justify-center items-center gap-[4rem]">
        <img src="parts.png" alt="" />
        <div>
          <h4>Register</h4>
          <p>Be part of this movement</p>
          <p>CREATE YOUR ACCOUNT</p>
          <form action="">
            <input type="text" placeholder="Enter the name of your group" />
            <input type="tel" placeholder="Enter your phone number" />
            <input type="email" placeholder="Enter your email address" />
            <input type="text" placeholder="What is your group project topic" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
