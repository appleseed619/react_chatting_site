import React from "react";
import "./style.css";

const MyInput = ({ myPoints, setMyPoints, sendPoints, flipCards }) => {
  return (
    <div className="im-container">
      <div>
        <input
          className="im-input"
          type="tel"
          name="myInput"
          id="points"
          min='1'
          value={myPoints}
          placeholder="Enter your points"
          onChange={ e => setMyPoints(e.target.value)}
        />
      </div>
      <div>
        <button type="button" className="im-input im-btn" onClick={ e => sendPoints(e)}>
          SUBMIT
        </button>
        <button type="button" className="im-input im-btn" onClick={ e => flipCards(e)}>
          Flip The Cards!!
        </button>
      </div>
    </div>
  );
};

export default MyInput;
