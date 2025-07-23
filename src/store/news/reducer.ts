import {
  GET_ARTICLE,
  GET_NEWS,
  GET_NEWS_FAILED,
  GET_NEWS_SUCCESS,
  GET_NEWS_TOP_HEADLINES,
  GET_NEWS_TOP_HEADLINES_FAILED,
  GET_NEWS_TOP_HEADLINES_SUCCESS,
} from "./constant";
import type { IActionGetArticle, IActionGetNews, IResponseGetNews } from "./type";

const initialState = {
  loading: false,
  error: null,
  data: [],
  headlines: [],
  business: [],
  entertainment: [],
  health: [],
  science: [],
  sports: [],
  technology: [],
  article: null,
};

export const newsReducer = (
  state: IResponseGetNews = initialState,
  action: IActionGetNews,
): IResponseGetNews => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        loading: true,
      };

    case GET_NEWS_SUCCESS:
      const data = {
        ...state,
        loading: false,
      };

      switch (action.payload?.q) {
        case "business":
          return {
            ...data,
            business: action.response,
          };
        case "entertainment":
          return {
            ...data,
            entertainment: action.response,
          };
        case "health":
          return {
            ...data,
            health: action.response,
          };
        case "science":
          return {
            ...data,
            science: action.response,
          };
        case "sports":
          return {
            ...data,
            sports: action.response,
          };
        case "technology":
          return {
            ...data,
            technology: action.response,
          };
        default:
          return {
            ...data,
            data: action.response,
          };
      }

    case GET_NEWS_FAILED:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.error,
      };

    case GET_NEWS_TOP_HEADLINES:
      return {
        ...state,
        loading: true,
      };

    case GET_NEWS_TOP_HEADLINES_SUCCESS:
      return {
        ...state,
        loading: false,
        headlines: action.response,
      };

    case GET_NEWS_TOP_HEADLINES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    
    case GET_ARTICLE:
      return {
        ...state,
        article: action.payload as IActionGetArticle["payload"],
      }

    default:
      return state;
  }
};
