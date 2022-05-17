import { combineReducers } from "redux";
import { productRootReducer } from "./products/reducers/rootReducer";

const reducers = {
  product: productRootReducer,
};

declare module "react-redux" {
  type LocalRootReducers = {
    [K in keyof typeof reducers]: ReturnType<typeof reducers[K]>;
  };

  export interface DefaultRootState extends LocalRootReducers {}
}

export const reducer = combineReducers(reducers);
