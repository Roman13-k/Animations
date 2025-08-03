type FixedLengthArray<T, L extends number, R extends T[] = []> = R["length"] extends L
  ? R
  : FixedLengthArray<T, L, [T, ...R]>;
