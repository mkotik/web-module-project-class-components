import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <div className="formWrap">
        <input
          value={this.props.currentEntry.task}
          onChange={this.props.onInputChange}
          placeholder="...todo"
          onKeyDown={this.props.onAddTodo}
          className="input"
        />
        <button className="btn btn-success" onClick={this.props.onAddTodo}>
          Add Todo
        </button>
        <button className="btn btn-primary" onClick={this.props.clearCompleted}>
          Clear Completed
        </button>
      </div>
    );
  }
}

export default TodoForm;
