import { Button, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { useMemo } from "react";
import { EditProductModal } from "../EditProductModal";
import { ProductContent } from "./ProductContent";
import { useProductDetails } from "./useProductDetails";

export const ProductDetails: React.FC = () => {
  const { selectedProduct, id } = useProductDetails();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const renderProduct = useMemo(
    () =>
      selectedProduct ? (
        <ProductContent {...selectedProduct} />
      ) : (
        <Text>Loading...</Text>
      ),
    [selectedProduct]
  );
  return (
    <Stack gap="6" pb="20">
      {renderProduct}
      <Button onClick={onOpen}>Edit Product</Button>
      {selectedProduct && (
        <EditProductModal id={id} isOpen={isOpen} onClose={onClose} />
      )}
    </Stack>
  );
};
