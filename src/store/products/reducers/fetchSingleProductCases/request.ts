import { CaseReducer } from "@reduxjs/toolkit";
import { ProductState } from "../../types";
import { FetchSingleProductRequestAction } from "../../types/fetchSingleProduct";

export const requestCase: CaseReducer<
  ProductState,
  FetchSingleProductRequestAction
> = (state) => ({
  ...state,
  rollbackData: {
    ...state.data,
  },
});
