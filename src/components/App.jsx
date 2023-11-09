import React from 'react';
import './app.sass';

import TodoAdd from './todoAdd';
import TodoFilter from './todoFilter';
import TodosClear from './todosClear';
import TodosStatus from './todosStatus';
import TodoList from './todoList';

export default class App extends React.Component {
  state = {
    todos: [],
    paramToFilter: null,
  };

  getTodosStatus = () => {
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

  todoActionsHandler = (id, type, data) => {
    this.setState(({ todos }) => {
      if (type === 'delete') return { todos: todos.filter((item) => item.id != id) };
      return {
        todos: todos.map((item) => {
          if (item.id === id) {
            if (type === 'edit' && data) return { ...item, title: data, edit: false };
            return { ...item, [type]: !item[type] };
          } else return item;
        }),
      };
    });
  };
  todoAddHandler = (tittle) => {
    if (!tittle) return;
    const newTodo = {
      id: Number(String(Math.random()).split('.')[1]),
      title: tittle,
      date: Date.now(),
      done: false,
      important: false,
      edit: false,
    };
    this.setState((state) => ({ todos: [...state.todos, newTodo] }));
  };

  todoDoneItemsClearHandler = () =>
    this.setState((state) => ({
      todos: state.todos.filter((todo) => !todo.done),
    }));

  todoFilterHandler = (param) => this.setState({ paramToFilter: param });

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <TodoAdd todoAddHandler={this.todoAddHandler} />
        </header>

        <ul className="todo-list">
          <TodoList todoActionsHandler={this.todoActionsHandler} todos={this.todoToShow()} />
        </ul>
        <footer className="footer">
          <TodosStatus {...this.getTodosStatus()} />
          <TodoFilter todoFilterHandler={this.todoFilterHandler} />
          <TodosClear todosClearHandler={this.todoDoneItemsClearHandler} />
        </footer>
      </section>
    );
  }
}
