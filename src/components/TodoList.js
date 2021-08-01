// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <input
          className="input"
          placeholder="..search"
          onChange={this.props.search}
        />
        {this.props.Todo.map((item, i) => (
          <Todo
            task={item.task}
            id={item.id}
            completed={item.completed}
            clickItem={this.props.clickItem}
            key={i}
          />
        ))}
        <TodoForm
          onInputChange={this.props.onInputChange}
          onAddTodo={this.props.onAddTodo}
          currentEntry={this.props.currentEntry}
          clearCompleted={this.props.onClearCompleted}
        />
      </div>
    );
  }
}

export default TodoList;
