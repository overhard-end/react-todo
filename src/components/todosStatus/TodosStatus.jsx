import React from 'react';
import PropTypes from 'prop-types';

const TodosStatus = ({ done, left }) => {
  return <span className="todo-count">{`${left} more to do, ${done} done`}</span>;
};

TodosStatus.defaultProps = {
  done: 0,
  left: 0,
};
TodosStatus.propTypes = {
  done: PropTypes.number,
  left: PropTypes.number,
};
export default TodosStatus;
