import { useContext, useState } from "react";
import { CourseContext } from "../State-Mannagent/context/CourseContext";

const CourseList = () => {
  const { state, dispatch } = useContext(CourseContext);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  return (
    <div>
      <h2>قائمة الدورات</h2>
      <ul>
        {state.map((course) => (
          <li key={course.id}>
            {editId === course.id ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <button
                  onClick={() => {
                    dispatch({ type: "EDIT_COURSE", id: course.id, newTitle: editTitle });
                    setEditId(null);
                  }}
                >
                  حفظ
                </button>
              </>
            ) : (
              <>
                {course.title}
                <button onClick={() => dispatch({ type: "REMOVE_COURSE", id: course.id })}>
                  حذف
                </button>
                <button onClick={() => { setEditId(course.id); setEditTitle(course.title); }}>
                  تعديل
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: "RESET" })}>إعادة تعيين</button>
    </div>
  );
};

export default CourseList;
