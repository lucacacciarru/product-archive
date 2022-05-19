import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../../store/products/selectors";
import { ProductCard } from "../ProductCard";

export function useProductSection() {
  const products = useSelector(getProducts);

  const renderCardProduct = useMemo(
    () => products.map((item) => <ProductCard key={item.id} {...item} />),
    [products]
  );

  return {
    renderCardProduct,
  };
}
