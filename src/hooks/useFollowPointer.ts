import { frame, useSpring } from "motion/react";
import { RefObject, useEffect } from "react";

const spring = { damping: 10, stiffness: 50 };

export function useFollowPointer(ref: RefObject<HTMLElement | null>) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;

    const handleFollow = ({ clientX, clientY }: MouseEvent) => {
      frame.read(() => {
        x.set(clientX - element?.offsetLeft - element.offsetWidth / 2),
          y.set(clientY - element.offsetTop - element.offsetHeight / 2);
      });
    };
    const reset = () => {
      x.set(0);
      y.set(0);
    };

    element.addEventListener("mousemove", handleFollow);
    element.addEventListener("mouseleave", reset);

    return () => {
      element.removeEventListener("mousemove", handleFollow);
      element.removeEventListener("mouseleave", reset);
    };
  }, [ref]);

  return { x, y };
}
