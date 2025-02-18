import "./App.css";
import ContextTest from "./Test/ContextTest";
import LoginContext from "./Test/LoginContext";
import Test from "./Test/Test";

// import CourseForm from "./Courses/CourseForm";
// import CourseList from "./Courses/CourseList";
// import { CourseProvider } from "./State-Mannagent/context/CourseContext";

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
      ssssssssssss
      <ContextTest>
        <LoginContext />
      </ContextTest>
    </div>
  );
}

export default App;
