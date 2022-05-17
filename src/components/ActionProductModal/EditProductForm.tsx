import { Input, Select, Stack, Textarea } from "@chakra-ui/react";
import { InputContainer } from "../InputContainer/InputContainer";
import { NumberInput } from "../NumberInput";

export const EditProductForm: React.FC = () => {
  return (
    <Stack>
      <InputContainer label="Title">
        <Input placeholder="Type product name" />
      </InputContainer>
      <InputContainer label="Image (src only)">
        <Input placeholder="Image src" />
      </InputContainer>
      <InputContainer label="Description">
        <Textarea />
      </InputContainer>
      <InputContainer label="Category">
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </InputContainer>
      <InputContainer label="Category">
        <NumberInput />
      </InputContainer>
    </Stack>
  );
};
