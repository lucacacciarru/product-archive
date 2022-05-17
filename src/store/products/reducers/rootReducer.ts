import { createReducer } from "@reduxjs/toolkit";
import * as fetchProductCase from "./fetchProductCases";
import * as createProductCase from "./createProductCases";
import * as updateProductCase from "./updateProductCase";
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

const INITIAL_STATE: ProductState = {
  data: {
    allIds: [],
    byId: {},
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
    .addDefaultCase((state) => state);
});

// {
//   type: 'product/update/trigger',
//     payload: {id: '1', properties: {category: 'Luca'}}
// }
