import { createSelector } from "@reduxjs/toolkit";
import { baseSelector } from "./baseSelector";

export const getFilters = createSelector(
  baseSelector,
  (productState) => productState.filters
);
