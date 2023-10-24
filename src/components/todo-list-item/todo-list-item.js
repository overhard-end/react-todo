import React from "react";
import "./todo-list-item.css";

export default class TodoListItem extends React.Component {
  render() {
    const {
      title,
      done,
      important,
      todoImportantHandler,
      todoDeleteHandler,
      todoDoneHandler,
    } = this.props;
    return (
      <li className="list-group-item todo-list-item fs-5 fw-semibold d-flex justify-content-between">
        <span
          className={`todo-list-item-text ${done ? "done" : ""} ${
            important ? "important" : ""
          }`}
          onClick={() => todoDoneHandler(title)}
        >
          {title}
        </span>

        <div className="d-flex todo-list-item-btn-container">
          <button
            onClick={() => todoDeleteHandler(title)}
            className="btn btn-outline-danger me-2 todo-list-item-btn"
          >
            <i className="bi bi-trash-fill item-btn-icon"></i>
          </button>
          <button
            onClick={() => todoImportantHandler(title)}
            className="btn btn-outline-success todo-list-item-btn"
          >
            <i className="bi bi-exclamation-diamond item-btn-icon"></i>
          </button>
        </div>
      </li>
    );
  }
}
