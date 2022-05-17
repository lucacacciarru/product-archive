import { ProductState } from "../types/general";

type State = { product: ProductState };

export const baseSelector = (state: State) => state.product;
