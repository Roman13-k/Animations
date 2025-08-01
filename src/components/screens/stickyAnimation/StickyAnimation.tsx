"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import styles from "./StickyAnimation.module.css";

export default function StickyAnimation() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = scrollTop / maxScroll;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.sticky}>
        <div className={styles.container}>
          {/* Scene 1 */}
          <motion.div
            className={styles.scene}
            style={{
              opacity: progress < 0.25 ? 1 : 0,
              scale: progress < 0.25 ? 1 : 0.95,
              transition: "all 0.4s ease-in-out",
            }}>
            <h1>Сцена 1</h1>
          </motion.div>

          {/* Scene 2 */}
          <motion.div
            className={styles.scene}
            style={{
              opacity: progress > 0.25 && progress < 0.5 ? 1 : 0,
              scale: progress > 0.25 && progress < 0.5 ? 1 : 0.95,
              transition: "all 0.4s ease-in-out",
            }}>
            <h1>Сцена 2</h1>
          </motion.div>

          {/* Scene 3 */}
          <motion.div
            className={styles.scene}
            style={{
              opacity: progress > 0.5 && progress < 0.75 ? 1 : 0,
              scale: progress > 0.5 && progress < 0.75 ? 1 : 0.95,
              transition: "all 0.4s ease-in-out",
            }}>
            <h1>Сцена 3</h1>
          </motion.div>

          {/* Scene 4 */}
          <motion.div
            className={styles.scene}
            style={{
              opacity: progress > 0.75 ? 1 : 0,
              scale: progress > 0.75 ? 1 : 0.95,
              transition: "all 0.4s ease-in-out",
            }}>
            <h1>Сцена 4</h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
