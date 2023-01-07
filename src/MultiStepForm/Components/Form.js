import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div style={{ marginLeft: "100px" }}>
      <text>
        <h1 className="heading">Personal Info</h1>
        <p className="sub-heading">
          Please Provide Name Email Address and Phone Number
        </p>
      </text>
      <form className="contact-form">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" id="name" name="name" className="form-input" />
        <br />
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input type="email" id="email" name="email" className="form-input" />
        <br />
        <label htmlFor="phone" className="form-label">
          Phone Number
        </label>
        <input type="text" id="phone" name="phone" className="form-input" />
        <br />

        <button type="submit" className="form-button">
          Next Step
        </button>
      </form>
    </div>
  );
};

export default Form;
