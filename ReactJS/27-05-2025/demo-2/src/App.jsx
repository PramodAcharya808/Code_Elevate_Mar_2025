// import React from "react";
// import { useReducer } from "react";

// // written in other file
// const INITIAL_STATE = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: state.count + 1 };
//     case "DECREMENT":
//       return { count: state.count - 1 };
//     case "RESET":
//       return { count: 0 };
//     default:
//       return state;
//   }
// }

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

//   return (
//     <div>
//       <h1>Count: {state.count}</h1>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
//       <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
//     </div>
//   );
// };

// export default App;

import React from "react";
import Counter from "./Components/Counter";

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
