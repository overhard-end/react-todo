import React from 'react';
import PropTypes from 'prop-types';

import { timeConverter } from '../../helper';

export default class TodoListItem extends React.Component {
  static defaultProps = {
    id: 0,
    title: '',
    done: false,
    important: false,
    date: 0,
    todoActionsHandler: () => '',
  };

  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    done: PropTypes.bool,
    important: PropTypes.bool,
    date: PropTypes.number,
    todoActionsHandler: PropTypes.func,
  };
  state = {
    newTitle: this.props.title,
  };
  getPassedTime = () => timeConverter(this.props.date);
  onEditSubmit(e) {
    e.preventDefault();
    this.props.todoActionsHandler(this.props.id, 'edit', this.state.newTitle);
  }
  render() {
    const { todoActionsHandler, important, id, edit, title, done } = this.props;
    return (
      <li className={done ? 'completed' : edit ? 'editing' : ''}>
        <div className="view">
          <input onChange={() => todoActionsHandler(id, 'done')} className="toggle" type="checkbox" />
          <label>
            <span className={important ? 'description --important' : 'description'}>{title}</span>
            <span className="created">{this.getPassedTime()}</span>
          </label>
          <button onClick={() => todoActionsHandler(id, 'important')} className="icon icon-important"></button>
          <button onClick={() => todoActionsHandler(id, 'edit')} className="icon icon-edit"></button>
          <button onClick={() => todoActionsHandler(id, 'delete')} className="icon icon-destroy"></button>
        </div>
        {edit ? (
          <form onSubmit={(e) => this.onEditSubmit(e)}>
            <input
              onChange={(e) => this.setState({ newTitle: e.target.value })}
              type="text"
              className="edit"
              value={this.state.newTitle}
            />
          </form>
        ) : (
          ''
        )}
      </li>
    );
  }
}
