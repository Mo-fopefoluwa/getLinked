import React, { useState } from "react";
//import Header from "../components/Header";

const Register = () => {
  const [team_name, setTeam_name] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [email, setEmail] = useState("");
  const [project_topic, setProject_topic] = useState("");
  const [category, setCategory] = useState("");
  const [group_size, setGroup_size] = useState("");
  const [checked, setChecked] = useState(true);
  const [error, setError] = useState("");
  const [errorp, setErrorp] = useState("");
  const [errore, setErrore] = useState("");
  const [errort, setErrort] = useState("");
  const [errorc, setErrorc] = useState("");
  const [errorg, setErrorg] = useState("");
  const [errorC, setErrorC] = useState("");

  const isValidate = () => {
    let isProceed = true;
    if (team_name === "") {
      setError(<p>Please fill this box </p>);
    } else if (phone_number === "") {
      setErrorp(<p>Please fill this box </p>);
    } else if (email === "") {
      setErrore(<p>Please fill this box </p>);
    } else if (project_topic === "") {
      setErrort(<p>Please fill this box </p>);
    } else if (category === "") {
      setErrorc(<p>Please fill this box </p>);
    } else if (group_size === "") {
      setErrorg(<p>Please fill this box </p>);
    } else if (!checked === true) {
      setErrorC(<p>Please fill this box</p>);
    } else isProceed = true;

    return isProceed;
  };

  const handleSubmit = (e) => {
    if (isValidate()) {
      e.preventDefault();

      let regObj = {
        email,
        phone_number,
        team_name,
        group_size,
        project_topic,
        category,
        checked,
      };
      //console.log(regObj);

      // var baseUrl = "https://backend.getlinked.ai";

      fetch("https://backend.getlinked.ai/hackathon/registration/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(regObj),
      })
        .then((res) => {
          window.alert("successful");
          console.log(regObj);
          // navigate("/signin");
        })
        // .then((result) => {
        //   console.log(regObj);
        // })
        .catch((err) => {
          window.alert("Failed :");
        });
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-[4rem]">
        <img className="w-[80%] md:w-[40%]" src="3d.png" alt="" />
        <div className="w-[80%] md:w-[45%] bg-[#3a1c8d31]">
          <h4>Register</h4>
          <p>Be part of this movement</p>
          <p>CREATE YOUR ACCOUNT</p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-[2rem] items-center justify-center">
              <span className="flex flex-col w-[80%] md:w-[40%]">
                <label className="text-left" htmlFor="name">
                  Team's Name
                </label>
                <input
                  id="name"
                  value={team_name}
                  onChange={(e) => setTeam_name(e.target.value)}
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
                  value={phone_number}
                  onChange={(e) => setPhone_number(e.target.value)}
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
                  value={project_topic}
                  onChange={(e) => setProject_topic(e.target.value)}
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
                  value={group_size}
                  onChange={(e) => setGroup_size(e.target.value)}
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
