import { CaseReducer } from "@reduxjs/toolkit";
import { FetchProductFailureAction, ProductState } from "../../types";

export const failureCase: CaseReducer<
  ProductState,
  FetchProductFailureAction
> = (state) => ({
  ...state,
  data: {
    ...state.data,
    ...state.rollbackData,
  },
  rollbackData: undefined,
});
