import { configureStore } from "@reduxjs/toolkit";
import { createRootSaga, reducer } from "../store";
import { CustomOptions } from "./types";
import createSagaMiddleware from "redux-saga";
import { DefaultRootState } from "react-redux";

const INITIAL_STATE: DefaultRootState = {
  categories: { data: [] },
  products: {
    data: {
      allIds: [],
      byId: {},
    },
    filters: {
      category: "",
      text: "",
    },
  },
};

const sagaMiddleware = createSagaMiddleware();

export function getStoreForTesting(options?: CustomOptions) {
  const state = { ...INITIAL_STATE, ...options?.mocks };

  const store = configureStore({
    reducer,
    middleware: [sagaMiddleware],
    preloadedState: state,
  });

  sagaMiddleware.run(createRootSaga());

  return store;
}
