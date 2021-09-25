import React from "react";

const NewAppointmentForm = () => {
  return (
    <div className="newAppoinment">
      <h2>New Program Appoinment</h2>
      <form>
        <div>
          <div>
            <p>
              <label>Paitent Name</label>
            </p>
            <input type="text" placeholder="John Smith"></input>
          </div>
          <div>
            <p>
              <label>Date</label>
            </p>
            <div className="formInput" style={{ backgroundColor: "#c8cfd8" }}>
              <p>24 May 2021</p>
              <i class="fas fa-calendar-week"></i>
            </div>
          </div>
          <div>
            <p>
              <label>Department</label>
            </p>
            <div className="formInput">
              <p>Select</p>
              <i class="fas fa-caret-down"></i>
            </div>
          </div>
          <div>
            <p>
              <label>Doctor Available</label>
            </p>
            <div className="formInput">
              <p>Select</p>
              <i class="fas fa-caret-down"></i>
            </div>
          </div>
          <div>
            <p>
              <label>Phone</label>
            </p>
            <input type="text"></input>
          </div>
          <div>
            <p>
              <label>Email</label>
            </p>
            <input type="text"></input>
          </div>
          <div>
            <p>
              <label>Note</label>
            </p>
            <input type="text" style={{ height: "100px" }}></input>
          </div>
        </div>
        <div>
          <div>
            <p>
              <label>Lorem ipsum</label>
            </p>
            <div className="formInput">
              <p>Select</p>
              <i class="fas fa-caret-down"></i>
            </div>
          </div>
          <div>
            <p>
              <label>Gender</label>
            </p>
            <div className="formInput">
              <p>Select</p>
              <i class="fas fa-caret-down"></i>
            </div>
          </div>
          <div>
            <p>
              <label>Doctor</label>
            </p>
            <div className="formInput">
              <p>Select</p>
              <i class="fas fa-caret-down"></i>
            </div>
          </div>
          <div>
            <p>
              <label>Shedule</label>
            </p>
            <input type="text"></input>
          </div>
          <div>
            <p>
              <label>Type</label>
            </p>
            <input type="text" style={{ backgroundColor: "#c8cfd8" }}></input>
          </div>

          <div>
            <p>
              <label>Address</label>
            </p>
            <input type="text"></input>
          </div>
          <div>
            <p>
              <label>Paitent Note</label>
            </p>
            <input type="text" style={{ height: "100px" }}></input>
          </div>
        </div>
      </form>
      <div className="formButton">
        <div className="cancel">Cancel</div>
        <div className="complete">Complete</div>
      </div>
    </div>
  );
};

export default NewAppointmentForm;
