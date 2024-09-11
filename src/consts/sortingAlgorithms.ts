import type { Algorithm } from "@/types";

type AlgorithmDetails = {
  title: string;
  shortDescription: string;
  longDescription: string;
  timeComplexity: {
    best: string;
    average: string;
    worst: string;
  };
};

export const sortingAlgorithms: Record<Algorithm, AlgorithmDetails> = {
  selection: {
    title: "Selection Sort",
    shortDescription:
      "Efficient for small datasets, minimizing swaps, but performs poorly on larger or nearly sorted datasets due to its O(n²) complexity.",
    longDescription:
      "Selection Sort is a basic algorithm that works by repeatedly selecting the smallest unsorted element and moving it to the sorted portion of the list. It’s simple and minimizes swaps, which is beneficial when memory writes are costly. However, with an O(n²) time complexity, it becomes inefficient on larger datasets or nearly sorted arrays, making it more suitable for small collections.",
    timeComplexity: {
      best: "O(n²)",
      average: "O(n²)",
      worst: "O(n²)",
    },
  },
  insertion: {
    title: "Insertion Sort",
    shortDescription:
      "Efficient for small or nearly sorted datasets, with a best-case O(n) time complexity, but inefficient for larger, random datasets.",
    longDescription:
      "Insertion Sort is a simple algorithm that builds a sorted array one element at a time. It’s efficient on small or nearly sorted datasets, achieving a best-case O(n) time complexity. However, its O(n²) complexity in average and worst cases makes it less suitable for large, random datasets. The algorithm iteratively places each item into its proper place within the sorted portion of the array.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)",
    },
  },
  bubble: {
    title: "Bubble Sort",
    shortDescription:
      "Ideal for nearly sorted datasets, simple to implement, but highly inefficient on large unsorted arrays due to its O(n²) complexity.",
    longDescription:
      "Bubble Sort is a straightforward algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if necessary. It’s best suited for nearly sorted arrays, where its best-case time complexity is O(n). Despite its simplicity, Bubble Sort is inefficient for large datasets, as its average and worst-case complexities are both O(n²).",
    timeComplexity: {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)",
    },
  },
  quick: {
    title: "Quick Sort",
    shortDescription:
      "Fast and efficient for most cases, with an average time complexity of O(n log n), though pivot choice can sometimes lead to suboptimal performance.",
    longDescription:
      "Quick Sort is a highly efficient sorting algorithm that works by partitioning an array around a pivot and recursively sorting the sub-arrays. It typically achieves O(n log n) time complexity, making it very fast in practice. However, if the pivot choice is poor, it can degrade to O(n²). Despite this, Quick Sort is widely used due to its superior average performance and minimal memory usage.",
    timeComplexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n²)",
    },
  },
  merge: {
    title: "Merge Sort",
    shortDescription:
      "Merge Sort is consistent and stable with predictable performance, ideal for large datasets, but requires additional memory.",
    longDescription:
      "Merge Sort is a stable and reliable sorting algorithm that divides the array into smaller sub-arrays, sorts them, and then merges them back together. Its time complexity is O(n log n) in all cases, making it suitable for large datasets. However, its need for additional memory during the merging process can be a limitation in resource-constrained environments.",
    timeComplexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
    },
  },
 rotate_Array: {
    title: "Rotate Array",
    shortDescription:
      "Merge Sort is consistent and stable with predictable performance, ideal for large datasets, but requires additional memory.",
    longDescription:
      "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
  },
  jump: {
    title: "Jump Game",
    shortDescription:
      "You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position",
    longDescription:
      "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
  },   
  merge_Array: {
    title: "Merge Sorted Array",
    shortDescription:
      "You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position",
    longDescription:
      `You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
      Merge nums1 and nums2 into a single array sorted in non-decreasing order.`,
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
  },   
};
