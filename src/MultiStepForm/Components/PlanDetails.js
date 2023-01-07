import React from "react";
import "./PlanDetails.css";
const archadeIcon = require("../../assets/images/icon-arcade.svg").default;
const advancedIcon = require("../../assets/images/icon-advanced.svg").default;
const proIcon = require("../../assets/images/icon-pro.svg").default;
const data = [
  { id: 1, icon: archadeIcon, plan: "Archade", price: "$9/mo" },
  { id: 1, icon: advancedIcon, plan: "Advanced", price: "$12/mo" },
  { id: 1, icon: proIcon, plan: "Pro", price: "$15/mo" },
];
const PlanDetails = () => {
  return (
    <div style={{ marginLeft: "100px" }}>
      <text>
        <h1 className="heading">Select Your Plan</h1>
        <p className="sub-heading">
          You have the optiion of monthly or yearly billing
        </p>
      </text>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {data.map((item) => (
          <div class="card">
            <div class="container">
              <div className="icon-container">
                <img src={item.icon} alt="mySvgImage" />
              </div>
              <h4>
                <b>{item.plan}</b>
              </h4>
              <p className="text-content">{item.price} </p>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "100px",
          marginLeft: "150px",
        }}
      >
        <p
          style={{
            marginRight: "10px",
          }}
        >
          Monthly
        </p>
        <label
          className="switch"
          style={{
            marginRight: "10px",
          }}
        >
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <p>Yearly</p>
      </div>
    </div>
  );
};

export default PlanDetails;
