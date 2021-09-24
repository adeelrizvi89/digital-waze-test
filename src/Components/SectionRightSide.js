import React, { useState } from "react";
import Curriculam2Programs from "./Curriculam2Programs";
import CurriculamContain from "./CurriculamContain";
import CurriculamHeader from "./CurriculamHeader";
import CurriculamProgram from "./CurriculamProgram";

const SectionRightSide = () => {
  const curriculamProgrames = [
    {
      stepNumber: "1",
      date: "24 May 2021",
      steps: [
        {
          heading: "Psychoanalytic Couple Theraphy",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
      ],
    },
    {
      stepNumber: "2",
      date: "25 May 2021",
      steps: [
        {
          heading: "Head and Neck Couple Theraphy",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
          heading: "Psychoanalytic Couple Theraphy",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
      ],
    },
    {
      stepNumber: "3",
      date: "28 May 2021",
      steps: [
        {
          heading: "Head and Neck Couple Theraphy",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
          heading: "Psychoanalytic Couple Theraphy",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
      ],
    },
    {
      stepNumber: "4",
      date: "29 May 2021",
      steps: [
        {
          heading: "Head and Neck Couple Theraphy",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
          heading: "Psychoanalytic Couple Theraphy",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
      ],
    },
    {
      stepNumber: "5",
      date: "31 May 2021",
      steps: [
        {
          heading: "Head and Neck Couple Theraphy",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
          heading: "Psychoanalytic Couple Theraphy",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
      ],
    },
  ];

  return (
    <>
      <div className="rightSide">
        <CurriculamHeader />
        <section className="curriculam-container">
          <CurriculamContain />
          {/* <CurriculamProgram /> */}
          {curriculamProgrames.map((x) => (
            <Curriculam2Programs
              stepNumber={x.stepNumber}
              date={x.date}
              steps={x.steps}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default SectionRightSide;
