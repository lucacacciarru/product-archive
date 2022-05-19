import { createSelector } from "@reduxjs/toolkit";
import { DefaultRootState } from "react-redux";

const baseSelector = (state: DefaultRootState) => state.categories;

export const getCategories = createSelector(
  baseSelector,
  (categoriesState) => categoriesState.data
);
