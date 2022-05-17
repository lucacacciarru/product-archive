import { CaseReducer } from "@reduxjs/toolkit";
import { formatListToState } from "../../../utils/formatListToState";
import { FetchProductSuccessAction, ProductState } from "../../types";

export const successCase: CaseReducer<
  ProductState,
  FetchProductSuccessAction
> = (state, action) => ({
  ...state,
  data: formatListToState(action.payload, "id"),
  rollbackData: undefined,
});
