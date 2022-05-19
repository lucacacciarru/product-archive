import { all, fork } from "redux-saga/effects";
import { categoriesRootSaga } from "./categories/rootSaga";
import { productRootSaga } from "./products/saga";

export const createRootSaga = () => {
  return function* rootSaga() {
    const allSagas = [productRootSaga, categoriesRootSaga];
    yield all(allSagas.map((saga) => fork(saga)));
  };
};
