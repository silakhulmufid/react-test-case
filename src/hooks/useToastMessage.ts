import { message } from "antd"
import type { ArgsProps } from "antd/es/message"
import { useEffect } from "react"
import { useAppSelector } from "../store/hooks"

export type ToastMessageProps = ArgsProps
export function useToastMessage() {
  const [messageApi, contextHolder] = message.useMessage()
  const toast = useAppSelector((state) => state.toast)

  useEffect(() => {
    if (!toast.content) return
    messageApi.open(toast)
  }, [toast])

  return contextHolder
}
