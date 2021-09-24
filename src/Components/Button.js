import React from "react";

const Button = () => {
  return (
    <div className="button">
      <span
        style={{ background: "#3a6cf1", padding: "5px 20px", color: "#fff" }}
      >
        ON
      </span>
      <span
        style={{
          background: "#fff",
          padding: "5px 20px",
          color: "#3a6cf1",
          border: "1px solid #3a61cf1",
        }}
      >
        OFF
      </span>
    </div>
  );
};

export default Button;
