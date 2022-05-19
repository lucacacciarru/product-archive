import { PayloadAction, Action } from "@reduxjs/toolkit";

export enum FETCH_CATEGORIES_ACTION_TYPES {
  TRIGGER = "categories/fetch/trigger",
  REQUEST = "categories/fetch/request",
  SUCCESS = "categories/fetch/success",
  FAILURE = "categories/fetch/failure",
}

export type CategoriesState = {
  data: string[];
};

export type FetchCategoriesResponse = string[];
export type FetchCategoriesSuccessPayload = FetchCategoriesResponse;

export type FetchCategoriesRequestAction =
  Action<FETCH_CATEGORIES_ACTION_TYPES.REQUEST>;

export type FetchCategoriesFailureAction =
  Action<FETCH_CATEGORIES_ACTION_TYPES.FAILURE>;

export type FetchCategoriesSuccessAction = PayloadAction<
  FetchCategoriesSuccessPayload,
  FETCH_CATEGORIES_ACTION_TYPES.SUCCESS
>;
