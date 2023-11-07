import React from 'react';
import './todo-list.css';
import PropTypes from 'prop-types';

import TodoListItem from '../todo-list-item';
export default class TodoList extends React.Component {
  static defaultProps = {
    todos: [],
  };
  static propTypes = {
    todos: PropTypes.array,
  };
  todoElements = () => this.props.todos.map((item) => <TodoListItem {...item} {...this.props} key={item.date} />);

  render() {
    return <ul className="list-group todo-list overflow-auto">{this.todoElements()}</ul>;
  }
}
