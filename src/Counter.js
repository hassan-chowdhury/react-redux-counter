import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./actions/counter";

const Counter = ({ count, increment, decrement, reset }) => (
  <div className="counter">
    <h2>Counter</h2>
    <div>
      <button onClick={decrement}>-</button>
      <span className="count">{count}</span>
      <button onClick={increment}>+</button>
    </div>
    <button onClick={reset}>reset</button>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count
});

// export Counter;
export default connect(
  mapStateToProps,
  { increment, decrement, reset }
)(Counter);
