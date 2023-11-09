import React from 'react';
import PropTypes from 'prop-types';

export default class TodoAdd extends React.Component {
  static defaultProps = {
    todoAddHandler: () => '',
  };
  static propTypes = {
    todoAddHandler: PropTypes.func,
  };
  state = {
    text: '',
  };
  inputHandler = (e) => this.setState({ text: e.target.value });
  submitHandler = (e) => {
    e.preventDefault();
    this.props.todoAddHandler(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          id="new-todo"
          onChange={this.inputHandler}
          type="text"
          value={this.state.text}
          placeholder="What needs to be done ?"
          className="new-todo"
        />
      </form>
    );
  }
}
