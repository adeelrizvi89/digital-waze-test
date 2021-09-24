import React from "react";
import Button from "./Button";
import Header from "./Header";
import Table from "./Table";

import WorkDropDown from "./WorkDropDown";

const ProgramAppoinment = () => {
  return (
    <>
      <div className="programeAppoinment-container">
        <header>
          <Button />
          <WorkDropDown />
        </header>
        <section>
          <Table />
        </section>
      </div>
    </>
  );
};

export default ProgramAppoinment;
