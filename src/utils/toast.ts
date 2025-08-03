import { ToastVarisnts } from "@/contexts/ToastContext";
import { Toast } from "@/interface/toast";

export const toastTemplates: Record<ToastVarisnts, Omit<Toast, "id">> = {
  success: {
    type: "success",
    title: "Успешно!",
    description: "Ваши изменения были сохранены.",
  },
  warn: {
    type: "warn",
    title: "Предупреждение",
    description: "Некоторые поля заполнены некорректно.",
  },
  error: {
    type: "error",
    title: "Ошибка",
    description: "Что-то пошло не так. Попробуйте ещё раз.",
  },
};
