import { Box, HStack, Input, InputGroup, Text } from "@chakra-ui/react";
import React from "react";
import { CategoriesSelectInput } from "../CategoriesSelectInput";
import { InputContainer } from "../InputContainer";
import { useFilterProduct } from "./useFilterProduct";

export const FilterProducts: React.FC = () => {
  const { onChangeText, valueFilters, onChangeSelectInput } =
    useFilterProduct();
  return (
    <>
      <Text as="h2" textStyle="h2" mt="8">
        Filters
      </Text>
      <HStack flexDir={{ base: "column", xl: "row" }} mt="4" gap="6">
        <Box w={{ base: "full", xl: "md" }}>
          <InputGroup flexDir="column">
            <InputContainer label="Product name">
              <Input
                value={valueFilters.text}
                onChange={onChangeText}
                placeholder="Search product"
              />
            </InputContainer>
          </InputGroup>
        </Box>
        <Box w={{ base: "full" }} mt="8">
          <InputGroup flexDir="column">
            <InputContainer label="Category">
              <CategoriesSelectInput
                value={valueFilters.category}
                onChange={onChangeSelectInput}
              />
            </InputContainer>
          </InputGroup>
        </Box>
      </HStack>
    </>
  );
};
