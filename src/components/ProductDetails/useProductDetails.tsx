import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useProduct } from "../../hook";
import { getProductById } from "../../store/products/selectors";
import { Product } from "../../store/products/types";

export function useProductDetails() {
  const { getSingleProduct } = useProduct();

  const entity = useParams();
  const selectedProduct: Product = useSelector(
    getProductById(entity.id as string)
  );

  useEffect(() => {
    getSingleProduct(entity.id as string);
  }, [entity.id]);

  return { selectedProduct, id: entity.id as string };
}
