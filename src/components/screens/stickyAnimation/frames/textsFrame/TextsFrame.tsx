"use client";
import React, { useRef } from "react";
import styles from "./TextsFrame.module.css";
import { motion } from "motion/react";
import { useAnimateLetters } from "@/hooks/useAnimateLetters";

interface TextsFrameProps {
  showParagraph: boolean;
}

const title = "Мозг — быстрее, Речь — выразительнее, Память — глубже.";

export default function TextsFrame({ showParagraph }: TextsFrameProps) {
  const titleRef = useRef<null | HTMLHeadingElement>(null);
  const hasAnimated = useAnimateLetters({ showParagraph, titleRef });

  return (
    <>
      <motion.h2
        animate={{
          opacity: showParagraph && hasAnimated.current ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className={styles.title}
        ref={titleRef}>
        {title.split("").map((char, i) => (
          <span key={i} style={{ display: "inline-block", opacity: 0 }}>
            {char}
          </span>
        ))}
      </motion.h2>
      <motion.p
        animate={{
          opacity: showParagraph ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          delay: 0.5,
        }}
        className={styles.paragraph}>
        Игра тренирует память, мышление и креатив за счёт вовлечения в спонтанную речь, импровизацию
        и работу с образами. Это настоящий ментальный тренажёр — только в форме смеха и общения.
      </motion.p>
    </>
  );
}
