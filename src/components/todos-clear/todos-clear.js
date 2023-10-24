import React from "react";
export default class TodosClear extends React.Component {
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
