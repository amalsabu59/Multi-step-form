import React, { useState } from "react";
import Button from "./Components/Button";
import Form from "./Components/Form";
import PlanDetails from "./Components/PlanDetails";
import SideBar from "./Components/SideBar";
import AddOns from "./Components/AddOns";
import Summary from "./Components/Summary";
import Thankyou from "./Components/ThankYou";
const MultStepForm = () => {
  const [step, setStep] = useState(1);
  const components = [
    { component: Form, id: 1 },
    { component: PlanDetails, id: 2 },
    { component: AddOns, id: 3 },
    { component: Summary, id: 4 },
    { component: Thankyou, id: 5 },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar setStep={setStep} step={step} />
      <div>
        {/* <Form /> */}
        {components.map((item) => {
          return item.id === step && <item.component />;
        })}

        {step <= 4 && (
          <Button
            setStep={setStep}
            step={step}
            stepLength={components.length}
          />
        )}
      </div>
    </div>
  );
};

export default MultStepForm;
