import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Join = () => {
  const [name, setname] = useState("");
  const [room, setroom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className='joinInnerContainer'>
        <h1 className='heading'>Join</h1>
        <div>
          <input type="text" placeholder="Name" className="joinInput" onChange={ e => setname(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="Room" className="joinInput" onChange={ e => setroom(e.target.value)} />
        </div>
        <Link onClick={e => (!name || !room ) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
            <button className='button mt-20' type='submit'>
                Sign In
            </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
