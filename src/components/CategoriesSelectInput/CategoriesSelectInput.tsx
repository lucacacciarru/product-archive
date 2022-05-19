import { Select, SelectProps } from "@chakra-ui/react";
import { useCategoriesSelectInput } from "./useCategoriesSelectInput";

export const CategoriesSelectInput: React.FC<SelectProps> = (prop) => {
  const { renderCategoriesOption } = useCategoriesSelectInput();

  return <Select {...prop}>{renderCategoriesOption}</Select>;
};
