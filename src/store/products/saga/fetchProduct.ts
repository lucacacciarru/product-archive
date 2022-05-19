import { call, put, select } from "redux-saga/effects";
import {
  fetchProductFailure,
  fetchProductRequest,
  fetchProductSuccess,
} from "../action/fetchProduct";
import { fetchProductApi } from "../api";
import { getFilters } from "../selectors/getFilters";
import { FetchProductResponse, Filters } from "../types";

export function* fetchProductSaga() {
  yield put(fetchProductRequest());
  const filters: Filters = yield select(getFilters);
  try {
    const products: FetchProductResponse = yield call(fetchProductApi, filters);
    yield put(fetchProductSuccess(products));
  } catch (error) {
    yield put(fetchProductFailure());
  }
}
