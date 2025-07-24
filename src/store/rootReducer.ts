import { combineReducers } from "@reduxjs/toolkit"
import { newsReducer } from "./news/reducer"
import { toastReducer } from "./toast/reducer"
import { navigationReducer, utilsReducer } from "./utils/reducer"

export const rootReducer = combineReducers({
  utils: utilsReducer,
  navigation: navigationReducer,
  news: newsReducer,
  toast: toastReducer,
})
