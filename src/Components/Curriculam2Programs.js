import React from "react";

const Curriculam2Programs = ({ stepNumber, date, steps }) => {
  console.log("Adeel", steps);
  return (
    <>
      <div className="curriculam-section">
        <div className="curriculam-step">
          <p style={{ height: "150px", padding: "30px 0px" }}>
            Step<br></br>
            <span
              style={{
                fontWeight: "bold",
                color: "black",
                fontSize: "16px",
              }}
            >
              {stepNumber}
            </span>
            <br></br>
            {date}
            <br></br>
            <a href="#">create appoinment</a>
          </p>
          <div className="about-curriculam-step">
            {steps.map((x) => (
              <div className="step">
                <h4>{x.heading}</h4>
                <span style={{ fontSize: "12px", color: "#858585" }}>
                  {x.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Curriculam2Programs;
