"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Carusel.module.css";
import { caruselImages } from "@/utils/carusel";

type Position = "hidden" | "center" | "left" | "right";

export default function Carusel() {
  const [dragOffset, setDragOffset] = useState(0);
  const [index, setIndex] = useState(0);
  const startX = useRef<null | number>(null);

  const prev = () => setIndex((i) => (i - 1 + caruselImages.length) % caruselImages.length);
  const next = () => setIndex((i) => (i + 1) % caruselImages.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const currentX = e.touches[0].clientX;
    setDragOffset(currentX - startX.current);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (startX.current === null) return;
    setDragOffset(e.clientX - startX.current);
  };

  const finalizeSwipe = () => {
    if (startX.current === null) return;
    if (Math.abs(dragOffset) > 50) {
      dragOffset > 0 ? prev() : next();
    }
    setDragOffset(0);
    startX.current = null;
  };

  const getPosition = (i: number): Position => {
    const pos = (i - index + caruselImages.length) % caruselImages.length;
    if (pos === 0) return "center";
    if (pos === 1 || pos === -caruselImages.length + 1) return "right";
    if (pos === caruselImages.length - 1 || pos === -1) return "left";
    return "hidden";
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={finalizeSwipe}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={finalizeSwipe}
      className={styles.wrapper}>
      <div
        style={{
          transform: `translateX(${dragOffset}px)`,
          transition: "transform 0.3s ease",
        }}
        className={styles.carousel}>
        {caruselImages.map((src, i) => {
          const position = getPosition(i);

          return (
            <div key={i} className={`${styles.imageWrapper} ${styles[position]}`}>
              <div className={`${styles.image} `} style={{ backgroundImage: `url(${src})` }} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
