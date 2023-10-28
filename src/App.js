import React from "react";
import TodoList from "./components/todo-list/todo-list";
import "./app.css";

import TodoSearch from "./components/todo-search";
import TodoAdd from "./components/todo-add";

import TodoFilter from "./components/todo-filter";
import AppHeader from "./components/app-header";
import TodosClear from "./components/todos-clear/todos-clear";

export default class App extends React.Component {
  state = {
    todos: [],
    textToSearch: null,
    paramToFilter: "all",
  };

  getTodoInfo = () => {
    const obj = { done: 0, left: 0 };
    this.state.todos.forEach((todo) => (todo.done ? obj.done++ : obj.left++));
    return obj;
  };
  todoToShow = () =>
    this.state.textToSearch
      ? this.state.todos.filter((todo) =>
          todo.title.includes(this.state.textToSearch)
        )
      : this.state.paramToFilter
      ? this.state.todos.filter((todo) =>
          this.state.paramToFilter === "active"
            ? !todo.done
            : this.state.paramToFilter === "done"
            ? todo.done
            : true
        )
      : this.todos;

  todoItemToggle = (title, type) =>
    this.setState((state) => ({
      todos: state.todos.map((item) =>
        item.title === title ? { ...item, [type]: !item[type] } : item
      ),
    }));

  todoAddHandler = (todo) => {
    this.setState((state) => ({ todos: [...state.todos, todo] }));
  };
  todoDoneItemsClearHandler = () =>
    this.setState((state) => ({
      todos: state.todos.filter((todo) => !todo.done),
    }));
  todoSearchHandler = (text) => this.setState({ textToSearch: text });
  todoFilterHandler = (param) => this.setState({ paramToFilter: param });

  todoDeleteHandler = (title) =>
    this.setState({
      todos: this.state.todos.filter((item) => item.title !== title),
    });

  render() {
    return (
      <div className="container-sm px-auto pt-5 app-container">
        <AppHeader {...this.getTodoInfo()} />

        <div className="input-group">
          <TodoSearch todoSearchHandler={this.todoSearchHandler} />
          <TodoFilter todoFilterHandler={this.todoFilterHandler} />
        </div>
        <TodosClear todosClearHandler={this.todoDoneItemsClearHandler} />
        <TodoList
          todoDeleteHandler={this.todoDeleteHandler}
          todoItemToggle={this.todoItemToggle}
          todos={this.todoToShow()}
        />
        <TodoAdd todoAddHandler={this.todoAddHandler} />
      </div>
    );
  }
}
