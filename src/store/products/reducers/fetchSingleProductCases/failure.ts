import { CaseReducer } from "@reduxjs/toolkit";
import { ProductState } from "../../types";
import { FetchSingleProductFailureAction } from "../../types/fetchSingleProduct";

export const failureCase: CaseReducer<
  ProductState,
  FetchSingleProductFailureAction
> = (state) => ({
  ...state,
  data: {
    ...state.data,
    ...state.rollbackData,
  },
  rollbackData: undefined,
});
