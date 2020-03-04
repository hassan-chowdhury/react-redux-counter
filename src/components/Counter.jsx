import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../actions/counter';

const Counter = ({
  count,
  aIncrement,
  aDecrement,
  aReset,
}) => (
  <div className="counter">
    <h2>Counter</h2>
    <div>
      <button type="button" onClick={aDecrement}>-</button>
      <span className="count">{count}</span>
      <button type="button" onClick={aIncrement}>+</button>
    </div>
    <button type="button" onClick={aReset}>reset</button>
  </div>
);

const propTypes = {
  count: PropTypes.number.isRequired,
  aIncrement: PropTypes.func.isRequired,
  aDecrement: PropTypes.func.isRequired,
  aReset: PropTypes.func.isRequired,
};

Counter.propTypes = propTypes;

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

export default connect(
  mapStateToProps,
  { aIncrement: increment, aDecrement: decrement, aReset: reset },
)(Counter);
