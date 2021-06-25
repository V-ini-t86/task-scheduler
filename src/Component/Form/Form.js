import React from "react";
import "./Form.css";
function Form({ show, handleClose }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  console.log(show);
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button onClick={handleClose}>X</button>
        <h1>Create Form</h1>
        <form>
          <div className="form__name">
            <label>Name : </label>
            <input />
          </div>

          <div className="form__name">
            <label>Timing : </label>
            <div>
              <Select />
              <select>
                <option>A.M</option>
                <option>P.M</option>
              </select>
              <span> to </span>
              <Select />
              <select>
                <option>A.M</option>
                <option>P.M</option>
              </select>
            </div>
          </div>
          <div className="form__name">
            <label>Day : </label>
            <div>
              <Day />
              <label style={{ marginLeft: "25px" }}> Month : </label>
              <select name="dob-month" class="datefield month">
                {/* <option value="">Month</option> */}
                <option value="01">Jan</option>
                <option value="02">Feb</option>
                <option value="03">Mar</option>
                <option value="04">Apr</option>
                <option value="05">May</option>
                <option value="06">Jun</option>
                <option value="07">Jul</option>
                <option value="08">Aug</option>
                <option value="09">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
            </div>
          </div>
          <div className="form__name">
            <label>Batches : </label>
            <input />
          </div>

          <button className="form__submit">Add</button>
        </form>
      </section>
    </div>
  );
}

function Day() {
  const d = [];
  for (let i = 1; i <= 31; i++) {
    d.push(i);
  }
  return (
    <select>
      {d.map((val, i, d) => {
        return <option key={i}>{val}</option>;
      })}
    </select>
  );
}

function Select() {
  return (
    <select>
      <option>12:00</option>
      <option>12:15</option>
      <option>12:30</option>
      <option>12:45</option>
      <option>1:00</option>
      <option>1:15</option>
      <option>1:30</option>
      <option>1:45</option>
      <option>2:00</option>
      <option>2:15</option>
      <option>2:30</option>
      <option>2:45</option>
      <option>3:00</option>
      <option>3:15</option>
      <option>3:30</option>
      <option>3:45</option>
      <option>4:00</option>
      <option>4:15</option>
      <option>4:30</option>
      <option>4:45</option>
      <option>5:00</option>
      <option>5:15</option>
      <option>5:30</option>
      <option>5:45</option>
      <option>6:00</option>
      <option>6:15</option>
      <option>6:30</option>
      <option>6:45</option>
      <option>7:00</option>
      <option>7:15</option>
      <option>7:30</option>
      <option>7:45</option>
      <option>8:00</option>
      <option>8:15</option>
      <option>8:30</option>
      <option>8:45</option>
      <option>9:00</option>
      <option>9:15</option>
      <option>9:30</option>
      <option>9:45</option>
      <option>10:00</option>
      <option>10:15</option>
      <option>10:30</option>
      <option>10:45</option>
      <option>11:00</option>
      <option>11:15</option>
      <option>11:30</option>
      <option>11:45</option>
    </select>
  );
}

export default Form;
