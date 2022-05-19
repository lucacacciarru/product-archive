import { PayloadAction } from "@reduxjs/toolkit";
import { Filters } from "./general";

export enum FILTERS_ACTION_TYPES {
  UPDATE = "filters/update",
}

export type FilterProperties = Partial<Filters>;

export type UpdateFilterPayload = {
  properties: FilterProperties;
};

export type UpdateFiltersAction = PayloadAction<
  UpdateFilterPayload,
  FILTERS_ACTION_TYPES.UPDATE
>;
