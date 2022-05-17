import { CaseReducer } from "@reduxjs/toolkit";
import { FetchProductRequestAction, ProductState } from "../../types";

export const requestCase: CaseReducer<
  ProductState,
  FetchProductRequestAction
> = (state) => ({
  ...state,
  rollbackData: {
    ...state.data,
  },
});
