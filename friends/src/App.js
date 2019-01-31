import React from "react";
import axios from "axios";

import FriendsList from "./components/FriendsContainer/FriendsList";
import AddNewFriendForm from "./components/FriendsContainer/AddFriendForm";

import "./App.css";

class App extends React.Component {
  state = {
    friends: [],
    newFriend: {
      id: null,
      name: "",
      age: null,
      email: ""
    }
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
    console.log(this.state.friends);
  }

  postNewFriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleChanges = e => {
    this.setState(prevState => {
      return {
        ...prevState.newFriend,
        [e.target.name]: e.target.value
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello Friends!</h1>
        <FriendsList friends={this.state.friends} />
        <AddNewFriendForm
          handleChanges={this.handleChanges}
          postNewFriend={this.postNewFriend}
        />
      </div>
    );
  }
}

export default App;
