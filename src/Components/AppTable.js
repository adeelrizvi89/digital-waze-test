import React from "react";
import Table from "./Table";
import TableFilters from "./TableFilters";

const AppTable = ({ title }) => {
  return (
    <div className="table">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>{title}</h2>
        <div className="filter">
          <p>
            <i class="fas fa-filter"></i>
          </p>
          <p>Filters</p>
        </div>
      </div>
      <TableFilters />
      <Table />
    </div>
  );
};

export default AppTable;
