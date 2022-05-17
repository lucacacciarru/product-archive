import { createSelector } from "@reduxjs/toolkit";
import { baseSelector } from "./baseSelector";

export const getProducts = createSelector(baseSelector, (productState) =>
  productState.data.allIds.map((id) => productState.data.byId[id])
);
