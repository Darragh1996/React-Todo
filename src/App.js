import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoValue: ""
    };
  }

  handleChange = event => {
    this.setState({
      todoValue: event.target.value
    });
  };

  handleSubmit = event => {
    console.log(event);
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: event.target.todoItem.value,
          id: Date.now(),
          completed: false
        }
      ],
      todoValue: ""
    });
    console.log(this.state.todos);
  };

  handleClick = event => {
    event.stopPropagation();
    this.setState({
      completed: !this.state.todos.completed
    });
    console.log("clicked", this.state.todos.id);
  };

  deleteCompleted = event => {};

  render() {
    return (
      <>
        <TodoList todos={this.state.todos} handleClick={this.handleClick} />
        <TodoForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          todoValue={this.state.todoValue}
        />
      </>
    );
  }
}

export default App;
