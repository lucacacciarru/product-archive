import { useDispatch } from "react-redux";
import { createProductTrigger } from "../store/products/action/createProduct";
import { fetchProductTrigger } from "../store/products/action/fetchProduct";
import { updateProductTrigger } from "../store/products/action/updateProduct";
import { Product } from "../store/products/types";

export function useProduct() {
  const dispatch = useDispatch();

  function getProduct() {
    dispatch(fetchProductTrigger());
  }

  function createProduct(product: Product) {
    dispatch(createProductTrigger(product));
  }
  function updateProduct(id: string, properties: Omit<Partial<Product>, "id">) {
    dispatch(updateProductTrigger({ id, properties }));
  }

  return {
    getProduct,
    createProduct,
    updateProduct,
  };
}
