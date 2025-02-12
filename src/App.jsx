import "./App.css";
import FormPost from "./ReactQuery/FormPost";
import PostList from "./ReactQuery/PostList";
// import CourseForm from "./Courses/CourseForm";
// import CourseList from "./Courses/CourseList";
// import { CourseProvider } from "./State-Mannagent/context/CourseContext";
import { ThemeProvider } from "./State-Mannagent/context/ThemeContext";
import Theme from "./State-Mannagent/Reducer/Theme";

function App() {
  return (
    <div className="mx-5 mt-10">
      {/* <PostList /> */}
      {/* <CourseProvider>
        <CourseList />
        <CourseForm/>
      </CourseProvider> */}
      {/* <ThemeProvider>
      <Theme/>
        
      </ThemeProvider> */}
      <PostList/>
    </div>
  );
}

export default App;
