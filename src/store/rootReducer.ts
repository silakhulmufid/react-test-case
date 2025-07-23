import { combineReducers } from "@reduxjs/toolkit";
import { navigationReducer, utilsReducer } from "./utils/reducer";
import { newsReducer } from "./news/reducer";

export const rootReducer = combineReducers({
  utils: utilsReducer,
  navigation: navigationReducer,
  news: newsReducer,
});
