import React from "react";
import Button from "../Components/Button";
import AppTable from "../Components/AppTable";
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
            <AppTable title={"Program Initiation Appoinments"} />
          </section>
          <BusinessFlow />
        </div>
      </div>
    </>
  );
};

export default PageTwo;
