import { call, put } from "redux-saga/effects";
import {
  createProductFailure,
  createProductSuccess,
  createProductRequest,
} from "../action/createProduct";
import { createProductApi } from "../api/createProduct";
import { CreateProductAction } from "../types/createProduct";

export function* createProductSaga(action: CreateProductAction) {
  yield put(createProductRequest(action.payload));
  try {
    yield call(createProductApi, action.payload);
    yield put(createProductSuccess());
  } catch (error) {
    yield put(createProductFailure());
  }
}
