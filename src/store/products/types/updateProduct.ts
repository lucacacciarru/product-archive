import { PayloadAction, Action } from "@reduxjs/toolkit";
import { Product } from "./general";

export enum UPDATE_PRODUCT_ACTION_TYPES {
  TRIGGER = "products/update/trigger",
  REQUEST = "products/update/request",
  SUCCESS = "products/update/success",
  FAILURE = "products/update/failure",
}

export type UpdateProductPayload = {
  id: string;
  properties: Omit<Partial<Product>, "id">;
};

export type UpdateProductAction = PayloadAction<
  UpdateProductPayload,
  UPDATE_PRODUCT_ACTION_TYPES.TRIGGER
>;

export type UpdateProductRequestAction = PayloadAction<
  UpdateProductPayload,
  UPDATE_PRODUCT_ACTION_TYPES.REQUEST
>;

export type UpdateProductSuccessAction =
  Action<UPDATE_PRODUCT_ACTION_TYPES.SUCCESS>;

export type UpdateProductFailureAction =
  Action<UPDATE_PRODUCT_ACTION_TYPES.FAILURE>;
