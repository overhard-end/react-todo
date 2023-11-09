import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from '../todoListItem';

const TodoList = ({ todos, ...props }) => {
  const todoElements = () => todos.map((item) => <TodoListItem {...item} {...props} key={item.date} />);
  return <ul className="todo-list">{todoElements()}</ul>;
};

TodoList.defaultProps = {
  todos: [],
};
TodoList.propTypes = {
  todos: PropTypes.array,
};
export default TodoList;
