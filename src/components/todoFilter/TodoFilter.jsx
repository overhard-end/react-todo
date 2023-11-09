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
  buttonsRender() {
    return this.buttons.map((btn) => (
      <li key={btn}>
        <button
          type="button"
          onClick={() => this.buttonClickHandler(btn)}
          className={btn === this.state.active ? 'selected' : ''}
        >
          {btn}
        </button>
      </li>
    ));
  }
  render() {
    return <ul className="filters">{this.buttonsRender()}</ul>;
  }
}
