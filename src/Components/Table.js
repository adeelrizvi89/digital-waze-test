import React from "react";
import TableInput from "./TableInput";

const Table = () => {
  return (
    <div className="table">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Program Intiation Appoinments</h2>
        <div className="filter">
          <p>
            <i class="fas fa-filter"></i>
          </p>
          <p>Filters</p>
        </div>
      </div>
      <TableInput />
    </div>
  );
};

export default Table;
