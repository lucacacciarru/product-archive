import { CaseReducer } from "@reduxjs/toolkit";
import { ProductState } from "../../types/general";
import { UpdateProductRequestAction } from "../../types/updateProduct";

export const requestCase: CaseReducer<
  ProductState,
  UpdateProductRequestAction
> = (state, action) => ({
  ...state,
  rollbackData: {
    ...state.data,
  },
  data: {
    ...state.data,
    byId: {
      ...state.data.byId,
      [action.payload.id]: {
        ...state.data.byId[action.payload.id],
        ...action.payload.properties,
      },
    },
  },
});
