import {
  Box,
  BoxProps,
  Image,
  LinkBox,
  Stack,
  Tag,
  Text,
  TextProps,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Product } from "../../store/products/types";
import { ProductCardOption } from "./ProductCardOption";

const stackProps: BoxProps = {
  gap: "4",
  justifyContent: "center",
  py: "8",
  px: "4",
  borderRadius: "lg",
  border: "2px solid black ",
  bg: "white.0",
  boxShadow: "xl",
  position: "relative",
};

const cutText: TextProps = {
  textStyle: "h3",
  color: "black.0",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
};

export const ProductCard: React.FC<Product> = ({
  category,
  description,
  image,
  price,
  title,
  id,
}) => {
  return (
    <Stack {...stackProps}>
      <ProductCardOption />
      <LinkBox>
        <Link to={`/${id}`}>
          <Box>
            <Tag>{category}</Tag>
          </Box>
          <Box boxSize="2xs" w="full" p="4" borderRadius="lg">
            <Image src={image} w="full" h="full" objectFit="contain" />
          </Box>
          <Stack w="100%" gap="2">
            <Text {...cutText}>{title}</Text>
            <Text>${price}</Text>
          </Stack>
        </Link>
      </LinkBox>
    </Stack>
  );
};
