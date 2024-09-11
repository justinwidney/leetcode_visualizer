import { StoreState, useStore } from "@/store";
import { markAsDone, sleep, swap } from "../useSortingAlgorithms/utils";
import { Item } from "@/components/AlgorithmVisualizer/Item";

type SortConfig = Pick<
  StoreState,
  | "setItems"
  | "setActiveItems"
  | "setTempItems"
  | "setDoneItems"
  | "speedRef"
  | "abortRef"
  | "kValue"
>;

const reverse = async (
  i: number,
  j: number,
  arr: Item[],
  config: SortConfig,
  done: boolean,
): Promise<Item[] | null> => {
  const { setItems, setActiveItems, speedRef, abortRef, setTempItems } = config;

  
  if(abortRef.current){
    setActiveItems([])
    setTempItems([]);
    return null;
  }

  setTempItems([]);
  //setActiveItems([arr[i], arr[j]]);

  while(i < j){

    await sleep(speedRef.current);

    if(done){
      markAsDone(arr, arr[i], config.setDoneItems);
      markAsDone(arr, arr[j], config.setDoneItems);
    }

    setActiveItems([arr[j], arr[i]]);
    swap(arr, i, j);
    setItems([...arr]);


    i++
    j--



  }

  setActiveItems([]);
  setTempItems([]);

  return arr;
};

const rotate = async (
  arr: Item[],
  config: SortConfig, 
  k: number
): Promise<Item[] | null> => {
  if (config.abortRef.current) {
    config.setActiveItems([]);
    config.setTempItems([]);
    return null; // Abort early if abortRef is set
  }

  k %=  arr.length;

  await reverse(0, arr.length - 1, arr, config, false);

  await reverse(0, k-1, arr, config, true);
  //config.setDoneItems(arr.slice(0, k));
  
  await reverse(k, arr.length-1, arr, config, true);
  //config.setDoneItems(arr.slice(k, arr.length-1));

  return arr
};

export const useRotateArray = () => {
  const {
    items,
    setItems,
    setActiveItems,
    setTempItems,
    setDoneItems,
    speedRef,
    abortRef,
    kValue,

  } = useStore();

  const config: SortConfig = {
    setItems,
    setActiveItems,
    setTempItems,
    setDoneItems,
    speedRef,
    abortRef,
    kValue,
  };



  const sort = async () => {
    const sortedArray = await rotate([...items], config, kValue);
    if (sortedArray !== null && !abortRef.current) {
      setItems(sortedArray);
      setDoneItems(sortedArray);
    }
    setActiveItems([]);

    if (abortRef.current) {
      abortRef.current = false; // Reset abortRef after sorting is complete
    }
  };

  return sort;
};
