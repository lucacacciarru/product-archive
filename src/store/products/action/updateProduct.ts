import { createAction } from "@reduxjs/toolkit";
import {
  UpdateProductPayload,
  UPDATE_PRODUCT_ACTION_TYPES,
} from "../types/updateProduct";

export const updateProductTrigger = createAction<
  UpdateProductPayload,
  UPDATE_PRODUCT_ACTION_TYPES.TRIGGER
>(UPDATE_PRODUCT_ACTION_TYPES.TRIGGER);

export const updateProductRequest = createAction<
  UpdateProductPayload,
  UPDATE_PRODUCT_ACTION_TYPES.REQUEST
>(UPDATE_PRODUCT_ACTION_TYPES.REQUEST);

export const updateProductSuccess = createAction(
  UPDATE_PRODUCT_ACTION_TYPES.SUCCESS
);

export const updateProductFailure = createAction(
  UPDATE_PRODUCT_ACTION_TYPES.FAILURE
);
