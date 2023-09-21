import { create } from "zustand";
import { createWithEqualityFn } from "zustand/traditional";

type TPerson = {
  name: string;
  age: number;
  a: {
    b: boolean;
  };
};
type TStoreState = {
  count: number;
  name: string;
  person: TPerson;
};

type TStoreActions = {
  setCount: () => void;
  setName: (name: string) => void;
  setPerson: (person: TPerson) => void;
};

const initialState: TStoreState = {
  count: 0,
  name: "",
  person: {
    age: 28,
    name: "asmo",
    a: {
      b: true,
    },
  },
};

export const useStore = createWithEqualityFn<TStoreState & TStoreActions>(
  (set) => ({
    ...initialState,
    setCount: () => set((state) => ({ ...state, count: state.count + 1 })),
    setName: (name) => set((state) => ({ ...state, name })),
    setPerson: (person) => set((state) => ({ ...state, person })),
  }),
  Object.is
);
