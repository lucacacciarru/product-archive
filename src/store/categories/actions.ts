import { createAction } from "@reduxjs/toolkit";
import {
  FetchCategoriesSuccessPayload,
  FETCH_CATEGORIES_ACTION_TYPES,
} from "./types";

export const fetchCategoriesTrigger = createAction(
  FETCH_CATEGORIES_ACTION_TYPES.TRIGGER
);

export const fetchCategoriesRequest = createAction(
  FETCH_CATEGORIES_ACTION_TYPES.REQUEST
);

export const fetchCategoriesFailure = createAction(
  FETCH_CATEGORIES_ACTION_TYPES.FAILURE
);

export const fetchCategoriesSuccess = createAction<
  FetchCategoriesSuccessPayload,
  FETCH_CATEGORIES_ACTION_TYPES.SUCCESS
>(FETCH_CATEGORIES_ACTION_TYPES.SUCCESS);
