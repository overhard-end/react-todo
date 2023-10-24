import React from "react";

export default class TodoFilter extends React.Component {
  state = {
    active: "all",
  };
  buttons = ["all", "active", "done"];
  buttonClickHandler = (btn) => {
    this.setState({ active: btn });
    this.props.todoFilterHandler(btn);
  };

  render() {
    return (
      <div>
        {this.buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => this.buttonClickHandler(btn)}
            className={
              btn === this.state.active
                ? "btn btn-primary"
                : "btn btn-outline-secondary"
            }
          >
            {btn}
          </button>
        ))}
      </div>
    );
  }
}
