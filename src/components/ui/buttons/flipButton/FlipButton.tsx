import React from "react";
import styles from "./FlipButton.module.css";

export default function FlipButton() {
  return <button className={styles.button} data-back='Back' data-front='Front'></button>;
}
