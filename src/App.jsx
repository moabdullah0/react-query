import "./App.css";
import CourseForm from "./Courses/CourseForm";
import CourseList from "./Courses/CourseList";
import { CourseProvider } from "./State-Mannagent/context/CourseContext";
import Course from "./State-Mannagent/Reducer/Course";

function App() {
  return (
    <div className="mx-5 mt-10">
      {/* <PostList /> */}
      <CourseProvider>
        <CourseList />
        <CourseForm/>
      </CourseProvider>
    </div>
  );
}

export default App;
