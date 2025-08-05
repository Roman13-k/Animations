import FollowButton from "@/components/ui/shared/buttons/FollowButton";
import Image from "next/image";
import React, { useRef } from "react";
import styles from "./ButtonsFrame.module.css";
import { motion } from "motion/react";
import { ButtonsFrames } from "@/interface/stickyAnimation";
import { useAnimateLetters } from "@/hooks/useAnimateLetters";

export default function ButtonsFrame({ showButtons }: { showButtons: ButtonsFrames }) {
  const titleRef = useRef<HTMLSpanElement | null>(null);
  useAnimateLetters({ showParagraph: showButtons.expand, titleRef });
  return (
    <motion.div
      animate={{ opacity: showButtons.show ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className={styles.wrapper}>
      <FollowButton
        className={styles.wrapper__btn}
        src='/stickyscroll/girls.png'
        width={45}
        height={45}
      />
      <FollowButton
        className={styles.wrapper__btn}
        src='/stickyscroll/flag.png'
        width={45}
        height={45}
      />
      <button
        className={`${styles.wrapper__btn_main} ${
          showButtons.expand && styles.wrapper__btn_main_expand
        }`}>
        <Image
          className={styles.btn_main_loop}
          alt=''
          src={"/stickyscroll/loop.png"}
          width={51}
          height={51}
        />
        {showButtons.expand && (
          <span ref={titleRef} className={`${styles.btn_main_text} `}>
            {"Прокачивает мозг".split("").map((letter, i) => (
              <span key={i} className={styles.letter}>
                {letter}
              </span>
            ))}
          </span>
        )}
      </button>
      <FollowButton
        className={styles.wrapper__btn}
        src='/stickyscroll/cloud.png'
        width={45}
        height={45}
      />
      <FollowButton
        className={styles.wrapper__btn}
        src='/stickyscroll/bulb.png'
        width={45}
        height={45}
      />
    </motion.div>
  );
}
