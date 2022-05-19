import { createReducer } from "@reduxjs/toolkit";
import * as fetchProductCase from "./fetchProductCases";
import * as createProductCase from "./createProductCases";
import * as updateProductCase from "./updateProductCase";
import * as fetchSingleProductCase from "./fetchSingleProductCases";
import {
  fetchProductFailure,
  fetchProductRequest,
  fetchProductSuccess,
} from "../action/fetchProduct";
import { ProductState } from "../types";
import {
  createProductFailure,
  createProductRequest,
  createProductSuccess,
} from "../action/createProduct";
import {
  updateProductFailure,
  updateProductRequest,
  updateProductSuccess,
} from "../action/updateProduct";
import {
  fetchSingleProductFailure,
  fetchSingleProductRequest,
  fetchSingleProductSuccess,
} from "../action/fetchSingleProduct";
import { updateFilters } from "../action/filters";
import { updateFilterCase } from "./updateFilterCase";

const INITIAL_STATE: ProductState = {
  data: {
    allIds: [],
    byId: {},
  },
  filters: {
    category: "",
    text: "",
  },
};
export const productRootReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(fetchProductRequest, fetchProductCase.requestCase)
    .addCase(fetchProductFailure, fetchProductCase.failureCase)
    .addCase(fetchProductSuccess, fetchProductCase.successCase)
    .addCase(createProductRequest, createProductCase.requestCase)
    .addCase(createProductSuccess, createProductCase.successCase)
    .addCase(createProductFailure, createProductCase.failureCase)
    .addCase(updateProductRequest, updateProductCase.requestCase)
    .addCase(updateProductSuccess, updateProductCase.successCase)
    .addCase(updateProductFailure, updateProductCase.failureCase)
    .addCase(fetchSingleProductRequest, fetchSingleProductCase.requestCase)
    .addCase(fetchSingleProductSuccess, fetchSingleProductCase.successCase)
    .addCase(fetchSingleProductFailure, fetchSingleProductCase.failureCase)
    .addCase(updateFilters, updateFilterCase)
    .addDefaultCase((state) => state);
});
