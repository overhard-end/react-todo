import React from "react";
import "./todo-list-item.css";
import PropTypes from "prop-types";

export default class TodoListItem extends React.Component {
  static defaultProps = {
    title: "",
    done: false,
    important: false,
    date: 0,
    todoDeleteHandler: () => "",
    todoItemToggle: () => "",
  };
  static propTypes = {
    title: PropTypes.string,
    done: PropTypes.bool,
    important: PropTypes.bool,
    todoDeleteHandler: PropTypes.func,
    todoItemToggle: PropTypes.func,
  };

  getPassedTime = () => {
    const getText = (time, type) => `created ${time} ${type}  ago`;
    let time = Math.floor((Date.now() - this.props.date) / 1000);
    if (time > 86399) {
      return getText(Math.floor(time / 60 / 60 / 24), "day");
    }
    if (time > 3599) {
      return getText(Math.floor(time / 60 / 60), "hours");
    }
    if (time > 59) {
      return getText(Math.floor(time / 60), "min");
    }
    return getText(time, "sec");
  };

  render() {
    const { title, done, important, todoDeleteHandler, todoItemToggle } =
      this.props;
    return (
      <li className="list-group-item todo-list-item fs-5 fw-semibold d-flex justify-content-between">
        <span
          className={`todo-list-item-text ${done ? "done" : ""} ${
            important ? "important" : ""
          }`}
          onClick={() => todoItemToggle(title, "done")}
        >
          {title}
        </span>
        <span className="fs-6 text-secondary ms-1 me-1">
          {this.getPassedTime()}
        </span>
        <div className="d-flex todo-list-item-btn-container">
          <button
            onClick={() => todoDeleteHandler(title)}
            className="btn btn-outline-danger me-2 todo-list-item-btn"
          >
            <i className="bi bi-trash-fill item-btn-icon"></i>
          </button>
          <button
            onClick={() => todoItemToggle(title, "important")}
            className="btn btn-outline-success todo-list-item-btn"
          >
            <i className="bi bi-exclamation-diamond item-btn-icon"></i>
          </button>
        </div>
      </li>
    );
  }
}
