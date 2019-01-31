import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class AddNewFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newFriend: {
        id: null,
        name: "",
        age: null,
        email: ""
      }
    };
  }

  handleChanges = e => {
    this.setState(prevState => {
      return {
        ...prevState.newFriend,
        [e.target.name]: e.target.value
      };
    });
  };

  postNewFriend = e => {
    e.preventDefault();
    this.props.postNewFriend(this.state.newFriend);
  };

  render() {
    return (
      <div className="friend-form-wrapper">
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

export default AddNewFriendForm;
