import React from "react";
import PropTypes from "prop-types";
export default class TodoFilter extends React.Component {
  static defaultProps = {
    todoFilterHandler: () => "",
  };
  static propTypes = {
    todoFilterHandler: PropTypes.func,
  };

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
