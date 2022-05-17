import { CaseReducer } from "@reduxjs/toolkit";
import { ProductState } from "../../types/general";
import { UpdateProductFailureAction } from "../../types/updateProduct";

export const failureCase: CaseReducer<
  ProductState,
  UpdateProductFailureAction
> = (state) => ({
  ...state,
  data: {
    ...state.data,
    ...state.rollbackData,
  },
  rollbackData: undefined,
});
