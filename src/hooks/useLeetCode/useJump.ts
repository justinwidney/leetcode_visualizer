import { StoreState, useStore } from "@/store";
import { markAsDone, sleep, markAsTemp} from "../useSortingAlgorithms/utils";
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



const rotate = async (
  arr: Item[],
  config: SortConfig, 
): Promise<Item[] | null> => {
  if (config.abortRef.current) {
    config.setActiveItems([]);
    config.setTempItems([]);
    return null; // Abort early if abortRef is set
  }

    let maxReachableIndex: number = 0;


    for (let i: number = 0; i < arr.length; i++) {
    
      config.setActiveItems([arr[i]]);

      await sleep(config.speedRef.current);

      if (i > maxReachableIndex) {
        return arr;
      }
      maxReachableIndex = Math.max(maxReachableIndex, i + arr[i].value);

      markAsDone(arr, arr[i], config.setDoneItems)

      config.setTempItems([arr[Math.min(maxReachableIndex, arr.length - 1)]]);
      
    }

  return arr;

};

export const useJump = () => {
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
    const sortedArray = await rotate([...items], config);
    if (sortedArray !== null && !abortRef.current) {
      setItems(sortedArray);
      //setDoneItems(sortedArray);
    }
    setActiveItems([]);

    if (abortRef.current) {
      abortRef.current = false; // Reset abortRef after sorting is complete
    }
  };

  return sort;
};
