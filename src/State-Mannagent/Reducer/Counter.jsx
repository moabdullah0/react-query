import { useReducer } from "react";
import CounterReducer from "./CountReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(CounterReducer, 0);
  return (
    <div>
        <h1>{state}</h1>
      <button type="" onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>
      <button type="" onClick={() => dispatch({ type: "decrement" })}>
        decrement
      </button>
    </div>
  );
};

export default Counter;
