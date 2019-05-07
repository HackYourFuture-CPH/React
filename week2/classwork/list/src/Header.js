import React from "react";

class Header extends React.Component {
  state = {
    inputValue: ""
  };

  inputChangeHandler = e => {
    const newText = e.target.value;
    this.setState({ inputValue: newText });
  };

  clickHandler = () => {
    const inputValue = this.state.inputValue;
    this.props.addItem(inputValue);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <input
          placeholder="add something"
          value={inputValue}
          onChange={this.inputChangeHandler}
        />
        <button onClick={this.clickHandler}>ADD</button>
      </div>
    );
  }
}

export default Header;
