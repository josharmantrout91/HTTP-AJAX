import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const FriendsList = props => {
  return (
    <div className="allMyFriends">
      <h1>{props.friend.name}</h1>
      <p>{props.friend.age}</p>
      <p>{props.friend.email}</p>
    </div>
  );
};

export default FriendsList;
