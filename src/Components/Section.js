import React from "react";

import capture from "../Images/capture.PNG";
import SectionLeftSide from "./SectionLeftSide";
import SectionRightSide from "./SectionRightSide";

const Section = () => {
  return (
    <div className="section">
      <SectionLeftSide />
      <SectionRightSide />
    </div>
  );
};

export default Section;
