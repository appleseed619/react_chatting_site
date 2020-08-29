import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const LandingPage = () => {
  return (
    <div className="lp-container">
      <div className='lp-header'>
        <h1>Welcome!!!</h1>
        <hr />
      </div>
      <div className='lp-nav'>
        <ul>
          <li>
            <Link to={"/gallary"}>
              <button className="lp-btn" type="button">
                Photo Gallary
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/join?to=chat"}>
              <button className="lp-btn" type="button">
                Chat App
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/join?to=planningpoker"}>
              <button className="lp-btn" type="button">
                Planning Poker
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
