"use client";
import { animate, stagger } from "motion";
import { RefObject, useEffect, useRef } from "react";

export function useAnimateLetters({
  showParagraph,
  titleRef,
}: {
  showParagraph: boolean;
  titleRef: RefObject<HTMLElement | null>;
}) {
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (showParagraph) {
      if (!hasAnimated.current && titleRef.current) {
        hasAnimated.current = true;

        const letters = Array.from(titleRef.current.children);
        animate(
          letters,
          {
            opacity: [0, 1],
            transform: ["translateY(10px)", "translateY(0)"],
          },
          {
            delay: stagger(0.04, { startDelay: 0.2 }),
            duration: 0.3,
          },
        );
      }
    } else {
      hasAnimated.current = false;
    }
  }, [showParagraph, hasAnimated, titleRef]);

  return hasAnimated;
}
