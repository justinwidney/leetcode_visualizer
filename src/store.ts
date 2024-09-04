import { create } from "zustand";
import { createRef, MutableRefObject } from "react";
import { generateUniqueRandomItems, generateRandomItems } from "./utils/generateItems";
import type { Algorithm, DisplayMode, StateUpdater } from "./types";
import { resolveState } from "./utils/stateUpdater";
import type { Item } from "./components/AlgorithmVisualizer/Item";


export type StoreState = {
  isMobile: boolean;
  arrayId: number;
  speedRef: MutableRefObject<number>;
  abortRef: MutableRefObject<boolean>;
  isPlaying: boolean;
  kValue: number;
  activeAlgorithm: Algorithm;
  size: number;
  displayMode: DisplayMode;
  items: Item[]
  activeItems: Item[]
  tempItems: Item[]
  doneItems: Item[]
  setIsMobile: (isMobile: boolean) => void;
  setDisplayMode: (displayMode: DisplayMode) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setKValue: (kValue: number) => void;
  setActiveAlgorithm: (algorithm: Algorithm) => void;
  setSize: (size: number) => void;
  setItems: StateUpdater<Item[]>;
  setActiveItems: StateUpdater<Item[]>;
  setTempItems: StateUpdater<Item[]>;
  setDoneItems: StateUpdater<Item[]>;
  createNewArray: () => void;
};

let speedRef = createRef<number>() as React.MutableRefObject<number>; // eslint-disable-line prefer-const
speedRef.current = 500;

let abortRef = createRef<boolean>() as React.MutableRefObject<boolean>; // eslint-disable-line prefer-const
abortRef.current = false;

export const useStore = create<StoreState>((set, get) => ({
  isMobile: false,
  arrayId: 0,
  speedRef,
  abortRef,
  kValue: 0,
  isPlaying: false,
  activeAlgorithm: "selection",
  displayMode: "bars",
  size: 30,
  items: generateUniqueRandomItems(30),
  activeItems: [],
  tempItems: [],
  doneItems: [],
  setIsMobile: (isMobile) => set({ isMobile }),
  setKValue: (kValue: number) => set({ kValue }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setDisplayMode: (displayMode) => set({ displayMode }),
  setActiveAlgorithm: (algorithm) => {

    //const size = get().size

    set({ activeAlgorithm: algorithm })

    switch (algorithm) {
      case "jump":
        set({ 
          items: generateRandomItems(10, 0, 5),
          arrayId: get().arrayId + 1,
        });
        break;
      default:
        break;
    }
  }, 

  setSize: (size) =>
    set((state) => ({
      size,
      items: generateUniqueRandomItems(size),
      arrayId: state.arrayId + 1,
    })),
  setItems: (items) =>
    set((state) => ({
      items: resolveState(items, state.items),
    })),
  setActiveItems: (items) =>
    set((state) => ({
      activeItems: resolveState(items, state.activeItems),
    })),
  setTempItems: (activeItems) =>
    set((state) => ({
      tempItems: resolveState(activeItems, state.tempItems),
    })),
  setDoneItems: (doneItems) =>
    set((state) => ({
      doneItems: resolveState(doneItems, state.doneItems),
    })),

  createNewArray: () =>
    set((state) => ({
      items: generateUniqueRandomItems(state.size),
      arrayId: state.arrayId + 1,
      activeItems: [],
      tempItems: [],
      doneItems: [],
    })),
}));
