import { create } from "zustand";

const useCounter = create((set) => ({
  counter: 0,
  max:10,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () => set((state) => ({ counter: state.counter - 1 })),
  reset: () => set({ counter: 0,max:10 }),
}));
export default useCounter;
