import { createAction } from "@reduxjs/toolkit";
import { FILTERS_ACTION_TYPES, UpdateFilterPayload } from "../types/filters";

export const updateFilters = createAction<
  UpdateFilterPayload,
  FILTERS_ACTION_TYPES.UPDATE
>(FILTERS_ACTION_TYPES.UPDATE);

export const resetFilters = createAction(FILTERS_ACTION_TYPES.RESET_TRIGGER);
