import React, { useState } from "react";
import Button from "./Components/Button";
import Form from "./Components/Form";
import PlanDetails from "./Components/PlanDetails";
import SideBar from "./Components/SideBar";

const MultStepForm = () => {
  const [step, setStep] = useState(1);
  const components = [
    { component: Form, id: 1 },
    { component: PlanDetails, id: 2 },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar setStep={setStep} step={step} />
      <div>
        {/* <Form /> */}
        {components.map((item) => {
          return item.id === step && <item.component />;
        })}

        <Button setStep={setStep} step={step} stepLength={components.length} />
      </div>
    </div>
  );
};

export default MultStepForm;
