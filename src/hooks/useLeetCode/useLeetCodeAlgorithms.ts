
import { useJump } from "./useJump";
import { useRotateArray } from "./useRotateArray";

export const useLeetCodeAlgorithms = () => {

  const rotateArray = useRotateArray();
  const jump = useJump()

  return { rotateArray, jump };
};
