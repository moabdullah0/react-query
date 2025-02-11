
const coursesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_COURSE":
      return [...state, { id: Date.now(), title: action.title }];

    case "REMOVE_COURSE":
      return state.filter((course) => course.id !== action.id);

    case "RESET":
      return state;

    default:
      return state;
  }
};

export default coursesReducer;
