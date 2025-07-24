import type { ToastMessageProps } from "../../hooks/useToastMessage"
import { SET_TOAST } from "./constant"

export const setToast = (data: ToastMessageProps) => ({
  type: SET_TOAST,
  data,
})
