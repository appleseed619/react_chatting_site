import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome!!!</h1>
      <ul>
        <li>
          <Link to={'/gallary'}>
            <button className="" type="button">
              Photo Gallary
            </button>
          </Link>
        </li>
        <li>
          <Link to={'/join'}>
            <button className="" type="button">
              Chat App
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LandingPage;
