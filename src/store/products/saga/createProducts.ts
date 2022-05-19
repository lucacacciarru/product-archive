import { call, put, select } from "redux-saga/effects";
import { getCategories } from "../../categories/selectors";
import {
  createProductFailure,
  createProductSuccess,
  createProductRequest,
} from "../action/createProduct";
import { updateFilters } from "../action/filters";
import { createProductApi } from "../api/createProduct";
import { CreateProductAction } from "../types/createProduct";

export function* createProductSaga(action: CreateProductAction) {
  yield put(createProductRequest());
  try {
    const categories: string[] = yield select(getCategories);
    yield call(createProductApi, {
      ...action.payload,
      category: action.payload.category
        ? action.payload.category
        : categories[0],
    });
    yield put(updateFilters({ properties: { category: "", text: "" } }));

    yield put(createProductSuccess());
  } catch (error) {
    yield put(createProductFailure());
  }
}
