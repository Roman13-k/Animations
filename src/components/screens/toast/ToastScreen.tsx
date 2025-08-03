"use client";
import React from "react";
import Container from "../../ui/layout/container/Container";
import styles from "./ToastSceen.module.css";
import { useToastContext } from "@/contexts/ToastContext";
import Toast from "@/components/ui/toast/Toast";
import { AnimatePresence } from "motion/react";

export default function ToastScreen() {
  const { toasts, handleAddToast } = useToastContext();
  return (
    <section>
      <Container>
        <div className={styles.wrapper}>
          <button
            onClick={() => handleAddToast("success")}
            className={`${styles.wrapper__btn} ${styles.wrapper__btn_success}`}>
            Success
          </button>
          <button
            onClick={() => handleAddToast("warn")}
            className={`${styles.wrapper__btn} ${styles.wrapper__btn_warn}`}>
            Warn
          </button>
          <button
            onClick={() => handleAddToast("error")}
            className={`${styles.wrapper__btn} ${styles.wrapper__btn_error}`}>
            Error
          </button>
        </div>

        <div className={styles.toastWrapper}>
          <AnimatePresence>
            {toasts.map((toast) => (
              <Toast variant={toast.type} key={toast.id} />
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
