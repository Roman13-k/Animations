import { ToastVarisnts } from "@/contexts/ToastContext";

export interface Toast {
  id: string;
  type: ToastVarisnts;
  title: string;
  description: string;
}
