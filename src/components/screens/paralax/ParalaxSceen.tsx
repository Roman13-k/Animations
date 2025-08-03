"use client";
import styles from "./ParalaxScreen.module.css";
import React, { useRef } from "react";
import { paralaxData } from "@/utils/paralax";
import { useParallax } from "@/hooks/useParalax";

export default function ParalaxSceen() {
  const containerRef = useRef<null | HTMLElement>(null);
  const { handleMouseLeave, handleMouseMove } = useParallax(containerRef, {
    selector: "li",
  });

  return (
    <section
      ref={containerRef}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Мы играем словами — но в этих словах скрыта целая эпоха.</h1>
        <ul className={styles.list}>
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
