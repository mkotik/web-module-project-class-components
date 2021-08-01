import React from "react";
import TodoList from "./components/TodoList";
import "./components/Todo.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Todo: [{ task: "organize", id: 100, completed: false }],
      currentEntry: { task: "", id: 0, completed: false },
    };
  }

  onInputChange = (e) => {
    const value = e.target.value;
    this.setState({
      currentEntry: { task: value, id: Date.now(), completed: false },
    });
  };

  search = (e) => {
    const value = e.target.value;
    const localState = JSON.parse(localStorage.Todo);
    const newState = value
      ? this.state.Todo.filter((item) => {
          return item.task.includes(value);
        })
      : localState;
    this.setState({ Todo: newState });
  };

  onAddTodo = (e) => {
    console.log(e.type);
    if (e.type === "keydown" && e.key !== "Enter") return;
    this.setState({ Todo: [...this.state.Todo, this.state.currentEntry] });
    this.setState({ currentEntry: { task: "", id: 0, completed: false } });
    console.log(this.state.Todo);
    localStorage.setItem("Todo", JSON.stringify(this.state.Todo));
    console.log(localStorage.Todo);
  };

  onClearCompleted = (e) => {
    const newState = this.state.Todo.filter((item) => {
      return item.completed === false;
    });

    this.setState({ Todo: newState });
  };

  clickItem = (e) => {
    const id = Number(e.target.id);
    const newState = this.state.Todo.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
        return item;
      } else {
        return item;
      }
    });
    this.setState({ Todo: newState });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="appWrap">
        <h2 className="title">Welcome to your Todo App!</h2>
        <TodoList
          Todo={this.state.Todo}
          onInputChange={this.onInputChange}
          onAddTodo={this.onAddTodo}
          clickItem={this.clickItem}
          currentEntry={this.state.currentEntry}
          onClearCompleted={this.onClearCompleted}
          search={this.search}
        />
      </div>
    );
  }
}

export default App;
