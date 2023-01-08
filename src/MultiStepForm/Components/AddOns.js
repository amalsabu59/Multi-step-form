import React, { useState } from "react";
import "./AddOns.css";

const dataMonthly = [
  {
    id: 1,
    plan: "Online service",
    subHeading: "Access to multiplayer games",
    price: "+$1/mo",
    selected: false,
  },
  {
    id: 2,
    plan: "Larger storage",
    subHeading: "Extra 1TB cloud save",
    price: "+$2/mo",
    selected: false,
  },
  {
    id: 3,
    plan: "Customizable profile",
    subHeading: "Custom theme on your profile",
    price: "+$2/mo",
    selected: false,
  },
];
const AddOns = () => {
  const [data, setData] = useState(dataMonthly);
  const handleSelected = (id) => {
    const filteredData = data.map((item) => {
      return item.id === id ? { ...item, selected: !item.selected } : item;
    });
    setData(filteredData);
  };
  return (
    <>
      <div style={{ marginLeft: "100px" }}>
        <text>
          <h1 className="heading">Select Your Plan</h1>
          <p className="sub-heading">Access to multiplayer games</p>
        </text>
        {data.map((item) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "20px",
              }}
            >
              <div
                className={item.selected ? "selected-card-addon" : "card-addon"}
                style={{ display: "flex", flexDirection: "row" }}
                //   onClick={() => handleSelect(item.id)}
              >
                <div className="checkbox">
                  <label class="container">
                    <input
                      type="checkbox"
                      onChange={(e) => handleSelected(item.id)}
                    />
                  </label>
                </div>
                <div className="container">
                  <p style={{ marginBottom: "20px" }}>
                    <b style={{ color: " #183074" }}>{item.plan}</b>
                  </p>
                  <p className="text-content">{item.subHeading}</p>
                </div>
                <div className="addon-container">
                  <p className="addOn-text">{item.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AddOns;
