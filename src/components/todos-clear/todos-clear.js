import React from 'react';
import PropTypes from 'prop-types';

export default class TodosClear extends React.Component {
  static defaultProps = {
    todosClearHandler: () => '',
  };

  static propTypes = {
    todosClearHandler: PropTypes.func,
  };

  render() {
    const { todosClearHandler } = this.props;
    return (
      <div className="d-flex justify-content-end pt-3">
        <button type="button" onClick={() => todosClearHandler()} className="btn btn btn-outline-danger">
          Clear completed
        </button>
      </div>
    );
  }
}
