import React from 'react';
import './todo-list-item.css';
import PropTypes from 'prop-types';

export default class TodoListItem extends React.Component {
  static defaultProps = {
    id: 0,
    title: '',
    done: false,
    important: false,
    date: 0,
    todoDeleteHandler: () => '',
    todoItemToggle: () => '',
  };

  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    done: PropTypes.bool,
    important: PropTypes.bool,
    date: PropTypes.number,
    todoDeleteHandler: PropTypes.func,
    todoItemToggle: PropTypes.func,
  };

  getPassedTime = () => {
    const getText = (time, type) => `created ${time} ${type}  ago`;
    const time = Math.floor((Date.now() - this.props.date) / 1000);
    if (time > 86399) {
      return getText(Math.floor(time / 60 / 60 / 24), 'day');
    }
    if (time > 3599) {
      return getText(Math.floor(time / 60 / 60), 'hours');
    }
    if (time > 59) {
      return getText(Math.floor(time / 60), 'min');
    }
    return getText(time, 'sec');
  };

  render() {
    const { id, title, done, important, todoDeleteHandler, todoItemToggle } = this.props;
    const itemTextClass = `todo-list-item-text ${done ? 'done' : ''} ${important ? 'important' : ''}`;
    return (
      <li className="list-group-item todo-list-item fs-5 fw-semibold">
        <span role="presentation" className={itemTextClass} onClick={() => todoItemToggle(id, 'done')}>
          {title}
        </span>
        <span className="fs-6 text-secondary ms-1 me-1">{this.getPassedTime()}</span>
        <div className="d-flex todo-list-item-btn-container">
          <button
            type="button"
            onClick={() => todoDeleteHandler(id)}
            className="btn btn-outline-danger me-2 todo-list-item-btn"
          >
            <i className="bi bi-trash-fill item-btn-icon" />
          </button>
          <button
            type="button"
            onClick={() => todoItemToggle(id, 'important')}
            className="btn btn-outline-success todo-list-item-btn"
          >
            <i className="bi bi-exclamation-diamond item-btn-icon" />
          </button>
        </div>
      </li>
    );
  }
}
