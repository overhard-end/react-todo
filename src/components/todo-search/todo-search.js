import React from "react";

export default class TodoSearch extends React.Component {
  state = {
    inputText: "",
  };
  searchInputHandler = (e) => {
    this.setState({ inputText: e.target.value });
    this.props.todoSearchHandler(e.target.value);
  };
  render() {
    return (
      <input
        value={this.state.inputText}
        onChange={(e) => this.handleOnChange(e)}
        placeholder="type to search"
        type="text"
        className="form-control search-input"
      />
    );
  }
}
