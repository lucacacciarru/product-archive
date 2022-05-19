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
import { PATHS } from "../../types";
import { ProductCardOption } from "./ProductCardOption";

const stackProps: BoxProps = {
  gap: "4",
  justifyContent: "center",
  py: "8",
  px: "4",
  borderRadius: "lg",
  borderWidth: "2px",
  borderColor: "black.20",
  bg: "white.0",
  boxShadow: "xl",
  position: "relative",
  _hover: { borderColor: "black.0" },
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
  image,
  price,
  title,
  id,
}) => {
  return (
    <Stack {...stackProps}>
      <ProductCardOption id={id} />
      <LinkBox>
        <Link to={`/${PATHS.PRODUCT}/${id}`}>
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
