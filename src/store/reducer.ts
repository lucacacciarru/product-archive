import { combineReducers } from "redux";
import { categoriesRootReducer } from "./categories/rootReducer";
import { productRootReducer } from "./products/reducers/rootReducer";

const reducers = {
  products: productRootReducer,
  categories: categoriesRootReducer,
};

declare module "react-redux" {
  type LocalRootReducers = {
    [K in keyof typeof reducers]: ReturnType<typeof reducers[K]>;
  };

  export interface DefaultRootState extends LocalRootReducers {}
}

export const reducer = combineReducers(reducers);
