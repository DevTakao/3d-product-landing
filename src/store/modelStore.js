import { create } from "zustand";

const initial = {
  coatingColor: 0xffffff,
  cushionColor: 0xffffff,
  isViewSection: false,
  isDragging: false,
};

const modelStore = (set) => ({
  ...initial,
  setCoatingColor: (hex) => set({ coatingColor: hex }),
  setCushionColor: (hex) => set({ cushionColor: hex }),
  setIsViewSection: (bool) => set({ isViewSection: bool }),
  setIsDragging: (bool) => set({ isDragging: bool }),
});

export const useModelStore = create(modelStore);
