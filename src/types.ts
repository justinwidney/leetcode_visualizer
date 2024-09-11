export type Algorithm =
  | "selection"
  | "bubble"
  | "quick"
  | "insertion"
  | "merge"
  | "rotate_Array"
  | "jump"
  | "merge_Array"
export type DisplayMode = "bars" | "numbers";
export type DisplayType = "active" | "done" | "temp";
export type Size = 10 | 20 | 30 | 40;
export type StateUpdater<T> = (value: T | ((prevValue: T) => T)) => void;
