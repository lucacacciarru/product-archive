import { PayloadAction, Action } from "@reduxjs/toolkit";
import { Product } from "./general";

export enum CREATE_PRODUCT_ACTION_TYPES {
  TRIGGER = "product/create/trigger",
  REQUEST = "product/create/request",
  SUCCESS = "product/create/success",
  FAILURE = "product/create/failure",
}

export type CreateProductPayload = Product;

export type CreateProductAction = PayloadAction<
  CreateProductPayload,
  CREATE_PRODUCT_ACTION_TYPES.TRIGGER
>;
export type CreateProductRequestAction = PayloadAction<
  CreateProductPayload,
  CREATE_PRODUCT_ACTION_TYPES.REQUEST
>;

export type CreateProductSuccessAction =
  Action<CREATE_PRODUCT_ACTION_TYPES.SUCCESS>;

export type CreateProductFailureAction =
  Action<CREATE_PRODUCT_ACTION_TYPES.FAILURE>;
