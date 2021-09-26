import React from "react";
import Button from "../Components/Button";
import Table from "../Components/Table";
import BusinessFlow from "../Components/BusinessFlow";
import WorkDropDown from "../Components/WorkDropDown";

const PageTwo = () => {
  return (
    <>
      <div className="container">
        <div className="programeAppoinment-container">
          <header>
            <Button />
            <WorkDropDown />
          </header>
          <section>
            <Table />
          </section>
          <BusinessFlow />
        </div>
      </div>
    </>
  );
};

export default PageTwo;
