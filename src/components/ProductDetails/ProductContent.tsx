import { Box, HStack, Image, Stack, Tag, Text } from "@chakra-ui/react";
import { Product } from "../../store/products/types";

export const ProductContent: React.FC<Product> = ({
  category,
  description,
  image,
  price,
  title,
}) => {
  return (
    <HStack
      flexDir={{ base: "column", xl: "row", lg: "row" }}
      w="full"
      h={{ base: "auto", xl: "80vh" }}
      justifyContent="center"
      p="6"
      borderWidth="2px"
      color="black"
      gap="12"
    >
      <Box boxSize={{ base: "60", xl: "lg", lg: "lg" }}>
        <Image
          w="full"
          objectFit="contain"
          src={image}
          h={{ base: "full", xl: "full" }}
        />
      </Box>
      <Stack h={{ base: "50%", xl: "full" }} gap="4" justifyContent="center">
        <Text as="h1" textStyle="h1">
          {title}
        </Text>
        <Tag>{category}</Tag>
        <Text>{description}</Text>
        <Text>${price}</Text>
      </Stack>
    </HStack>
  );
};
