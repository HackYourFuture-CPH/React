import React from "react";

class List extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default List;
