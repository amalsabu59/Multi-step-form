import React from "react";
import "./sideBar.css";
import { sideBarDetails } from "../../assets/sideBarDetails";
const SideBar = ({ step }) => {
  return (
    <div className="sidebar-body">
      <div className="sidebar-img">
        <img
          src={require("../../assets/images/bg-sidebar-desktop.svg").default}
          alt="mySvgImage"
        />
      </div>
      {sideBarDetails.map((item) => {
        return (
          <section
            className="selection-section"
            style={{ bottom: item.margintop }}
          >
            <div className="contents">
              <p
                className={
                  step === item.id ? "circle-afterSelection" : "circle"
                }
              >
                {item.id}
              </p>
            </div>
            <div className="contents">
              <p className="content-one">{item.step}</p>
              <p className="content-two">{item.contents}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default SideBar;
