import { CaseReducer } from "@reduxjs/toolkit";
import { ProductState } from "../types";
import { ResetFiltersAction } from "../types/filters";

export const resetFilterCase: CaseReducer<ProductState, ResetFiltersAction> = (
  state
) => {
  return {
    ...state,
    filters: {
      ...state.filters,
      resetFilters: true,
    },
  };
};
