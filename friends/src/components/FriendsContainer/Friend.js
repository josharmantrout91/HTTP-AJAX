import React from "react";

const Friend = props => {
  return (
    <div className="friend-card">
      <h2>Hey! My name is {`${props.friend.name}`}</h2>
      <p>I'm {`${props.friend.age}`} years old</p>
      <p>My email address is {`${props.friend.email}`}</p>
    </div>
  );
};

export default Friend;
