import { SET_UTILS } from "./constant"
import { type UtilsData } from "./type"

export const setUtils = (data: UtilsData) => ({
  type: SET_UTILS,
  data,
})
