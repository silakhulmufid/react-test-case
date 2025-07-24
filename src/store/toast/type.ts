import type { ToastMessageProps } from "../../hooks/useToastMessage"

export interface ToastAction {
  type: string
  data: ToastMessageProps
}
