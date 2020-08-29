import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import qs from "query-string";
import UserIcon from "./UserIcon";
import MyInput from "./MyInput";
import "./style.css";

let socket;

const PlanningPoker = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState([]);
  const [myPoints, setMyPoints] = useState("");
  const [points, setPoints] = useState("");

  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = qs.parse(location.search);
    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    socket.emit("disconnect");
    return () => {
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendPoints = (e) => {
    e.preventDefault();
    
    if (myPoints) {
      socket.emit("sendPoints", myPoints, () => {
        setMyPoints("");
        setPoints(myPoints);
      });
      alert("Your response saved successfully!!!");
    }
  };

  const flipCards = (e) => {
    e.preventDefault();
    socket.emit("flipCards", myPoints, () => {
      setMyPoints("");
    });
  };

  console.log(users);
  return (
    <div className="pp-container1">
      <MyInput
        myPoints={myPoints}
        setMyPoints={setMyPoints}
        sendPoints={sendPoints}
        flipCards={flipCards}
      />
      <div className='pp-subheader'>
        <h2>{points && `You have given ${points} story points!!!!`}</h2>
      </div>
      <div className="pp-container">
        {users && users.map((user) => <UserIcon key={user.id} user={user} />)}
      </div>
    </div>
  );
};

export default PlanningPoker;
