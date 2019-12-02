import React from "react";

export default class TodoForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          name="todoItem"
          value={this.props.todoValue}
          onChange={event => this.props.handleChange(event)}
        />
        <input type="submit" />
        <button>clear completed</button>
      </form>
    );
  }
}
