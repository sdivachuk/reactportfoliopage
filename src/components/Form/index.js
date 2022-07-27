import React, { useState } from "react";
import "../style.css";

function Form() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    return name === "inputName" ? setInputName(value) : setInputEmail(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="form">
        <input
          value={inputName}
          name="inputName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={inputEmail}
          name="inputEmail"
          onChange={handleInputChange}
          type="text"
          placeholder="email"
        />
        <input
          value={userMessage}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder=""
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
