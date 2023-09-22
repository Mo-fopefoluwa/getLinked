import React, { useState } from "react";
//import Header from "../components/Header";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [group, setGroup] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const [errorp, setErrorp] = useState("");
  const [errore, setErrore] = useState("");
  const [errort, setErrort] = useState("");
  const [errorc, setErrorc] = useState("");
  const [errorg, setErrorg] = useState("");
  const [errorC, setErrorC] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      setError(<p>Please fill this box </p>);
    } else if (phone === "") {
      setErrorp(<p>Please fill this box </p>);
    } else if (email === "") {
      setErrore(<p>Please fill this box </p>);
    } else if (topic === "") {
      setErrort(<p>Please fill this box </p>);
    } else if (category === "") {
      setErrorc(<p>Please fill this box </p>);
    } else if (group === "") {
      setErrorg(<p>Please fill this box </p>);
    } else if (!checked === true) {
      setErrorC(<p>Please fill this box</p>);
    } else console.log("submitted successfully");
  };

  const isValidate = () => {
    let isProceed = true;
    if (name === "") {
      setError(<p>Please fill this box </p>);
    } else if (phone === "") {
      setErrorp(<p>Please fill this box </p>);
    } else if (email === "") {
      setErrore(<p>Please fill this box </p>);
    } else if (topic === "") {
      setErrort(<p>Please fill this box </p>);
    } else if (category === "") {
      setErrorc(<p>Please fill this box </p>);
    } else if (group === "") {
      setErrorg(<p>Please fill this box </p>);
    } else if (!checked === true) {
      setErrorC(<p>Please fill this box</p>);
    } else isProceed = true;

    return isProceed;
  };

  // const handleSubmit = (e) => {
  //   if (isValidate()) {
  //     e.preventDefault();

  //     let regObj = { id, name, email, phone, password, coPassword };
  //     //console.log(regObj);

  //     fetch("http://localhost:8000/user/", {
  //       method: "POST",
  //       headers: { "content-type": "application/json" },
  //       body: JSON.stringify(regObj),
  //     })
  //       .then((res) => {
  //         window.alert("Registered successfully");
  //         navigate("/signin");
  //       })
  //       .catch((err) => {
  //         window.alert("Failed :" + err.message);
  //       });
  //   }
  // };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-[4rem]">
        <img className="w-[80%] md:w-[30%]" src="Vector.png" alt="" />
        <div className="w-[80%] md:w-[45%] bg-[#3a1c8d31]">
          <h4>Register</h4>
          <p>Be part of this movement</p>
          <p>CREATE YOUR ACCOUNT</p>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-[2rem] items-center justify-center">
              <span className="flex flex-col w-[80%] md:w-[40%]">
                <label className="text-left" htmlFor="name">
                  Team's Name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className=" py-[.4rem] bg-transparent outline-none border-2 border-white px-4 text-[.9rem] placeholder:text-center"
                  placeholder="Enter the name of your group"
                />
                {error}
              </span>
              <span className="flex flex-col w-[80%] md:w-[40%]">
                <label className="text-left" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className=" py-[.4rem] bg-transparent outline-none border-2 border-white px-4 text-[.9rem] placeholder:text-center"
                  placeholder="Enter your phone number"
                />
                {errorp}
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-[2rem] items-center justify-center">
              <span className="flex flex-col w-[80%] md:w-[40%]">
                <label className="text-left" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" py-[.4rem] bg-transparent outline-none border-2 border-white px-4 text-[.9rem] placeholder:text-center"
                  placeholder="Enter your email address"
                />
                {errore}
              </span>
              <span className="flex flex-col w-[80%] md:w-[40%]">
                <label className="text-left" htmlFor="topic">
                  Project Topic
                </label>
                <input
                  type="text"
                  id="topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className=" py-[.4rem] bg-transparent outline-none border-2 border-white px-4 text-[.9rem] placeholder:text-center"
                  placeholder="What is your group project topic"
                />
                {errort}
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-[2rem] items-center justify-center">
              <span className="flex flex-col w-[80%] md:w-[40%]">
                <label className="text-left" htmlFor="category">
                  Category
                </label>
                <select
                  className=" text-white py-[.4rem] bg-transparent outline-none border-2 border-white px-4 text-[.9rem] placeholder:text-center"
                  name=""
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Select your category"
                  id="category"
                >
                  <option className="bg-[#150e28]" value="">
                    Select your category
                  </option>
                  <option className="bg-[#150e28]" value="First">
                    First
                  </option>
                  <option className="bg-[#150e28]" value="Second">
                    Second
                  </option>
                  <option className="bg-[#150e28]" value="Third">
                    Third
                  </option>
                </select>
                {errorc}
              </span>
              <span className="flex flex-col w-[80%] md:w-[40%]">
                <label className="text-left" htmlFor="group">
                  Group Size
                </label>
                <select
                  className="text-white py-[.4rem] bg-transparent outline-none border-2 border-white px-4 text-[.9rem] placeholder:text-center"
                  name=""
                  id="group"
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                >
                  <option className="bg-[#150e28]" value="">
                    Select
                  </option>
                  <option className="bg-[#150e28]" value="First">
                    First
                  </option>
                  <option className="bg-[#150e28]" value="Second">
                    Second
                  </option>
                  <option className="bg-[#150e28]" value="Third">
                    Third
                  </option>
                </select>
                {errorg}
              </span>
            </div>
            <p>Please review your registration details before submitting</p>
            <div>
              <input
                type="checkbox"
                value={checked}
                onChange={(e) => setChecked(e.target.value)}
              />
              <p>
                I agreed with the exact terms and conditions and privacy policy
              </p>
              {errorC}
            </div>
            <button type="submit">Register Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
