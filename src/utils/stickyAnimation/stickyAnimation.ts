import { StickyImg } from "@/interface/stickyAnimation";

const values = {
  opacity: [0, 1],
  scale: [0.8, 1],
  z: [-500, 1000],
} as const;

export const stickyAnimation: StickyImg<2>[] = [
  {
    src: "/stickyscroll/img1.png",
    width: 375,
    height: 572,
    transforms: {
      input: [0.25, 0.5],
      values,
    },
  },
  {
    src: "/stickyscroll/img2.png",
    width: 243,
    height: 376,
    transforms: {
      input: [0.4, 0.65],
      values,
    },
  },
  {
    src: "/stickyscroll/img3.png",
    width: 274,
    height: 94,
    transforms: {
      input: [0.55, 0.8],
      values,
    },
  },
  {
    src: "/stickyscroll/img4.png",
    width: 256,
    height: 89,
    transforms: {
      input: [0.7, 0.95],
      values,
    },
  },
];
