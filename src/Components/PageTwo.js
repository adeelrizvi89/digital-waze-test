import React from "react";
import Button from "./Button";
import Table from "./Table";
import BusinessFlow from "./BusinessFlow";
import WorkDropDown from "./WorkDropDown";

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
