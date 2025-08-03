import { TransformsMap } from "@/interface/stickyAnimation";
import { MotionValue, useTransform } from "motion/react";

export const createTransforms = <N extends number>(
  transformMap: TransformsMap<N>,
  rawProgress: MotionValue<number>,
): Record<string, MotionValue<number>> => {
  const result: Record<string, MotionValue<number>> = {};

  for (const [name, output] of Object.entries(transformMap.values)) {
    result[name] = useTransform(rawProgress, transformMap.input, [...output]);
  }

  return result;
};
