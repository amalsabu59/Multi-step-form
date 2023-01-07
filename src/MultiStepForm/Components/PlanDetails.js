import React, { useState } from "react";
import "./PlanDetails.css";
const archadeIcon = require("../../assets/images/icon-arcade.svg").default;
const advancedIcon = require("../../assets/images/icon-advanced.svg").default;
const proIcon = require("../../assets/images/icon-pro.svg").default;
const data = [
  {
    id: 1,
    icon: archadeIcon,
    plan: "Archade",
    price: "$9/mo",
    selected: false,
  },
  {
    id: 2,
    icon: advancedIcon,
    plan: "Advanced",
    price: "$12/mo",
    selected: false,
  },
  { id: 3, icon: proIcon, plan: "Pro", price: "$15/mo", selected: false },
];
const dataYearly = [
  {
    id: 1,
    icon: archadeIcon,
    plan: "Archade",
    price: "$80/yr",
    selected: false,
  },
  {
    id: 2,
    icon: advancedIcon,
    plan: "Advanced",
    price: "$120/yr",
    selected: false,
  },
  { id: 3, icon: proIcon, plan: "Pro", price: "$150/yr", selected: false },
];
const PlanDetails = () => {
  const [planData, setPlanData] = useState(data);
  const [isYearly, setIsYearly] = useState(false);
  const handleSelect = (id) => {
    const selctedItem = planData.map((item) => {
      return item.id === id
        ? {
            ...item,
            selected: !item.selected,
          }
        : { ...item };
    });
    return setPlanData(selctedItem);
  };
  const handleSlider = (e) => {
    if (e.target.checked) {
      setPlanData(dataYearly);
      setIsYearly(true);
    }
    if (!e.target.checked) {
      setPlanData(data);
      setIsYearly(false);
    }
  };
  return (
    <div style={{ marginLeft: "100px" }}>
      <text>
        <h1 className="heading">Select Your Plan</h1>
        <p className="sub-heading">
          You have the optiion of monthly or yearly billing
        </p>
      </text>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {planData.map((item) => (
          <div
            className={item.selected ? "card-selected" : "card"}
            onClick={() => handleSelect(item.id)}
          >
            <div className="container">
              <div className="icon-container">
                <img src={item.icon} alt="mySvgImage" />
              </div>
              <h4>
                <b>{item.plan}</b>
              </h4>
              <p className="text-content">{item.price} </p>
              {isYearly && <p>2 months free</p>}
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
          <input type="checkbox" onChange={(e) => handleSlider(e)} />
          <span className="slider round"></span>
        </label>
        <p>Yearly</p>
      </div>
    </div>
  );
};

export default PlanDetails;
