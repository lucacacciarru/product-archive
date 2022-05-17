import { SimpleGrid, Text } from "@chakra-ui/react";
import { useProductSection } from "./useProductSection";

export const ProductSection: React.FC = () => {
  const { renderCardProduct } = useProductSection();
  return (
    <>
      <Text textStyle="h1" as="h1">
        Products
      </Text>
      <SimpleGrid minChildWidth="16vw" spacing="24">
        {renderCardProduct}
      </SimpleGrid>
    </>
  );
};
