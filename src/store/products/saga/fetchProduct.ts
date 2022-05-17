import { call, put } from "redux-saga/effects";
import {
  fetchProductFailure,
  fetchProductRequest,
  fetchProductSuccess,
} from "../action/fetchProduct";
import { fetchProductApi } from "../api";
import { FetchProductResponse } from "../types";

export function* fetchProductSaga() {
  yield put(fetchProductRequest());
  try {
    const products: FetchProductResponse = yield call(fetchProductApi);
    yield put(fetchProductSuccess(products));
  } catch (error) {
    yield put(fetchProductFailure());
  }
}
