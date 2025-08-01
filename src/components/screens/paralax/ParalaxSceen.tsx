"use client";
import { useAnimate } from "motion/react";
import styles from "./ParalaxScreen.module.css";
import React, { useEffect, useRef } from "react";
import { paralaxData } from "@/utils/paralax";

export default function ParalaxSceen() {
  const [scope, animate] = useAnimate();
  const containerRef = useRef<null | HTMLElement>(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 20;
    const y = ((e.clientY - top) / height - 0.5) * 20;

    animate("li", { x, y }, { duration: 0.3, ease: "easeOut" });
  };

  const handleMouseLeave = () => {
    animate("li", { x: 0, y: 0 }, { duration: 0.3, ease: "easeOut" });
  };

  return (
    <section
      ref={containerRef}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Мы играем словами — но в этих словах скрыта целая эпоха.</h1>
        <ul ref={scope} className={styles.list}>
          {paralaxData.map((value, index) => (
            <li key={index} className={`${styles.item} ${styles[`item_${index + 1}`]}`}>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
