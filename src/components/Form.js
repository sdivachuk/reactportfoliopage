import React from "react";
import "./style.css";

function Form() {
  return (
    <div>
      <h1>Contact</h1>
      <card id="textCard">
        <div>
          <form className="contactForm">
            <input type="text" placeholder="Name" />
          </form>
          <form className="contactForm">
            <input type="text" placeholder="email" />
          </form>
        </div>
        <form className="contactForm">
          <input type="text-box" placeholder="" />
          <div>
            <button type="button">Submit</button>
          </div>
        </form>
      </card>
    </div>
  );
}

export default Form;
