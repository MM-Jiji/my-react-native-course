// I)useReducer():
//   Why "reducer"? Where does that come from?
//   for that we need to go and see the JavaScript method Array.prototype.reduce(), because React useReducer
//   hook use the same idea.

// II)Array.reduce() VS useReducer():

//    Array reduce
Array.reduce(reducer, initialValue);
//  -The reducer receives: accumulator and currentValue

//    React userReducer
useReducer(reducer, initialState);
//  -The reducer receives: state and action

//   *Action:
//      -Action is a way to describe what happened in your app.
//      -Think of it as a message saying exemple: "the user clicked this button" or "add a new item to the list".
//      -The reducer looks at this acion and decides how to update the state.

//   What you get back:
//    -The array.reduce() method returns a single value.
//    -useReducer returns an array with two items.
const [state, dispatch] = useReducer(reducer, initialState);

//    -current state (just like with useState).
//    -dispatch a function to send actions to the reducer.

//exemple:
import { useReducer } from "react";

const initialCount = 0;

const countReducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const CounterWithReducer = () => {
  const [count, dispatch] = useReducer(countReducer, initialCount);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

//  III)useReducer() mechanics:
//      -Actions describe what happened.
//      -Dispatch sends those actions to the reducer.
//      -The reducer decides how to update state.
//      -The component re-renders with the new state.

// IV)useReducer() lazy initialization:
//    -You do the expensive or external work once.
//    -React reuses that result on every subsequent render.
//    -The init argument is completly optional.
//    -Most of the time, just passing a simple value as the second argument useReducer is enough.
