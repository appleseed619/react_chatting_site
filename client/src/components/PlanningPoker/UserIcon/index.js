import React from "react";
import "./style.css";

const UserIcon = (props) => {
  const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <div class="ui-box">
      <h1>
          {capitalize(props.user.name || 'PERSON')}
      </h1>
      <div class={`ui-poster p${rand(1, 16)}`}>
        <h4>{ props.user.showPoints ? props.user.points : 'Z'}</h4>
      </div>
    </div>
  );
};

export default UserIcon;
