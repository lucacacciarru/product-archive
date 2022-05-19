import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetProduct } from "../../hook";
import { getProductById } from "../../store/products/selectors";
import { Product } from "../../store/products/types";

export function useProductDetails() {
  const getProduct = useGetProduct();

  const entity = useParams();
  const selectedProduct: Product = useSelector(
    getProductById(entity.id as string)
  );

  useEffect(() => {
    if (entity.id) {
      getProduct(entity.id);
    }
  }, [entity.id, getProduct]);

  return { selectedProduct, id: entity.id as string };
}
