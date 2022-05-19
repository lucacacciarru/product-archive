import { createAction } from "@reduxjs/toolkit";
import {
  CreateProductPayload,
  CREATE_PRODUCT_ACTION_TYPES,
} from "../types/createProduct";

export const createProductTrigger = createAction<
  CreateProductPayload,
  CREATE_PRODUCT_ACTION_TYPES.TRIGGER
>(CREATE_PRODUCT_ACTION_TYPES.TRIGGER);

export const createProductRequest = createAction(
  CREATE_PRODUCT_ACTION_TYPES.REQUEST
);

export const createProductSuccess = createAction(
  CREATE_PRODUCT_ACTION_TYPES.SUCCESS
);

export const createProductFailure = createAction(
  CREATE_PRODUCT_ACTION_TYPES.FAILURE
);
