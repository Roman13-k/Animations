"use client";
import { useEffect, useState } from "react";
import { useMotionValue } from "motion/react";
import styles from "./StickyAnimation.module.css";
import ButtonsFrame from "./frames/buttonsFrame/ButtonsFrame";
import TextsFrame from "./frames/textsFrame/TextsFrame";
import ImagesFrame from "./frames/imagesFrame/ImagesFrame";

export default function StickyAnimation() {
  const [showButtons, setShowButtons] = useState({ show: false, expand: false });
  const [showParagraph, setShowParagraph] = useState(false);
  const rawProgress = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = scrollTop / maxScroll;
      rawProgress.set(progress);

      setShowParagraph(progress > 0.4);
      setShowButtons({ show: progress > 0.07, expand: progress > 0.12 });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [rawProgress]);

  return (
    <section className={styles.section}>
      <div className={styles.sticky}>
        <div className={styles.container}>
          <TextsFrame showParagraph={showParagraph} />
          <ButtonsFrame showButtons={showButtons} />
          <ImagesFrame rawProgress={rawProgress} />
        </div>
      </div>
    </section>
  );
}
