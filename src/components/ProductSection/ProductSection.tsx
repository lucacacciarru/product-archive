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
      <HStack
        justifyContent="space-between"
        flexDir={{ base: "column-reverse", xl: "row" }}
        gap={{ base: "24", xl: "4" }}
      >
        <Box w={{ base: "full", lg: "auto", xl: "auto" }}>
          <Text textStyle="h1" as="h1">
            Products
          </Text>
          <FilterProducts />
        </Box>
        <Button w={{ base: "full", xl: "auto" }} onClick={onOpen}>
          Add item
        </Button>
      </HStack>

      <SimpleGrid minChildWidth="300px" spacing="24">
        {renderCardProduct}
      </SimpleGrid>
      <CreateProductModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
