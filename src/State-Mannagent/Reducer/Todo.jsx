import { useReducer } from "react";
import TodoReducer from "./todoReducer";

const Todo = () => {
  const [state, dispatch] = useReducer(TodoReducer, []);
  return (
    <div>
      {state.map((state) => (
        <li key={state.id}>
          {state.title}
          <button
            type=""
            onClick={() => dispatch({ type: "Delete", id: state.id })}
            className="pt-2 px-5 bg-blue-500 text-white mx-2"
          >
            Delete
          </button>
        </li>
      ))}
      <button
        type=""
        onClick={() => dispatch({ type: "Add", title: "Mohamad" })}
        className="pt-2 px-5 bg-blue-500 text-white mx-2"
      >
        Add
      </button>
    </div>
  );
};

export default Todo;
