import React from "react";

const CurriculamHeader = () => {
  return (
    <>
      <header>
        <h3>Curriculam Of Program</h3>
        <div className="options">
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
        </div>
      </header>
    </>
  );
};

export default CurriculamHeader;
