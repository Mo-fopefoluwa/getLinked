import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [text, setText] = useState("");
  const [topic, setTopic] = useState("");

  const isValidate = () => {
    let isProceed = true;
    let content = (text, mail, name);

    if (content === "") {
      isProceed = false;
    } else isProceed = true;

    return isProceed;
  };

  const submitHandler = (evnt) => {
    if (isValidate()) {
      evnt.preventDefault();

      let regObj = {
        mail,
        name,
        text,
        topic,
      };
      //console.log(regObj);

      // var baseUrl = "https://backend.getlinked.ai";

      fetch("https://backend.getlinked.ai/hackathon/contact-form/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(regObj),
      })
        .then((res) => {
          window.alert("successful");
          // console.log(regObj);
        })

        .catch((err) => {
          window.alert("Failed :" + err.message);
        });
    }
  };

  return (
    <div className="relative flex flex-col py-[6rem] md:flex-row gap-[5rem] items-center">
      <img
        className="hidden md:block absolute opacity-40 bottom-0 right-0 w-[40%]"
        src="purplecleft.png"
        alt=""
      />
      <img
        className=" absolute opacity-40 md:top-0 top-[4rem] left-0 w-[60%] md:w-[40%]"
        src="purplecright.png"
        alt=""
      />
      <img
        className="stars absolute top-[6rem] md:top-[4rem] left-[14rem] md:left-[12rem]"
        src="starlightpurp.png"
        alt=""
      />
      <img
        className="stars top-[14rem] md:top-[2rem] md:right-[14rem] right-[4rem] absolute"
        src="stargraysmall.png"
        alt=""
      />
      <img
        className="stars z-20 bottom-[23rem] md:bottom-[6rem] md:right-[4rem] right-[2rem] absolute"
        src="starwhite.png"
        alt=""
      />
      <img
        className="stars absolute bottom-[18rem] md:bottom-[16rem] left-[3rem] md:left-[38rem]"
        src="stardp.png"
        alt=""
      />

      <div className="hidden md:block text-white pl-[10rem] w-[80%] md:w-[40%] text-left">
        <h4 className="text-[#d434f8] text-[1.8rem] font-semibold">
          Get in touch
        </h4>
        <p className="text-[1.1rem] pt-4">
          Contact <br /> information
        </p>
        <p className="pt-4 text-[1.1rem]">
          27, Alara Street <br /> Yaba 100012 <br /> Lagos State
        </p>
        <p className="pt-4 text-[1.1rem]">Call Us : 07067981819</p>
        <p className="pt-4 text-[1.1rem]">
          we are open from Monday-Friday <br /> 08:00am-05:00pm
        </p>
        <span>
          <p className="pt-6 font-semibold text-[#d434f8] text-[1.1rem]">
            Share on
          </p>
          <ul className="flex flex-row gap-8">
            <a href="/">
              <li>
                <i class="bx bxl-instagram"></i>
              </li>
            </a>
            <a href="/">
              <li> <img src="x.png" alt="" /> </li>
            </a>
            <a href="/">
              <li>
                <i class="bx bxl-facebook"></i>
              </li>
            </a>
            <a href="/">
              <li>
                <i class="bx bxl-linkedin"></i>
              </li>{" "}
            </a>
          </ul>
        </span>
      </div>
      <div className="py-16 rounded md:bg-[rgba(225,225,225,0.03)] z-20 w-[100%] md:w-[45%]">
        <div className="text-[#d434f8] font-semibold text-left px-[4rem] md:text-[1.8rem] text-[1.7rem]">
          <p>Questions or need assistance?</p>
          <p className="text-[1.5rem]">Let us know about it!</p>
          <p className="text-white pt-4 text-[1rem] md:hidden font-normal">
            Email us below to any question related to our event
          </p>
        </div>
        <form
          className="flex flex-col gap-[2rem] px-[4rem] text-white py-8 "
          onSubmit={submitHandler}
        >
          <input
            className="rounded py-[.4rem] bg-transparent outline-none border-2 border-white px-4 text-[.9rem]"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Team's Name"
          />
          <input
            className="md:hidden rounded py-[.4rem] bg-transparent outline-none border-2 border-white px-4 text-[.9rem] "
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Topic"
          />
          <input
            className="rounded py-[.4rem] bg-transparent outline-none border-2 border-white px-4 text-[.9rem] "
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            placeholder="Email"
          />
          <textarea
            className="rounded py-[.4rem] bg-transparent outline-none border-2 border-white px-4 h-[100px] text-[.9rem] "
            name={text}
            placeholder="Message"
            value={text}
            id=""
            cols="30"
            rows="10"
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-[#fe34b9] to-[#903aff] text-white w-[45%] md:w-[35%] py-[.8rem] md:py-2 rounded">
              Submit
            </button>
          </div>
        </form>
        <span className="md:hidden text-center flex flex-col gap-4 text-white justify-center">
          <p className="pt-6 font-semibold text-[#d434f8] text-[1.1rem]">
            Share on
          </p>
          <ul className="flex flex-row justify-center gap-8">
            <li>Ig</li>
            <li>X</li>
            <li>Fb</li>
            <li>in</li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Contact;
