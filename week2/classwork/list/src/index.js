import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import List from "./List";

import "./styles.css";

class App extends Component {
  state = {
    items: [{ text: "test1", id: 1 }, { text: "test2", id: 2 }]
  };

  addItem = newItemText => {
    const lastItemId = this.state.items[this.state.items.length - 1].id;
    const newItem = { text: newItemText, id: lastItemId + 1 };
    const newItems = this.state.items.concat(newItem);
    this.setState({ items: newItems });
  };

  render() {
    const { items } = this.state;
    return (
      <div className="app">
        <Header addItem={this.addItem} />
        <List items={items} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
