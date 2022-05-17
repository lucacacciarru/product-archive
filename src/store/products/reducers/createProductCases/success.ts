import { CaseReducer } from "@reduxjs/toolkit";
import { ProductState } from "../../types";
import { CreateProductSuccessAction } from "../../types/createProduct";

export const successCase: CaseReducer<
  ProductState,
  CreateProductSuccessAction
> = (state) => ({
  ...state,
  rollbackData: undefined,
});
