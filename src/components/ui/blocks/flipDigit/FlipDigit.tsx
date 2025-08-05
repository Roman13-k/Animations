"use client";
import React, { useEffect, useState } from "react";
import styles from "./FlipDigit.module.css";
import { motion } from "motion/react";

function FlipDigitComponent({ digit }: { digit: number }) {
  const [prevDigit, setPrevDigit] = useState(digit);
  const [isFliping, setIsFliping] = useState(false);

  useEffect(() => {
    if (digit !== prevDigit) {
      setIsFliping(true);
      const timeout = setTimeout(() => {
        setPrevDigit(digit);
        setIsFliping(false);
      }, 600);

      return () => clearTimeout(timeout);
    }
  }, [digit, prevDigit]);

  return (
    <div className={styles.card}>
      <div className={styles.card__top}>{digit}</div>
      <div className={styles.card__bottom}>{isFliping ? prevDigit : digit}</div>

      {isFliping && (
        <>
          <motion.div
            className={styles.flipTop}
            initial={{ rotateX: 0 }}
            animate={{ rotateX: -90 }}
            transition={{ duration: 0.3, ease: "easeIn" }}>
            {prevDigit}
          </motion.div>

          <motion.div
            className={styles.flipBottom}
            initial={{ rotateX: 90 }}
            animate={{ rotateX: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}>
            {digit}
          </motion.div>
        </>
      )}
    </div>
  );
}

const FlipDigit = React.memo(FlipDigitComponent);

export default FlipDigit;
