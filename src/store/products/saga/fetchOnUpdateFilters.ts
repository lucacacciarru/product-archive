import { put } from "redux-saga/effects";
import { fetchProductTrigger } from "../action/fetchProduct";

export function* fetchOnUpdateFilters() {
  yield put(fetchProductTrigger());
}
