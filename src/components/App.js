import React, { Component } from "react";
import "../styles/reset.css";
import "../styles/App.css";

// Import components
import List from "./List";
import InputItem from "./InputItem";
import Header from "./Header";

class App extends Component {
  constructor() {
    super();

    // getInitialState
    this.state = {
      list: [
        { item: "Inventive Acaedmy Logo Design" },
        { item: "Daily Standup" },
        { item: "Reschedule lunch meeting" },
        { item: "Read emails" }
      ],
      pendingItem: ""
    };
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <InputItem />

        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
