import { PayloadAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { Product } from "./general";

export enum FETCH_PRODUCT_ACTION_TYPES {
  TRIGGER = "products/fetch/trigger",
  REQUEST = "products/fetch/request",
  SUCCESS = "products/fetch/success",
  FAILURE = "products/fetch/failure",
}

export type FetchProductResponse = Product[];
export type FetchProductSuccessPayload = Product[];

export type FetchProductRequestAction =
  Action<FETCH_PRODUCT_ACTION_TYPES.REQUEST>;

export type FetchProductFailureAction =
  Action<FETCH_PRODUCT_ACTION_TYPES.FAILURE>;

export type FetchProductSuccessAction = PayloadAction<
  FetchProductSuccessPayload,
  FETCH_PRODUCT_ACTION_TYPES.SUCCESS
>;
