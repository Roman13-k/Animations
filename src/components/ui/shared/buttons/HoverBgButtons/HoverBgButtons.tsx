import React from "react";
import styles from "./HoverBgButtons.module.css";

export default function HoverBgButtons() {
  return (
    <div className={styles.container}>
      <button className={`${styles.button} ${styles.btn1}`}>HOVER</button>
      <button className={`${styles.button} ${styles.btn2}`}>HOVER</button>
      <button className={`${styles.button} ${styles.btn3}`}>
        <span>HOVER</span>
      </button>
      <button className={`${styles.button} ${styles.btn4}`}>HOVER</button>
    </div>
  );
}
