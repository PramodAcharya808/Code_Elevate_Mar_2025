import React, { useReducer } from "react";
import {
  counterReducer,
  COUNTER_INITIAL_STATE,
} from "../redurcers/counteReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, COUNTER_INITIAL_STATE);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Counter;
