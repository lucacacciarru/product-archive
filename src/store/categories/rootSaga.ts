import { put, takeLatest, call } from "redux-saga/effects";
import {
  fetchCategoriesFailure,
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesTrigger,
} from "./actions";
import { fetchCategoriesApi } from "./api";
import { FetchCategoriesResponse } from "./types";

function* fetchCategoriesSaga() {
  yield put(fetchCategoriesRequest());
  try {
    const categories: FetchCategoriesResponse = yield call(fetchCategoriesApi);
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailure());
  }
}

export function* categoriesRootSaga() {
  yield takeLatest(fetchCategoriesTrigger, fetchCategoriesSaga);

  yield put(fetchCategoriesTrigger());
}
