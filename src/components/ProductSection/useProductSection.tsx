import { Box, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../../store/products/selectors";
import { ProductCard } from "../ProductCard";

export function useProductSection() {
  const products = useSelector(getProducts);

  const renderCardProduct = useMemo(
    () =>
      products.length ? (
        products.map((item) => <ProductCard key={item.id} {...item} />)
      ) : (
        <Box py="24">
          <Text>No products available</Text>
        </Box>
      ),
    [products]
  );

  return {
    renderCardProduct,
  };
}
