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
      <HStack mt="4" gap="6">
        <Box w="md">
          <InputGroup flexDir="column">
            <InputContainer label="Product name">
              <Input
                pr="4.5rem"
                value={valueFilters.text}
                onChange={onChangeText}
                placeholder="Search product"
              />
            </InputContainer>
          </InputGroup>
        </Box>
        <Box w="md" mt="8">
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
