import useCounter from "../app/counterStore";
// import useStoreCounter from "../app/store";
const Counter = () => {
  const { counter, increment, reset } = useCounter();
  const count = (state) => state.counter;
  return (
    <div>
      <p>Count Selector :{count}</p>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};
export default Counter;
