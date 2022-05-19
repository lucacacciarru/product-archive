import { CaseReducer } from "@reduxjs/toolkit";
import { ProductState } from "../types";
import { UpdateFiltersAction } from "../types/filters";

export const updateFilterCase: CaseReducer<
  ProductState,
  UpdateFiltersAction
> = (state, action) => ({
  ...state,
  filters: {
    ...state.filters,
    ...action.payload.properties,
  },
});
