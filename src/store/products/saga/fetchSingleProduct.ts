import { call, put, select } from "redux-saga/effects";

import {
  fetchSingleProductFailure,
  fetchSingleProductRequest,
  fetchSingleProductSuccess,
} from "../action/fetchSingleProduct";
import { fetchSingleProductApi } from "../api/fetchSingleProduct";
import { getProductById } from "../selectors";
import { Product } from "../types";
import {
  FetchSingleProductAction,
  FetchSingleProductResponse,
} from "../types/fetchSingleProduct";

export function* fetchSingleProductSaga(action: FetchSingleProductAction) {
  yield put(fetchSingleProductRequest());
  const productInState: Product | undefined = yield select(
    getProductById(action.payload.id)
  );

  //To optimize the process, if the product already exists, the API will not be launched
  if (productInState) {
    yield put(fetchSingleProductSuccess(productInState));
    return;
  }
  try {
    const product: FetchSingleProductResponse = yield call(
      fetchSingleProductApi,
      action.payload.id
    );
    yield put(fetchSingleProductSuccess(product));
  } catch (error) {
    yield put(fetchSingleProductFailure());
  }
}
