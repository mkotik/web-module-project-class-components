import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <h3
        onClick={this.props.clickItem}
        id={this.props.id}
        style={{
          textDecoration: this.props.completed ? "line-through" : "none",
          color: this.props.completed ? "green" : "black",
        }}
      >
        - {this.props.task}
      </h3>
    );
  }
}

export default Todo;
