import {
  GET_ARTICLE,
  GET_INFINITE_NEWS,
  GET_NEWS,
  GET_NEWS_TOP_HEADLINES,
} from "./constant"
import type {
  IActionGetArticle,
  IActionGetNews,
  IActionGetNewsTopHeadlines,
} from "./type"

export const getNews = (payload: IActionGetNews["payload"]) => ({
  type: GET_NEWS,
  payload,
})

export const getInfiniteNews = (payload: IActionGetNews["payload"]) => ({
  type: GET_INFINITE_NEWS,
  payload,
})

export const getNewsTopHeadlines = (
  payload: IActionGetNewsTopHeadlines["payload"]
) => ({
  type: GET_NEWS_TOP_HEADLINES,
  payload,
})

export const getArticle = (payload: IActionGetArticle["payload"]) => ({
  type: GET_ARTICLE,
  payload,
})
