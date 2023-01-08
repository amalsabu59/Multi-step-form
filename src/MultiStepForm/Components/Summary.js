import React from "react";
import "./Summary.css";
const summary = () => {
  return (
    <>
      <div style={{ marginLeft: "100px" }}>
        <text>
          <h1 className="heading">Finishing up</h1>
          <p className="sub-heading">
            Double-check everything looks OK Before confirming
          </p>
        </text>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
          }}
        >
          <div
            className={"card-summary"}
            style={{ display: "flex", flexDirection: "column" }}
            //   onClick={() => handleSelect(item.id)}
          >
            <div className="container" style={{ display: "flex" }}>
              <div>
                <p style={{ marginBottom: "10px" }}>
                  <b style={{ color: " #183074" }}>Acade(Yearly)</b>
                </p>
                <p> change</p>
              </div>
              <div style={{ marginLeft: "250px", marginTop: "30px" }}>
                <b>$90/yr</b>
              </div>
            </div>
            <div
              style={{
                borderTop: ".5px solid rgb(139, 140, 141)",
                marginLeft: 20,
                marginRight: 20,
              }}
            ></div>
            <div className="container" style={{ display: "flex" }}>
              <div>
                <p> online service</p>
                <p> Larger storage</p>
              </div>

              <div style={{ marginLeft: "250px" }}>
                <p>+$10/yr</p>
                <p>+$20/yr</p>
              </div>

              {/* <p className="text-content">{item.subHeading}</p> */}
            </div>
          </div>
          <div className="container" style={{ display: "flex" }}>
            <div>
              <p>Total Per Year</p>
            </div>

            <div style={{ marginLeft: "250px", marginTop: "15px" }}>
              <b style={{ color: "rgb(37, 37, 212)", fontSize: "18px" }}>
                $120/yr
              </b>
            </div>

            {/* <p className="text-content">{item.subHeading}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default summary;
