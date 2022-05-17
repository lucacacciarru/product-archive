import { CaseReducer } from "@reduxjs/toolkit";
import { ProductState } from "../../types";
import { CreateProductRequestAction } from "../../types/createProduct";

export const requestCase: CaseReducer<
  ProductState,
  CreateProductRequestAction
> = (state, action) => {
  const newProductId = action.payload.id;

  return {
    ...state,
    rollbackData: {
      ...state.data,
    },
    data: {
      allIds: [...state.data.allIds, newProductId],
      byId: {
        ...state.data.byId,
        [newProductId]: {
          ...action.payload,
        },
      },
    },
  };
};
