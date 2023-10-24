import React from "react";
import TodoList from "./components/todo-list/todo-list";
import "./app.css";

import TodoSearch from "./components/todo-search";
import TodoAdd from "./components/todo-add";

import TodoFilter from "./components/todo-filter";
import AppHeader from "./components/app-header";
import TodosClear from "./components/todos-clear/todos-clear";
const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [searchedTodos, setSearchedTodos] = React.useState(null);
  const [filterTodos, setFilterTodos] = React.useState(null);

  const getTodoInfo = () => {
    const obj = { done: 0, left: 0 };
    todos.forEach((todo) => (todo.done ? obj.done++ : obj.left++));
    return obj;
  };
  const todoToShow = () => {
    if (searchedTodos) {
      return todos.filter((todo) => todo.title.includes(searchedTodos));
    }
    if (filterTodos) {
      return todos.filter((todo) => {
        switch (filterTodos) {
          case "all":
            return true;
          case "active":
            return !todo.done;
          case "done":
            return todo.done;

          default:
            return false;
        }
      });
    }
    return todos;
  };
  const todoSearchHandler = (text) => setSearchedTodos(text);

  const todoFilterHandler = (param) => setFilterTodos(param);

  const todoDoneHandler = (title) => {
    setTodos(
      todos.map((item) => {
        if (item.title === title) {
          item.done = !item.done;
        }
        return item;
      })
    );
  };
  const todoImportantHandler = (title) => {
    setTodos(
      todos.map((item) => {
        if (item.title === title) {
          item.important = !item.important;
        }
        return item;
      })
    );
  };
  const todoAddHandler = (todo) => {
    setTodos([...todos, todo]);
  };
  const todoDeleteHandler = (title) =>
    setTodos(todos.filter((item) => item.title !== title));

  const todoListProps = {
    todoDeleteHandler,
    todoImportantHandler,
    todoDoneHandler,
  };
  const todosClearHandler = () => setTodos(todos.filter((todo) => !todo.done));
  return (
    <div className="container-sm px-auto pt-5 app-container">
      <AppHeader {...getTodoInfo()} />

      <div className="input-group">
        <TodoSearch todoSearchHandler={todoSearchHandler} />
        <TodoFilter todoFilterHandler={todoFilterHandler} />
      </div>
      <TodosClear todosClearHandler={todosClearHandler} />
      <TodoList {...todoListProps} todos={todoToShow()} />
      <TodoAdd todoAddHandler={todoAddHandler} />
    </div>
  );
};
export default App;
