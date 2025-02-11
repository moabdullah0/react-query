import { useState, useContext } from "react";
import { CourseContext } from "../State-Mannagent/context/CourseContext";

const CourseForm = () => {
  const [title, setTitle] = useState("");
  const { dispatch } = useContext(CourseContext);

  const addCourse = () => {
    if (title.trim() !== "") {
      dispatch({ type: "ADD_COURSE", title });
      setTitle("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="أدخل اسم الدورة"
      />
      <button onClick={addCourse}>إضافة دورة</button>
    </div>
  );
};

export default CourseForm;
