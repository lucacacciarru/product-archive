import { Stack, Text } from "@chakra-ui/react";
import { ProductDetails } from "../components/ProductDetails";

export const Product: React.FC = () => {
  return (
    <Stack gap="12">
      <Text as="h1" textAlign="center" textStyle="h1">
        Product details
      </Text>
      <ProductDetails />
    </Stack>
  );
};
