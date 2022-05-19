import { createReducer } from "@reduxjs/toolkit";
import {
  fetchCategoriesRequest,
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from "./actions";
import {
  fetchCategoriesRequestCase,
  fetchCategoriesFailureCase,
  fetchCategoriesSuccessCase,
} from "./reducers";
import { CategoriesState } from "./types";

const INITIAL_STATE: CategoriesState = { data: [] };

export const categoriesRootReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(fetchCategoriesRequest, fetchCategoriesRequestCase)
    .addCase(fetchCategoriesFailure, fetchCategoriesFailureCase)
    .addCase(fetchCategoriesSuccess, fetchCategoriesSuccessCase)
    .addDefaultCase((state) => state);
});
