import React from "react";
import Header from "../Components/Header";
import BusinessFlow from "./BusinessFlow";
import Section from "./Section";

const MainSection = () => {
  return (
    <>
      <div className="mainSection">
        <Header />
        <Section />
        <BusinessFlow />
      </div>
    </>
  );
};

export default MainSection;
