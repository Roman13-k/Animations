"use client";
import { animate } from "motion/react";
import { RefObject, useEffect, useRef } from "react";

type UseParallaxOptions = {
  selector?: string;
  animateSelf?: boolean;
  power?: number;
};

export function useParallax(
  containerRef: RefObject<HTMLElement | null>,
  options: UseParallaxOptions = {},
) {
  const targetRef = useRef<HTMLElement | HTMLElement[] | null>(null);
  const { selector, animateSelf = false, power = 10 } = options;

  useEffect(() => {
    if (!containerRef.current) return;

    if (animateSelf) {
      targetRef.current = containerRef.current;
    } else if (selector) {
      const children = containerRef.current.querySelectorAll<HTMLElement>(selector);
      targetRef.current = Array.from(children);
    } else {
      targetRef.current = containerRef.current;
    }
  }, [selector, animateSelf, containerRef.current]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !targetRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * power * 2;
    const y = ((e.clientY - top) / height - 0.5) * power * 2;

    animate(targetRef.current, { x, y }, { duration: 0.3, ease: "easeOut" });
  };

  const handleMouseLeave = () => {
    if (!targetRef.current) return;
    animate(targetRef.current, { x: 0, y: 0 }, { duration: 0.3, ease: "easeOut" });
  };

  return { handleMouseMove, handleMouseLeave };
}
