import { all, fork } from "redux-saga/effects";
import { productRootSaga } from "./products/saga";

export const createRootSaga = () => {
  return function* rootSaga() {
    const allSagas = [productRootSaga];
    yield all(allSagas.map((saga) => fork(saga)));
  };
};
