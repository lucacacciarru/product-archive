import { put, takeLatest } from "redux-saga/effects";
import {
  createProductSuccess,
  createProductTrigger,
} from "../action/createProduct";
import { fetchProductTrigger } from "../action/fetchProduct";
import { fetchSingleProductTrigger } from "../action/fetchSingleProduct";
import { updateFilters } from "../action/filters";
import { updateProductTrigger } from "../action/updateProduct";
import { createProductSaga } from "./createProducts";
import { fetchOnUpdateFilters } from "./fetchOnUpdateFilters";
import { fetchProductSaga } from "./fetchProduct";
import { fetchSingleProductSaga } from "./fetchSingleProduct";
import { updateProductSaga } from "./updateProduct";

export function* productRootSaga() {
  yield takeLatest(fetchProductTrigger, fetchProductSaga);
  yield takeLatest(createProductTrigger, createProductSaga);
  yield takeLatest(updateProductTrigger, updateProductSaga);
  yield takeLatest(createProductSuccess, fetchProductSaga);
  yield takeLatest(fetchSingleProductTrigger, fetchSingleProductSaga);
  yield takeLatest(updateFilters, fetchOnUpdateFilters);

  yield put(fetchProductTrigger());
}
