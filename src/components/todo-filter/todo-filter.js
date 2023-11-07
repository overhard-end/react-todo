import React from 'react';
import PropTypes from 'prop-types';
export default class TodoFilter extends React.Component {
  static defaultProps = {
    todoFilterHandler: () => '',
  };
  static propTypes = {
    todoFilterHandler: PropTypes.func,
  };
  state = {
    active: 'all',
  };
  buttons = ['all', 'done', 'active'];
  buttonClickHandler(btn) {
    this.setState({ active: btn });
    this.props.todoFilterHandler(btn);
  }

  render() {
    const { active } = this.state;
    return (
      <div>
        {this.buttons.map((btn) => (
          <button
            type="button"
            key={btn}
            onClick={() => this.buttonClickHandler(btn)}
            className={btn === active ? 'btn btn-primary' : 'btn btn-outline-secondary'}
          >
            {btn}
          </button>
        ))}
      </div>
    );
  }
}
