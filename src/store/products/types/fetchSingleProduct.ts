import { PayloadAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { Product } from "./general";

export enum FETCH_SINGLE_PRODUCT_ACTION_TYPES {
  TRIGGER = "products/fetchSingle/trigger",
  REQUEST = "products/fetchSingle/request",
  SUCCESS = "products/fetchSingle/success",
  FAILURE = "products/fetchSingle/failure",
}

export type FetchSingleProductPayload = {
  id: string;
};
export type FetchSingleProductResponse = Product;
export type FetchSingleProductSuccessPayload = Product;

export type FetchSingleProductAction = PayloadAction<
  FetchSingleProductPayload,
  FETCH_SINGLE_PRODUCT_ACTION_TYPES.TRIGGER
>;

export type FetchSingleProductRequestAction =
  Action<FETCH_SINGLE_PRODUCT_ACTION_TYPES.REQUEST>;

export type FetchSingleProductFailureAction =
  Action<FETCH_SINGLE_PRODUCT_ACTION_TYPES.FAILURE>;

export type FetchSingleProductSuccessAction = PayloadAction<
  FetchSingleProductSuccessPayload,
  FETCH_SINGLE_PRODUCT_ACTION_TYPES.SUCCESS
>;
