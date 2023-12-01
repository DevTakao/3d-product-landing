import { create } from "zustand";

const initial = {
  coatingColor: 0xffffff,
  cushionColor: 0xffffff,
};

const modelStore = (set) => ({
  ...initial,
  setCoatingColor: (hex) => set({ coatingColor: hex }),
  setCushionColor: (hex) => set({ cushionColor: hex }),
});

export const useModelStore = create(modelStore);
