import React from "react";
import "./Thankyou.css";
const tankyouIcon = require("../../assets/images/icon-thank-you.svg").default;
const Thankyou = () => {
  return (
    <div className="center" style={{ marginLeft: "100px" }}>
      <div style={{ marginTop: "20%" }}>
        <div className="icon-container-thankyou">
          <img src={tankyouIcon} alt="mySvgImage" />
        </div>
        <h1 className="tankyou-h1">Thank You!</h1>
        <p className="contents-thankyou">
          Thanks for confirming your subscription! We hope you have fun using
          our platform.if you ever need support,please feel free to email us at
          supprt@lalfa.com
        </p>
      </div>
    </div>
  );
};

export default Thankyou;
