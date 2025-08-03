"use client";
import { Toast } from "@/interface/toast";
import { toastTemplates } from "@/utils/toast";
import { createContext, PropsWithChildren, useContext, useState } from "react";

export type ToastVarisnts = "success" | "warn" | "error";

interface ToastContext {
  toasts: Toast[];
  handleAddToast: (variant: ToastVarisnts) => void;
}

export const ToastContext = createContext({} as ToastContext);

export const useToastContext = () => useContext(ToastContext);

export function ToastContextProvider({ children }: PropsWithChildren) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const handleAddToast = (variant: ToastVarisnts) => {
    const newToast = createToast(variant);
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== newToast.id));
    }, 3000);
  };

  function createToast(type: ToastVarisnts): Toast {
    return {
      id: crypto.randomUUID(),
      ...toastTemplates[type],
    };
  }

  return (
    <ToastContext.Provider value={{ toasts, handleAddToast }}>{children}</ToastContext.Provider>
  );
}
