import { createSelector } from "@reduxjs/toolkit";
import { baseSelector } from "./baseSelector";

export const getProductById = (id: string) =>
  createSelector(baseSelector, (productState) => productState.data.byId[id]);
