import { CaseReducer } from "@reduxjs/toolkit";
import { ProductState } from "../../types";
import { CreateProductFailureAction } from "../../types/createProduct";

export const failureCase: CaseReducer<
  ProductState,
  CreateProductFailureAction
> = (state) => ({
  ...state,
  data: {
    ...state.data,
    ...state.rollbackData,
  },
  rollbackData: undefined,
});
