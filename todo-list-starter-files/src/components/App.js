import React, { Component } from "react";
import "../styles/reset.css";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    // getInitialState
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <p>Let's make a todo list with React!</p>
      </div>
    );
  }
}

export default App;
