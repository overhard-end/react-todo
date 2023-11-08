import React from 'react';
import PropTypes from 'prop-types';

export default class TodoSearch extends React.Component {
  static defaultProps = {
    todoSearchHandler: () => '',
  };

  static propTypes = {
    todoSearchHandler: PropTypes.func,
  };

  state = {
    inputText: '',
  };

  searchInputHandler = (e) => {
    this.setState({ inputText: e.target.value });
    this.props.todoSearchHandler(e.target.value);
  };

  render() {
    const { inputText } = this.state;
    return (
      <input
        name="todos-search"
        value={inputText}
        onChange={(e) => this.searchInputHandler(e)}
        placeholder="type to search"
        type="text"
        className="form-control search-input"
      />
    );
  }
}
