import React from "react";

const Section = () => {
  return (
    <div className="section">
      <div className="leftSide">a</div>
      <div className="rightSide">
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
        <section className="curriculam-container">
          <h4>Psychoanalytic Couple Theraphy</h4>
          <p className="curriculam-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="curriculam-date">
            <p>
              Choose Start Date : 24 May 2021{" "}
              <i class="fas fa-calendar-week"></i>
            </p>
            <p>Apporoval Number : 22210 </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Section;
