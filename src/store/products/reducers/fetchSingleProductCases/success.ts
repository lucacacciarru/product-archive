import { CaseReducer } from "@reduxjs/toolkit";
import { ProductState } from "../../types";
import { FetchSingleProductSuccessAction } from "../../types/fetchSingleProduct";

export const successCase: CaseReducer<
  ProductState,
  FetchSingleProductSuccessAction
> = (state, action) => {
  return {
    ...state,
    data: {
      allIds: [...state.data.allIds, action.payload.id],
      byId: {
        ...state.data.byId,
        [action.payload.id]: {
          ...action.payload,
        },
      },
    },
    rollbackData: undefined,
  };
};
