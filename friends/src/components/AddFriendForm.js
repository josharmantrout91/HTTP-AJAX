import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class AddNewFriendForm extends React.Component {
  render() {
    return (
      <div className="addNewFriend">
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Name</Label>
            <Input
              type="name"
              name="name"
              id="newFriendName"
              placeholder="First Name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Age</Label>
            <Input type="age" name="age" id="newFriendAge" placeholder="Age" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleUrl">Email</Label>
            <Input
              type="email"
              name="email"
              id="newFriendEmail"
              placeholder="Email Address"
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}
