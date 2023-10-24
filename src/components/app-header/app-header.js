import React from "react";

export default class AppHeader extends React.Component {
  render() {
    const { done, left } = this.props;
    return (
      <div className="header d-flex justify-content-between ">
        <h1 className=" fw-semibold mb-0">Todo App</h1>
        <p className="todo-main-info fw-medium fs-5 mt-5 ">
          {`${left} more to do, ${done} done`}
        </p>
      </div>
    );
  }
}
