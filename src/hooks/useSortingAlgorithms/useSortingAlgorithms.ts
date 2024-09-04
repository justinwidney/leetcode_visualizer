import { useBubbleSort } from "./useBubbleSort";
import { useInsertionSort } from "./useInsertionSort";
import { useJump } from "./useJump";
import { useMergeSort } from "./useMergeSort";
import { useQuickSort } from "./useQuickSort";
import { useReverse } from "./useReverse";
import { useSelectionSort } from "./useSelectionSort";

export const useSortingAlgorithms = () => {
  const selectionSort = useSelectionSort();
  const bubbleSort = useBubbleSort();
  const quickSort = useQuickSort();
  const insertionSort = useInsertionSort();
  const mergeSort = useMergeSort();
  const reverse = useReverse();
  const jump = useJump()

  return { selectionSort, bubbleSort, quickSort, insertionSort, mergeSort, reverse, jump };
};
