import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class PostFriendForm extends React.Component {
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

  handleChanges = event => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [event.target.name]: event.target.value
      }
    });
  };

  postNewFriend = e => {
    e.preventDefault();
    this.props.postNewFriend(this.state.newFriend);
  };

  render() {
    return (
      <div className="friend-form-wrapper">
        <Form onSubmit={this.postNewFriend}>
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleChanges}
              value={this.state.newFriend.name}
            />
          </FormGroup>
          <FormGroup>
            <Label>Age</Label>
            <Input
              type="number"
              name="age"
              placeholder="Age"
              onChange={this.handleChanges}
              value={this.state.newFriend.age}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="text"
              name="email"
              placeholder="Email Address"
              onChange={this.handleChanges}
              value={this.state.newFriend.email}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default PostFriendForm;
