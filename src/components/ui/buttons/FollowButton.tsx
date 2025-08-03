"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";
import { useFollowPointer } from "@/hooks/useFollowPointer";
import { useParallax } from "@/hooks/useParalax";

type FollowButtonProps = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
};

const spring = { damping: 10, stiffness: 50 };

export default function FollowButton({
  src,
  alt = "",
  width,
  height,
  className,
}: FollowButtonProps) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const { x, y } = useFollowPointer(ref);
  const { handleMouseLeave, handleMouseMove } = useParallax(ref);

  const maxLimit = 12;
  const limitedX = useSpring(0, spring);
  const limitedY = useSpring(0, spring);

  x.on("change", (val) => {
    limitedX.set(Math.min(Math.max(val, -maxLimit), maxLimit));
  });
  y.on("change", (val) => {
    limitedY.set(Math.min(Math.max(val, -maxLimit), maxLimit));
  });

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      ref={ref}>
      <motion.div
        style={{
          x: limitedX,
          y: limitedY,
        }}>
        <Image src={src} alt={alt} width={width} height={height} />
      </motion.div>
    </motion.button>
  );
}
