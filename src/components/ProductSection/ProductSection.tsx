import {
  Box,
  Button,
  HStack,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CreateProductModal } from "../CreateProductModal";
import { FilterProducts } from "../FiltersProduct";
import { useProductSection } from "./useProductSection";

export const ProductSection: React.FC = () => {
  const { renderCardProduct } = useProductSection();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HStack justifyContent="space-between">
        <Box>
          <Text textStyle="h1" as="h1">
            Products
          </Text>
          <FilterProducts />
        </Box>
        <Button onClick={onOpen}>Add item</Button>
      </HStack>

      <SimpleGrid minChildWidth="300px" spacing="24">
        {renderCardProduct}
      </SimpleGrid>
      <CreateProductModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
