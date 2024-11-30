import { create } from "zustand";

//type definition
type ExampleStore = {
  count: number;
  increment: () => void;
};

//creating a global state
export const useExampleStore = create<ExampleStore>((set) => {
  //value
  count: 0;
  //function
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  };
});
