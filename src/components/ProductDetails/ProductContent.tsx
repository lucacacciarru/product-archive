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
      w="full"
      h="80vh"
      justifyContent="center"
      p="6"
      borderWidth="2px"
      color="black"
      gap="6"
    >
      <Box boxSize={"lg"}>
        <Image w="full" h="full" objectFit="contain" src={image} />
      </Box>
      <Stack boxSize={"lg"} h="100%" gap="4" justifyContent="center">
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
