import { SET_TOAST } from "./constant"
import type { ToastAction } from "./type"

const initialState = {
  content: "",
}

export const toastReducer = (state = initialState, action: ToastAction) => {
  switch (action.type) {
    case SET_TOAST:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state
  }
}
