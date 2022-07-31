import React from "react";
import "./style.css";

function Form() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <card id="textCard">
        <div>
          <form className="contactForm">
            <label>Name </label>
            <input type="text" className="inputfield" placeholder="" />
          </form>
          <form className="contactForm">
          <label>Email </label>
            <input type="text" className="inputfield" placeholder="" />
          </form>
        </div>
        <form className="contactForm" >
          <textarea className="inputfield" id="subject"  placeholder="" />
          <div>
            <button id="formbtn" type="button">Submit</button>
          </div>
        </form>
      </card>
    </div>
  );
}

export default Form;
