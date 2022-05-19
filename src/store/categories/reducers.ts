import { CaseReducer } from "@reduxjs/toolkit";
import {
  CategoriesState,
  FetchCategoriesFailureAction,
  FetchCategoriesRequestAction,
  FetchCategoriesSuccessAction,
} from "./types";

export const fetchCategoriesRequestCase: CaseReducer<
  CategoriesState,
  FetchCategoriesRequestAction
> = (state) => ({
  ...state,
});

export const fetchCategoriesSuccessCase: CaseReducer<
  CategoriesState,
  FetchCategoriesSuccessAction
> = (state, action) => ({
  ...state,
  data: action.payload,
});

export const fetchCategoriesFailureCase: CaseReducer<
  CategoriesState,
  FetchCategoriesFailureAction
> = (state) => ({
  ...state,
});
