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
  arr2: Item[],
  m: number,
  n: number,
  config: SortConfig, 
): Promise<Item[] | null> => {
  if (config.abortRef.current) {
    config.setActiveItems([]);
    config.setTempItems([]);
    return null; // Abort early if abortRef is set
  }

    let k: number = m+n-1
    let j: number = n-1
    let i: number = m-1
    
    while(j >= 0){
        if ( i >=0 && arr[i].value > arr2[j].value){
            arr[k] = arr[i]
            k--;
            i--;
        }
        else{
            arr[k] = arr2[j]
            k--
            j--
        }
    }

  return arr;

};

export const useMergArray = () => {
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
    const sortedArray = await rotate([...items], [...items], 3, 3, config);
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
