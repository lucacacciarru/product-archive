import { put, takeLatest } from "redux-saga/effects";
import { createProductTrigger } from "../action/createProduct";
import { fetchProductTrigger } from "../action/fetchProduct";
import { updateProductTrigger } from "../action/updateProduct";
import { createProductSaga } from "./createProducts";
import { fetchProductSaga } from "./fetchProduct";
import { updateProductSaga } from "./updateProduct";

export function* productRootSaga() {
  yield takeLatest(fetchProductTrigger, fetchProductSaga);
  yield takeLatest(createProductTrigger, createProductSaga);
  yield takeLatest(updateProductTrigger, updateProductSaga);

  yield put(fetchProductTrigger());
}
