import React from "react";

const Section = () => {
  return (
    <div className="section">
      <div className="leftSide">a</div>
      <div className="rightSide">
        <header>
          <h3>Curriculam Of Programme</h3>
          <div className="email">
            <i class="fas fa-envelope"></i>
            <span>Send Email</span>
          </div>
          <div className="download">
            <i class="fas fa-download"></i>
            <span>Download</span>
          </div>

          <div className="print">
            <i class="fas fa-print"></i>
            <span>Print</span>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Section;
