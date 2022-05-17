import { CaseReducer } from "@reduxjs/toolkit";
import { ProductState } from "../../types/general";
import { UpdateProductSuccessAction } from "../../types/updateProduct";

export const successCase: CaseReducer<
  ProductState,
  UpdateProductSuccessAction
> = (state) => ({
  ...state,
  rollbackData: undefined,
});
