import axios from "axios"
import queryString from "query-string"
import { call, put, takeEvery } from "redux-saga/effects"
import { baseUrlApi, newsApiKey } from "../../constant"
import { setToast } from "../toast/action"
import {
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
import type { IActionGetNews, IActionGetNewsTopHeadlines } from "./type"

function* workerSagaGetNews(action: IActionGetNews): any {
  if (!action.payload) return

  try {
    const response = yield call(
      axios.get,
      `${baseUrlApi}/everything?${queryString.stringify({
        apiKey: newsApiKey,
        ...action.payload,
      })}`
    )

    if (response.status === 200) {
      yield put({
        type: GET_NEWS_SUCCESS,
        response: response.data,
        payload: action.payload,
      })
    } else {
      throw new Error("Unexpected status code")
    }
  } catch (error: any) {
    const message =
      error?.response?.data?.message || error.message || "Unknown error"
    yield put(setToast({ content: message, type: "error" }))
    yield put({
      type: GET_NEWS_FAILED,
      error: message,
    })
  }
}

function* workerSagaGetInfiniteNews(action: IActionGetNews): any {
  if (!action.payload) return

  try {
    const response = yield call(
      axios.get,
      `${baseUrlApi}/everything?${queryString.stringify({
        apiKey: newsApiKey,
        ...action.payload,
      })}`
    )

    if (response.status === 200) {
      yield put({
        type: GET_INFINITE_NEWS_SUCCESS,
        response: response.data,
        payload: action.payload,
      })
    } else {
      throw new Error("Unexpected status code")
    }
  } catch (error: any) {
    const message =
      error?.response?.data?.message || error.message || "Unknown error"
    yield put(setToast({ content: message, type: "error" }))
    yield put({
      type: GET_INFINITE_NEWS_FAILED,
      error: message,
    })
  }
}

function* workerSagaGetNewsTopHeadlines(
  action: IActionGetNewsTopHeadlines
): any {
  if (!action.payload) return

  try {
    const response = yield call(
      axios.get,
      `${baseUrlApi}/top-headlines?${queryString.stringify({
        apiKey: newsApiKey,
        ...action.payload,
      })}`
    )

    if (response.status === 200) {
      yield put({
        type: GET_NEWS_TOP_HEADLINES_SUCCESS,
        response: response.data,
      })
    } else {
      throw new Error("Unexpected status code")
    }
  } catch (error: any) {
    const message =
      error?.response?.data?.message || error.message || "Unknown error"
    yield put(setToast({ content: message, type: "error" }))
    yield put({
      type: GET_NEWS_TOP_HEADLINES_FAILED,
      error: message,
    })
  }
}

export const watcherNews = [
  takeEvery(GET_NEWS, workerSagaGetNews),
  takeEvery(GET_INFINITE_NEWS, workerSagaGetInfiniteNews),
  takeEvery(GET_NEWS_TOP_HEADLINES, workerSagaGetNewsTopHeadlines),
]
