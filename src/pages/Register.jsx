import React, { useEffect, useState } from "react";
import Modal from "./Modal";
//import Header from "../components/Header";

const Register = ({ result = [] }) => {
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
  const [results, setResults] = useState([]);

  const isValidate = () => {
    let isProceed = true;
    if (team_name === "") {
      setError(<p className="text-[#d434fe]">Please fill this box </p>);
    } else if (phone_number === "") {
      setErrorp(<p className="text-[#d434fe]">Please fill this box </p>);
    } else if (email === "") {
      setErrore(<p className="text-[#d434fe]">Please fill this box </p>);
    } else if (project_topic === "") {
      setErrort(<p className="text-[#d434fe]">Please fill this box </p>);
    } else if (category === "") {
      setErrorc(<p className="text-[#d434fe]">Please fill this box </p>);
    } else if (group_size === "") {
      setErrorg(<p className="text-[#d434fe]">Please fill this box </p>);
    } else if (!checked === true) {
      setErrorC(<p className="text-[#d434fe]">Please fill this box</p>);
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

      fetch("https://backend.getlinked.ai/hackathon/registration/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(regObj),
      })
        .then((res) => {
          // console.log(regObj);
          document.getElementById("default-modal").style.display = "block";
          document.body.classList.add("modal-active");
        })

        .catch((err) => {
          window.alert("Error, please try again");
        });
    }
  };

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch(
        "https://backend.getlinked.ai/hackathon/categories-list",
        {
          method: "GET",
        }
      );
      const jsonData = await response.json();
      //  console.log(jsonData)
      setResults(jsonData);
    };
    fetchResults();
  }, []);

  return (
    <div>
      <div className="relative flex flex-col md:flex-row justify-center items-center gap-[2rem] md:gap-[4rem] py-[6rem]">
        <img
          className="absolute opacity-40 bottom-0 right-0 w-[40%]"
          src="purplecleft.png"
          alt=""
        />
        <img
          className="absolute opacity-40 top-0 left-0 w-[40%]"
          src="purplecright.png"
          alt=""
        />
        <img
          className=" stars absolute top-[20rem] md:top-[10.5rem] left-[20rem] md:left-[8rem]"
          src="starlightpurp.png
        "
          alt=""
        />
        <img
          className="stars absolute hidden md:block bottom-[10.5rem] left-[8rem] "
          src="stargraysmall.png"
          alt=""
        />
        <img
          className="stars absolute bottom-[21rem] md:bottom-[16rem] md:left-[37rem] left-[24rem]"
          src="stardp.png"
          alt=""
        />
        <img
          className="stars  absolute top-[43rem] md:top-[7rem] right-[27.5rem] md:right-[13rem]"
          src="stargraysmall.png"
          alt=""
        />
        <img
          className="stars hidden md:block absolute bottom-[4rem] right-[10rem]"
          src="starwhitet.png"
          alt=""
        />

        <img className="w-[80%] md:w-[40%]" src="3d.png" alt="" />
        <h4 className="absolute top-[2rem] md:top-[11rem] left-[4rem] md:left-[44rem] text-[#d434f8] text-left font-semibold text-[1.5rem] md:text-[2rem] pl-[.5rem] pt-[-20rem]">
          Register
        </h4>
        <div className="w-[80%] md:w-[45%] md:bg-[rgba(225,225,225,0.03)] z-20 text-white py-[8rem] md:px-[2rem]">
          <img className="pl-[.5rem]" src="move.png" alt="" />
          {/* <p>Be part of this movement</p> */}
          <p className="text-left pl-[.5rem] text-[1.6rem] pt-[.5rem] font-semibold">
            CREATE YOUR ACCOUNT
          </p>
          <form className="pt-[1rem]" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4 pb-4 md:gap-[2rem] items-center justify-center">
              <span className="flex flex-col w-[95%] md:w-[45%]">
                <label className="text-left pb-2" htmlFor="name">
                  Team's Name
                </label>
                <input
                  id="name"
                  value={team_name}
                  onChange={(e) => setTeam_name(e.target.value)}
                  type="text"
                  className=" py-[.4rem] bg-transparent outline-none border-[.5px] rounded border-white px-4 md:text-[.9rem] md:placeholder:text-center"
                  placeholder="Enter the name of your group"
                />
                {team_name === "" ? error : ""}
              </span>
              <span className="flex flex-col w-[95%] md:w-[45%]">
                <label className="text-left pb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone_number}
                  onChange={(e) => setPhone_number(e.target.value)}
                  className=" py-[.4rem] bg-transparent outline-none border-[.5px] rounded border-white px-4 md:text-[.9rem] md:placeholder:text-center"
                  placeholder="Enter your phone number"
                />
                {phone_number === "" ? errorp : ""}
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-4 pb-4 md:gap-[2rem] items-center justify-center">
              <span className="flex flex-col w-[95%] md:w-[45%]">
                <label className="text-left pb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" py-[.4rem] bg-transparent outline-none border-[.5px] rounded border-white px-4 md:text-[.9rem] md:placeholder:text-center"
                  placeholder="Enter your email address"
                />
                {email === "" ? errore : ""}
              </span>
              <span className="flex flex-col w-[95%] md:w-[45%]">
                <label className="text-left pb-2" htmlFor="topic">
                  Project Topic
                </label>
                <input
                  type="text"
                  id="topic"
                  value={project_topic}
                  onChange={(e) => setProject_topic(e.target.value)}
                  className=" py-[.4rem] bg-transparent outline-none border-[.5px] rounded border-white px-4 md:text-[.9rem] md:placeholder:text-center"
                  placeholder="What is your group project topic"
                />
                {project_topic === "" ? errort : ""}
              </span>
            </div>
            <div className="flex flex-row gap-4 pb-4 md:gap-[2rem] items-center justify-center">
              <span className="flex flex-col w-[55%] md:w-[45%]">
                <label className="text-left pb-2" htmlFor="category">
                  Category
                </label>
                <select
                  className=" py-[.4rem] bg-transparent outline-none border-[.5px] rounded border-white px-4 md:text-[.9rem] md:placeholder:text-center"
                  name=""
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Select your category"
                  id="category"
                >
                  {results.map((result) => {
                    return (
                      <option
                        key={result.id}
                        className="bg-[#150e28]"
                        value={result.name}
                      >
                        {result.name}
                      </option>
                    );
                  })}
                </select>
                {category === "" ? errorc : ""}
              </span>
              <span className="flex flex-col w-[35%] md:w-[45%]">
                <label className="text-left pb-2" htmlFor="group">
                  Group Size
                </label>
                <select
                  className=" py-[.4rem] bg-transparent outline-none border-[.5px] rounded border-white px-4 md:text-[.9rem] md:placeholder:text-center"
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
                {group_size === "" ? errorg : ""}
              </span>
            </div>
            <p className="text-[#d434f8] text-left pl-[.5rem] text-[.8rem] md:text-[1rem]">
              Please review your registration details before submitting
            </p>
            <div className="pl-[.5rem] flex flex-row gap-2 py-4 text-[.8rem] md:text-[1rem]">
              <input
                type="checkbox"
                value={checked}
                onChange={(e) => setChecked(e.target.value)}
              />
              <p>
                I agreed with the exact terms and conditions and privacy policy
              </p>
              {checked === "" ? errorC : ""}
            </div>
            <button
              // onClick={toggleModal}
              className=" bg-gradient-to-r from-[#fe34b9] to-[#903aff] w-[50%] md:w-[100%] py-4 md:py-2 rounded"
              type="submit"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Register;
