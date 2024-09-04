import { StoreState } from "@/store";
import { Item } from "@/components/AlgorithmVisualizer/Item";
import { useStore } from "@/store";


export const sleep = (delay: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, delay));

export const swap = (arr:Item[], i: number, j: number) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};


export const markAsTemp = (
  items: Item[],
  num: number,
  setTempItems: StoreState["setTempItems"],
) => {
  setTempItems((prev: Item[]) => [...prev, items.find((item: Item) => item.value === num)!]);
}

export const markAsDone = (
  items: Item[],
  itemx: Item,
  setDoneItems: StoreState["setDoneItems"],
  
) => {

  setDoneItems((prev: Item[]) => [...prev, items.find((item: Item) => item.id === itemx.id)!]);
};
