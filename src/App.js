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
      todos: [...this.state.todos, event.target.todoItem.value],
      todoValue: ""
    });
  };

  render() {
    return (
      <>
        <TodoList todos={this.state.todos} />
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
