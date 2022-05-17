import { createSelector } from "@reduxjs/toolkit";
import { baseSelector } from "./baseSelector";

export const getProductAllIds = createSelector(
  baseSelector,
  (productState) => productState.data.allIds
);
