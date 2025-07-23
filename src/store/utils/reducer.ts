import { SET_UTILS } from "./constant";
import { type UtilsAction } from "./type";

const initialState = {
  push: "",
};

export const utilsReducer = (state = initialState, action: UtilsAction) => {
  switch (action.type) {
    case SET_UTILS:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

const initialStateNav: TNav = {
  path: null,
};

interface TNav {
  path: string | null;
}

export const navigationReducer: (state: TNav, action: any) => TNav = (
  state = initialStateNav,
  action: any,
) => {
  switch (action.type) {
    case "NAVIGATE":
      return { path: action.payload };
    case "CLEAR_NAVIGATION":
      return { path: null };
    default:
      return state;
  }
};
