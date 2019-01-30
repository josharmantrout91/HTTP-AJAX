import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data.friends });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Hello Friends!</h1>
      </div>
    );
  }
}

export default App;
