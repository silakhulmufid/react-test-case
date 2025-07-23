import {
  GET_ARTICLE,
  GET_INFINITE_NEWS,
  GET_INFINITE_NEWS_FAILED,
  GET_INFINITE_NEWS_SUCCESS,
  GET_NEWS,
  GET_NEWS_FAILED,
  GET_NEWS_SUCCESS,
  GET_NEWS_TOP_HEADLINES,
  GET_NEWS_TOP_HEADLINES_FAILED,
  GET_NEWS_TOP_HEADLINES_SUCCESS,
} from "./constant"
import type {
  IActionGetArticle,
  IActionGetNews,
  IResponseGetNews,
} from "./type"

const initData = {
  articles: [],
  status: null,
  totalResults: null,
}

const initialState = {
  loading: false,
  infiniteLoading: false,
  error: null,
  data: initData,
  headlines: initData,
  business: initData,
  entertainment: initData,
  health: initData,
  science: initData,
  sports: initData,
  technology: initData,
  article: null,
}

export const newsReducer = (
  state: IResponseGetNews = initialState,
  action: IActionGetNews
): IResponseGetNews => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        loading: true,
      }

    case GET_NEWS_SUCCESS:
      const data = {
        ...state,
        loading: false,
      }

      switch (action.payload?.q) {
        case "business":
          return {
            ...data,
            business: action.response,
          }
        case "entertainment":
          return {
            ...data,
            entertainment: action.response,
          }
        case "health":
          return {
            ...data,
            health: action.response,
          }
        case "science":
          return {
            ...data,
            science: action.response,
          }
        case "sports":
          return {
            ...data,
            sports: action.response,
          }
        case "technology":
          return {
            ...data,
            technology: action.response,
          }
        default:
          return {
            ...data,
            data: action.response,
          }
      }

    case GET_NEWS_FAILED:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.error,
      }

    case GET_INFINITE_NEWS:
      return {
        ...state,
        infiniteLoading: true,
      }

    case GET_INFINITE_NEWS_SUCCESS:
      const infiniteData = {
        ...state,
        infiniteLoading: false,
      }

      switch (action.payload?.q) {
        case "business":
          return {
            ...infiniteData,
            business: action.response,
          }
        case "entertainment":
          return {
            ...infiniteData,
            entertainment: action.response,
          }
        case "health":
          return {
            ...infiniteData,
            health: action.response,
          }
        case "science":
          return {
            ...infiniteData,
            science: action.response,
          }
        case "sports":
          return {
            ...infiniteData,
            sports: action.response,
          }
        case "technology":
          return {
            ...infiniteData,
            technology: action.response,
          }
        default:
          return {
            ...infiniteData,
            data: action.response,
          }
      }

    case GET_INFINITE_NEWS_FAILED:
      return {
        ...state,
        ...initialState,
        error: action.error,
      }

    case GET_NEWS_TOP_HEADLINES:
      return {
        ...state,
        loading: true,
      }

    case GET_NEWS_TOP_HEADLINES_SUCCESS:
      return {
        ...state,
        loading: false,
        headlines: action.response,
      }

    case GET_NEWS_TOP_HEADLINES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    case GET_ARTICLE:
      return {
        ...state,
        article: action.payload as IActionGetArticle["payload"],
      }

    default:
      return state
  }
}
