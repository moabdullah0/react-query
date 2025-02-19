import { create } from "zustand";

const useTodoStore = create((set) => ({
  todo: [],
  addTodo: (task) =>
    set((state) => ({ todo: [...state, { id: Date.now(), name: task }] })),
}));
export default useTodoStore;