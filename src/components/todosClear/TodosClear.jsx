import React from 'react';
import PropTypes from 'prop-types';

const TodosClear = ({ todosClearHandler }) => {
  return (
    <button type="button" onClick={() => todosClearHandler()} className="clear-completed">
      Clear completed
    </button>
  );
};

TodosClear.defaultProps = {
  todosClearHandler: () => '',
};

TodosClear.propTypes = {
  todosClearHandler: PropTypes.func,
};
export default TodosClear;
