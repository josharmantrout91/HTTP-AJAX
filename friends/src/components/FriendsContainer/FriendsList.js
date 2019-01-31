import React from "react";
import Friend from "./Friend";

import "./Friends.css";

const FriendsList = props => {
  return (
    <div className="friends-wrapper">
      {props.friends.map(f => (
        <Friend friend={f} />
      ))}
    </div>
  );
};

export default FriendsList;
