// Taken from here: https://codesandbox.io/s/ox91q0v87y

import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class HelloMessage extends Component {
  render() {
    const { name } = this.props;
    return (
      <div id="app">
        <h3>hello {name}</h3>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: []
    };

    setTimeout(() => {
      console.log("done");
      const newNames = this.state.names.concat("younes");
      this.setState({ names: newNames });
    }, 3000);
  }

  render() {
    //const names = ["younes", "natalia"];

    const { names } = this.state;

    return (
      <div className="app">
        <h1>Hello CodeSandbox</h1>

        {names.length > 0 ? (
          names.map(name => <HelloMessage name={name} />)
        ) : (
          <p>no names </p>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
