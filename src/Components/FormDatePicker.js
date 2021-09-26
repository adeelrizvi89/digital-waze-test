import React from "react";

const FormDatePicker = ({ label }) => {
  return (
    <>
      <p>
        <label>{label}</label>
      </p>
      <input type="date" id="birthday" name="birthday"></input>
    </>
  );
};

export default FormDatePicker;
