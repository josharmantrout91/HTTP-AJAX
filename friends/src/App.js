import React from "react";
import axios from "axios";

import FriendsList from "./components/FriendsList";
import AddNewFriendForm from "./components/AddFriendForm";

import "./App.css";

class App extends React.Component {
  state = {
    friends: []
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

  render() {
    return (
      <div className="App">
        <h1>Hello Friends!</h1>
        {this.state.friends.map(friend => (
          <FriendsList friend={friend} />
        ))}
        <AddNewFriendForm />
      </div>
    );
  }
}

export default App;
