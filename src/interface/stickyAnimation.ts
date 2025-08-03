export interface StickyImg<N extends number> {
  src: string;
  width: number;
  height: number;
  transforms: TransformsMap<N>;
}

export interface TransformsMap<N extends number> {
  input: FixedLengthArray<number, N>;
  values: Record<string, readonly [number, number]>;
}

export interface ButtonsFrames {
  show: boolean;
  expand: boolean;
}
