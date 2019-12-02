import React from "react";

export default class TodoForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          name="todoItem"
          value={this.props.todo}
          onChange={this.props.handleChange}
        />
        <button>submit</button>
      </form>
    );
  }
}
