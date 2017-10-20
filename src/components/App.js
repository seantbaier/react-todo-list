import React, { Component } from "react";
import "../styles/reset.css";
import "../styles/App.css";

// Import components
import List from "./List";
import InputForm from "./InputForm";
import Header from "./Header";

class App extends Component {
  constructor() {
    super();

    this.newItemSubmitHandler = this.newItemSubmitHandler.bind(this);
    this.handleItemInput = this.handleItemInput.bind(this);
    this.removeItemAt = this.removeItemAt.bind(this);

    // getInitialState
    this.state = {
      list: [
        {
          item: "Inventive Acaedmy Logo Design",
          id: 0
        },
        {
          item: "Daily Standup",
          id: 1
        },
        { item: "Reschedule lunch meeting", id: 2 },
        {
          item: "Read emails",
          id: 3
        }
      ],
      pendingItem: ""
    };
  }

  lastItemId = 3;

  newItemId = () => {
    const id = this.lastItemId;
    this.lastItemId += 1;
    return id;
  };

  removeItemAt = id => {
    this.setState({ list: this.state.list.filter(guest => id !== guest.id) });
  };

  handleItemInput = e => this.setState({ pendingItem: e.target.value });

  newItemSubmitHandler = e => {
    e.preventDefault();
    const id = this.newItemId();
    this.setState({
      list: [
        {
          item: this.state.pendingItem,
          id
        },
        ...this.state.list
      ],
      pendingItem: ""
    });
  };

  render() {
    return (
      <div className="wrapper">
        <Header />
        <InputForm
          newItemSubmitHandler={this.newItemSubmitHandler}
          handleItemInput={this.handleItemInput}
          pendingItem={this.state.pendingItem}
        />

        <List list={this.state.list} removeItemAt={this.removeItemAt} />
      </div>
    );
  }
}

export default App;
