import { createAction } from "@reduxjs/toolkit";
import {
  FetchProductSuccessPayload,
  FETCH_PRODUCT_ACTION_TYPES,
} from "../types/fetchProduct";

export const fetchProductTrigger = createAction(
  FETCH_PRODUCT_ACTION_TYPES.TRIGGER
);

export const fetchProductRequest = createAction(
  FETCH_PRODUCT_ACTION_TYPES.REQUEST
);

export const fetchProductFailure = createAction(
  FETCH_PRODUCT_ACTION_TYPES.FAILURE
);

export const fetchProductSuccess = createAction<
  FetchProductSuccessPayload,
  FETCH_PRODUCT_ACTION_TYPES.SUCCESS
>(FETCH_PRODUCT_ACTION_TYPES.SUCCESS);
