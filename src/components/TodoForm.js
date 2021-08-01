import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <input
          value={this.props.currentEntry.task}
          onChange={this.props.onInputChange}
          placeholder="...todo"
          onKeyDown={this.props.onAddTodo}
        />
        <button onClick={this.props.onAddTodo}>Add Todo</button>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default TodoForm;
