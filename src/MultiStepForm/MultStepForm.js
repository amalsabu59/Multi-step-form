import React from "react";
import Form from "./Components/Form";
import SideBar from "./Components/SideBar";

const MultStepForm = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar />
      <Form />
    </div>
  );
};

export default MultStepForm;
