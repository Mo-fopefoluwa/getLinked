import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [text, setText] = useState("");

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
          console.log(regObj);
          // navigate("/signin");
        })

        .catch((err) => {
          window.alert("Failed :");
        });
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-[5rem]">
      <div className="w-[80%] md:w-[40%]">
        <h4>Get in touch</h4>
        <p>
          Contact <br /> information
        </p>
        <p>
          27, Alara Street <br /> Yaba 100012 <br /> Lagos State
        </p>
        <p>Call Us:07067981819</p>
        <p>
          we are open from Monday-Friday <br /> 08:00am-05:00pm
        </p>
        <span>
          <p>Share on</p>
          <ul>
            <li>Ig</li>
            <li>X</li>
            <li>Fb</li>
            <li>in</li>
          </ul>
        </span>
      </div>
      <div className="bg-[#3a1c8d31] w-80% md:w-[45%]">
        <p>Questions or need assistance?</p>
        <p>Let us know about it!</p>
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First Name"
          />
          <input
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            placeholder="Mail"
          />
          <input
            type="textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Message"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
