import { useDispatch } from "react-redux";
import { createProductTrigger } from "../store/products/action/createProduct";
import { fetchProductTrigger } from "../store/products/action/fetchProduct";
import { fetchSingleProductTrigger } from "../store/products/action/fetchSingleProduct";
import { updateFilters } from "../store/products/action/filters";
import { updateProductTrigger } from "../store/products/action/updateProduct";
import { Filters, Product } from "../store/products/types";
import { ProductWithoutId } from "../store/products/types/createProduct";

export function useProduct() {
  const dispatch = useDispatch();

  function getProduct() {
    dispatch(fetchProductTrigger());
  }

  function getSingleProduct(id: string) {
    dispatch(fetchSingleProductTrigger({ id }));
  }

  function createProduct(product: ProductWithoutId) {
    dispatch(createProductTrigger(product));
  }

  function updateProduct(id: string, properties: Omit<Partial<Product>, "id">) {
    dispatch(updateProductTrigger({ id, properties }));
  }

  function updateFilter(properties: Partial<Filters>) {
    dispatch(updateFilters({ properties }));
  }

  return {
    getProduct,
    createProduct,
    updateProduct,
    getSingleProduct,
    updateFilter,
  };
}
