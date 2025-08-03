import Image from "next/image";
import React from "react";
import { motion, MotionValue, useTransform } from "motion/react";
import { stickyAnimation } from "@/utils/stickyAnimation/stickyAnimation";
import styles from "./ImagesFrame.module.css";
import { createTransforms } from "@/utils/stickyAnimation/createTransforms";

export default function ImagesFrame({ rawProgress }: { rawProgress: MotionValue<number> }) {
  return (
    <>
      {stickyAnimation.map((img, index) => {
        const imgStyles = createTransforms(img.transforms, rawProgress);
        const translateZ = useTransform(imgStyles.z, (z) => `translateZ(${z}px)`);
        return (
          <motion.div
            key={index}
            className={`${styles.scene} ${styles[`scene_${index + 1}`]}`}
            style={{
              opacity: imgStyles.opacity,
              scale: imgStyles.scale,
              transform: translateZ,
            }}>
            <Image src={img.src} alt='' width={img.width} height={img.height} />
          </motion.div>
        );
      })}
    </>
  );
}
