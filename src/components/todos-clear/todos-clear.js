import React from "react";
import PropTypes from "prop-types";
export default class TodosClear extends React.Component {
  static defaultProps = {
    todosClearHandler: () => "",
  };
  static propTypes = {
    todosClearHandler: PropTypes.func,
  };
  render() {
    return (
      <div className="d-flex justify-content-end pt-3">
        <button
          onClick={() => this.props.todosClearHandler()}
          className="btn btn btn-outline-danger"
        >
          Clear completed
        </button>
      </div>
    );
  }
}
