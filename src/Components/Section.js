import React from "react";
import Curriculam2Programs from "./Curriculam2Programs";
import CurriculamContain from "./CurriculamContain";
import CurriculamHeader from "./CurriculamHeader";
import CurriculamProgram from "./CurriculamProgram";
import capture from "../Images/capture.PNG";

const Section = () => {
  return (
    <div className="section">
      <div className="leftSide">
        <img src={capture}></img>
      </div>
      <div className="rightSide">
        <CurriculamHeader />
        <section className="curriculam-container">
          <CurriculamContain />
          <CurriculamProgram />
          <Curriculam2Programs />
          <Curriculam2Programs />
          <Curriculam2Programs />
          <Curriculam2Programs />
        </section>
      </div>
    </div>
  );
};

export default Section;
