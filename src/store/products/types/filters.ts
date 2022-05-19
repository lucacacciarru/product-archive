import { PayloadAction, Action } from "@reduxjs/toolkit";
import { Filters } from "./general";

export enum FILTERS_ACTION_TYPES {
  UPDATE = "filters/update",
  RESET_TRIGGER = "filters/resetTrigger",
}

export type FilterProperties = Partial<Filters>;

export type UpdateFilterPayload = {
  properties: FilterProperties;
};

export type UpdateFiltersAction = PayloadAction<
  UpdateFilterPayload,
  FILTERS_ACTION_TYPES.UPDATE
>;
export type ResetFiltersAction = Action<FILTERS_ACTION_TYPES.RESET_TRIGGER>;
