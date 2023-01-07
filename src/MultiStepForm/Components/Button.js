import React from "react";
import "./Button.css";
const Button = ({ setStep, step, stepLength }) => {
  const buttonClick = (params) => {
    if (params === "back") {
      if (step === 1) {
      } else {
        setStep((step) => step - 1);
      }
    } else {
      if (stepLength === step) {
        setStep(1);
      } else {
        setStep((step) => step + 1);
      }
    }
  };
  return (
    <div className="button-container">
      <button
        type="submit"
        className="button-goback"
        onClick={() => buttonClick("back")}
      >
        Go Back
      </button>
      <button
        type="submit"
        className="button"
        onClick={() => buttonClick("Next")}
      >
        Next Step
      </button>
    </div>
  );
};

export default Button;
