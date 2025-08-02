"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useTransform, useMotionValue, animate, stagger } from "motion/react";
import styles from "./StickyAnimation.module.css";
import Image from "next/image";
import { stickyAnimation } from "@/utils/stickyAnimation";

const title = "Мозг — быстрее, Речь — выразительнее, Память — глубже.";

export default function StickyAnimation() {
  const [showParagraph, setShowParagraph] = useState(false);
  const rawProgress = useMotionValue(0);
  const titleRef = useRef<null | HTMLHeadingElement>(null);
  const hasAnimated = useRef(false);

  const createTransforms = (start: number, end: number) => {
    const opacity = useTransform(rawProgress, [start, end], [0, 1]);
    const scale = useTransform(rawProgress, [start, end], [0.8, 1]);
    const z = useTransform(rawProgress, [start, end], [-500, 1000]);

    const transform = useTransform(z, (zVal) => `translateZ(${zVal}px)`);

    return { opacity, scale, transform };
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = scrollTop / maxScroll;
      rawProgress.set(scrollProgress);

      setShowParagraph(scrollProgress > 0.2);

      if (scrollProgress > 0.2 && !hasAnimated.current && titleRef.current) {
        hasAnimated.current = true;

        const letters = Array.from(titleRef.current.children);
        animate(
          letters,
          {
            opacity: [0, 1],
            transform: ["translateY(10px)", "translateY(0)"],
          },
          {
            delay: stagger(0.04),
            duration: 0.3,
          },
        );
      }
    }; // подумать над повторной анимацией

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [rawProgress]);

  return (
    <section className={styles.section}>
      <div className={styles.sticky}>
        <div className={styles.container}>
          <motion.h2
            animate={{
              opacity: !showParagraph && hasAnimated.current ? 0 : 1,
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
              duration: 0.3,
              delay: 0.2,
            }}
            className={styles.paragraph}>
            Игра тренирует память, мышление и креатив за счёт вовлечения в спонтанную речь,
            импровизацию и работу с образами. Это настоящий ментальный тренажёр — только в форме
            смеха и общения.
          </motion.p>
          <div className={styles.wrapper}>
            <button className={styles.wrapper__btn}>
              <Image alt='' src={"/stickyscroll/girls.png"} width={45} height={45} />
            </button>
            <button className={styles.wrapper__btn}>
              <Image alt='' src={"/stickyscroll/flag.png"} width={45} height={45} />
            </button>
            <button className={styles.wrapper__btn_main}>
              <Image
                className={styles.btn_main_loop}
                alt=''
                src={"/stickyscroll/loop.png"}
                width={51}
                height={51}
              />
              Прокачивает мозг
            </button>
            <button className={styles.wrapper__btn}>
              <Image alt='' src={"/stickyscroll/cloud.png"} width={45} height={45} />
            </button>
            <button className={styles.wrapper__btn}>
              <Image alt='' src={"/stickyscroll/bulb.png"} width={45} height={45} />
            </button>
          </div>
          {stickyAnimation.map((img, index) => {
            const imgStyles = createTransforms(img.start, img.end);
            return (
              <motion.div
                key={index}
                className={`${styles.scene} ${styles[`scene_${index + 1}`]}`}
                style={{
                  opacity: imgStyles.opacity,
                  scale: imgStyles.scale,
                  transform: imgStyles.transform,
                }}>
                <Image src={img.src} alt='' width={img.width} height={img.height} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
