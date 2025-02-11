const TodoReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, { id: Date.now(), title: action.title }];
    case "Delete":
      return state.filter((todo) => todo.id !== action.id);
  }
};
export default TodoReducer;
