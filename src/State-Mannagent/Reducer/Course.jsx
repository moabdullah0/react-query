import { useReducer } from "react";
import coursesReducer from "./CoursesReducer";

const Course = () => {
  const [state, dispatch] = useReducer(coursesReducer, []);
  return (
    <div>
      {state.map((course, i) => (
        <li key={i}>
          {course.title} {course.id}
          <button
            type=""
            className="bg-red-400 text-white px-4 py-2 rounded-lg"
            onClick={()=>dispatch({ type: "REMOVE_COURSE", id: course.id })}
          >
            Delete
          </button>
        </li>
      ))}
      <button
        type=""
        className="bg-red-400 text-white px-4 py-2 rounded-lg"
        onClick={()=>dispatch({ type: "ADD_COURSE", title: "Mohamad" })}
      >
        Add
      </button>
    </div>
  );
};

export default Course;
