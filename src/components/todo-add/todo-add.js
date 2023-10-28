import React from "react";
import PropTypes from "prop-types";
export default class TodoAdd extends React.Component {
  static defaultProps = {
    todoAddHandler: () => "",
  };
  static propTypes = {
    todoAddHandler: PropTypes.func,
  };
  state = {
    text: "",
  };
  inputHandler = (e) => this.setState({ text: e.target.value });

  submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      title: this.state.text,
      date: Date.now(),
      done: false,
      important: false,
    };
    this.props.todoAddHandler(newTodo);
    this.setState({ text: "" });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler} className="input-group mt-3">
        <input
          onChange={this.inputHandler}
          type="text"
          value={this.state.text}
          placeholder="What needs to be done ?"
          className="form-control"
        />
        <button type="submit" className="btn btn-outline-secondary">
          Add
        </button>
      </form>
    );
  }
}
