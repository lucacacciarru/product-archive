import { call, put } from "redux-saga/effects";
import { updateProductApi } from "../api";
import {
  updateProductFailure,
  updateProductRequest,
  updateProductSuccess,
} from "../action/updateProduct";
import { UpdateProductAction } from "../types/updateProduct";

export function* updateProductSaga(action: UpdateProductAction) {
  yield put(updateProductRequest(action.payload));
  try {
    yield call(updateProductApi, action.payload);
    yield put(updateProductSuccess());
  } catch (error) {
    yield put(updateProductFailure());
  }
}
