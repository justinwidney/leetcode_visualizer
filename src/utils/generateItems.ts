export const MIN_ITEM = 5;
export const MAX_ITEM = 50;

import { Item } from "../components/AlgorithmVisualizer/Item";

export const generateUniqueRandomItems = (
  count: number,
  min: number = MIN_ITEM,
  max: number = MAX_ITEM
): Item[] => {

  const items = new Set<number>();
  const itemsArray: { id: string; value: number }[] = [];

  while (items.size < count) {
    const randomNum = Math.round(Math.random() * (max - min) + min);
    const id = Math.random().toString(36).substr(2, 9);
    items.add(randomNum);
    itemsArray.push({ id, value: randomNum });
  }

  let unique = Array.from(items);

  let filtered = itemsArray.reduce<Item[]>((acc, item) => {
    
    if (unique.includes(item.value)) {
      acc.push(item);
    }
    return acc;
  }, []);

  return filtered
};


export const generateRandomItems = (
  count: number,
  min: number = MIN_ITEM,
  max: number = MAX_ITEM
): Item[] => {

  const itemsArray: { id: string; value: number }[] = [];

  while (itemsArray.length < count) {
    const randomNum = Math.round(Math.random() * (max - min) + min);
    const id = Math.random().toString(36).substr(2, 9);
    itemsArray.push({ id, value: randomNum });
  }

  return itemsArray;
};
