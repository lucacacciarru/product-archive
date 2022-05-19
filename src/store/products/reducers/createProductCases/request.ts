import { CaseReducer } from "@reduxjs/toolkit";
import { ProductState } from "../../types";
import { CreateProductRequestAction } from "../../types/createProduct";

export const requestCase: CaseReducer<
  ProductState,
  CreateProductRequestAction
> = (state) => {
  return {
    ...state,
    rollbackData: {
      ...state.data,
    },
    filters: {
      ...state.filters,
      resetFilters: true,
    },
  };
};
