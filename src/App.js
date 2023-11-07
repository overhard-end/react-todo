import React from 'react';

import TodoList from './components/todo-list/todo-list';
import './app.css';
import TodoSearch from './components/todo-search';
import TodoAdd from './components/todo-add';
import TodoFilter from './components/todo-filter';
import AppHeader from './components/app-header';
import TodosClear from './components/todos-clear/todos-clear';

export default class App extends React.Component {
  state = {
    todos: [],
    textToSearch: null,
    paramToFilter: null,
  };

  getTodoInfo = () => {
    const obj = { done: 0, left: 0 };
    this.state.todos.forEach((todo) => (todo.done ? obj.done++ : obj.left++));
    return obj;
  };

  todoToShow = ({ textToSearch, paramToFilter, todos } = this.state) => {
    if (textToSearch) {
      return todos.filter((todo) => todo.title.includes(textToSearch));
    }
    if (paramToFilter && paramToFilter !== 'all') {
      return todos.filter((todo) => {
        if (paramToFilter === 'active') {
          return !todo.done;
        }
        if (paramToFilter === 'done') {
          return todo.done;
        }
        return true;
      });
    }
    return todos;
  };

  todoItemToggle = (id, type) => {
    this.setState((state) => ({
      todos: state.todos.map((item) => (item.id === id ? { ...item, [type]: !item[type] } : item)),
    }));
  };

  todoAddHandler = (tittle) => {
    const newTodo = {
      id: Number(String(Math.random()).split('.')[1]),
      title: tittle,
      date: Date.now(),
      done: false,
      important: false,
    };
    this.setState((state) => ({ todos: [...state.todos, newTodo] }));
  };

  todoDoneItemsClearHandler = () =>
    this.setState((state) => ({
      todos: state.todos.filter((todo) => !todo.done),
    }));

  todoSearchHandler = (text) => this.setState({ textToSearch: text });

  todoFilterHandler = (param) => this.setState({ paramToFilter: param });

  todoDeleteHandler = (id, { todos } = this.state) =>
    this.setState({
      todos: todos.filter((item) => item.id !== id),
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
