import React from "react";

const TableInput = () => {
  return (
    <div className="tableInput">
      <input type="text" placeholder="Name"></input>
      <input type="text" placeholder="Name"></input>
      <input type="text" placeholder="Name"></input>
      <input type="text" placeholder="Name"></input>
      <input type="text" placeholder="Name"></input>
      <input type="text" placeholder="Name"></input>
      <div className="filter">
        <p>
          <i class="fas fa-filter"></i>
        </p>
        <p>Apply Filters</p>
      </div>
    </div>
  );
};

export default TableInput;
