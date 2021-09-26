import React from "react";

const FormDropDown = ({ label, options }) => {
  return (
    <>
      <p>
        <label>{label}</label>
      </p>
      <select name="cars" id="cars" className="selectBox">
        <option value="lorem">1</option>
        <option value="lorem">2</option>
        <option value="lorem">3</option>
        <option value="lorem">4</option>
      </select>
    </>
  );
};

export default FormDropDown;
