import React from "react";
import "./style.css";

function Form() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <form class="form">
        <p type="Name:">
          <input placeholder="Write your name here.."></input>
        </p>
        <p type="Email:">
          <input placeholder="Let me know how to contact you back.."></input>
        </p>
        <p type="Message:">
          <input placeholder="What would you like to tell me.."></input>
        </p>
        <button id="sendbtn" type="button">
          Send Message
        </button>
        <div id="contactinfo">
          <span></span> sergeydivachuk@gmail.com
        </div>
      </form>
    </div>
  );
}

export default Form;
