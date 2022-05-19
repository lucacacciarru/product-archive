import { Input, Select, Stack, Textarea } from "@chakra-ui/react";
import { InputContainer } from "../InputContainer/InputContainer";
import { CustomNumberInput } from "../CustomNumberInput";
import { Product } from "../../store/products/types";
import { ProductWithoutId } from "../../store/products/types/createProduct";
import { useProductModalForm } from "./useProductModalForm";

type Props = Omit<Product, "id"> & {
  setState: React.Dispatch<React.SetStateAction<ProductWithoutId>>;
};

export const ProductModalForm: React.FC<Props> = ({
  category,
  description,
  image,
  price,
  title,
  setState,
}) => {
  const {
    onChange,
    onChangeNumberInput,
    onChangeSelectInput,
    onChangeTextArea,
    renderCategoriesOption,
  } = useProductModalForm(setState);
  return (
    <Stack gap="6">
      <InputContainer label="Title*">
        <Input name="title" value={title} onChange={onChange} />
      </InputContainer>
      <InputContainer label="Image (src only)">
        <Input name="image" value={image} onChange={onChange} />
      </InputContainer>
      <InputContainer label="Description*">
        <Textarea value={description} onChange={onChangeTextArea} />
      </InputContainer>
      <InputContainer label="Category*">
        <Select value={category} onChange={onChangeSelectInput}>
          {renderCategoriesOption}
        </Select>
      </InputContainer>
      <InputContainer label="Price*">
        <CustomNumberInput
          onChange={onChangeNumberInput}
          value={price}
          min={1}
          max={1000}
        />
      </InputContainer>
    </Stack>
  );
};
