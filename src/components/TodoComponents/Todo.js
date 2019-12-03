import React from "react";

export default class Todo extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       task: this.props.todo,
  //       id: Date.now(),
  //       completed: false
  //     };
  //   }

  //   handleClick = event => {
  //     this.setState({
  //       ...this.props.todo,
  //       completed: !this.state.todo.completed
  //     });
  //     console.log("clicked", this.state.todos.id);
  //   };

  render() {
    return (
      <h2 onClick={event => this.props.handleClick(this.props.todo)}>
        {this.props.todo.completed
          ? this.props.todo.task.strike()
          : this.props.todo.task}
      </h2>
    );
  }
}
