import { ToastVarisnts } from "@/contexts/ToastContext";
import React from "react";
import styles from "./Toast.module.css";
import { toastTemplates } from "@/utils/toast";
import { motion } from "motion/react";

export default function Toast({ variant }: { variant: ToastVarisnts }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 100 }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: 100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`${styles.toast} ${styles[`toast_${variant}`]}`}>
      <strong>{toastTemplates[variant].title}</strong>
      <p>{toastTemplates[variant].description}</p>
    </motion.div>
  );
}
