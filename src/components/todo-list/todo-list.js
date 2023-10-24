import React from "react";

import "./todo-list.css";
import TodoListItem from "../todo-list-item";

export default class TodoList extends React.Component {
  todoElements = () =>
    this.props.todos.map((item, i) => (
      <TodoListItem {...item} {...this.props} key={i} />
    ));
  render() {
    return (
      <ul className="list-group todo-list overflow-auto">
        {this.todoElements()}
      </ul>
    );
  }
}
