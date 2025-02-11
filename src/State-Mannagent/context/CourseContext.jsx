import { createContext, useReducer } from "react";
import coursesReducer from "../Reducer/CoursesReducer";
export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(coursesReducer, []);

  return (
    <CourseContext.Provider value={{ state, dispatch }}>
      {children}
    </CourseContext.Provider>
  );
};
