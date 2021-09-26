import React from "react";

const FormTextBox = ({ label, placeholder, isMultiLines }) => {
  return (
    <>
      <div>
        <p>
          <label>{label}</label>
        </p>
        <input
          type={isMultiLines ? "textarea" : "text"}
          placeholder={placeholder}
        ></input>
      </div>
    </>
  );
};

export default FormTextBox;
