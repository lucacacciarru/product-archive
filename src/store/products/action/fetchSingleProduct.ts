import { createAction } from "@reduxjs/toolkit";
import {
  FetchSingleProductPayload,
  FetchSingleProductSuccessPayload,
  FETCH_SINGLE_PRODUCT_ACTION_TYPES,
} from "../types/fetchSingleProduct";

export const fetchSingleProductTrigger = createAction<
  FetchSingleProductPayload,
  FETCH_SINGLE_PRODUCT_ACTION_TYPES.TRIGGER
>(FETCH_SINGLE_PRODUCT_ACTION_TYPES.TRIGGER);

export const fetchSingleProductRequest = createAction(
  FETCH_SINGLE_PRODUCT_ACTION_TYPES.REQUEST
);
export const fetchSingleProductFailure = createAction(
  FETCH_SINGLE_PRODUCT_ACTION_TYPES.FAILURE
);
export const fetchSingleProductSuccess = createAction<
  FetchSingleProductSuccessPayload,
  FETCH_SINGLE_PRODUCT_ACTION_TYPES.SUCCESS
>(FETCH_SINGLE_PRODUCT_ACTION_TYPES.SUCCESS);
