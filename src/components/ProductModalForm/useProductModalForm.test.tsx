import { Input, Select, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { ProductWithoutId } from "../../store/products/types/createProduct";
import { render, screen, fireEvent } from "../../testConfig/customRender";
import { renderHook } from "../../testConfig/customRenderHook";
import { CustomNumberInput } from "../CustomNumberInput";
import { useProductModalForm } from "./useProductModalForm";

function useMockHook() {
  const [product, setProduct] = useState<ProductWithoutId>({
    category: "anyCategory",
    description: "anyDescription",
    image: "anySrc",
    price: 0,
    title: "anyTitle",
  });
  const {
    onChange,
    onChangeNumberInput,
    onChangeSelectInput,
    onChangeTextArea,
  } = useProductModalForm(setProduct);

  return {
    onChange,
    onChangeNumberInput,
    onChangeSelectInput,
    onChangeTextArea,
    product,
  };
}

const NEW_VALUE = "Test";
const NEW_NUMBER_VALUE = 6;

describe("useProductModalForm hook", () => {
  test("if onChange is called, passed useState title should be change", () => {
    const { result } = renderHook(() => useMockHook());
    const { onChange } = result.current;
    render(
      <Input
        value={result.current.product.title}
        name="title"
        onChange={onChange}
        data-testid="input"
      />
    );
    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: NEW_VALUE } });
    expect(result.current.product.title).toBe(NEW_VALUE);
  });
  test("if onChangeTextArea is called, passed useState description should be change", () => {
    const { result } = renderHook(() => useMockHook());
    const { onChangeTextArea } = result.current;
    render(
      <Textarea
        value={result.current.product.description}
        onChange={onChangeTextArea}
        data-testid="textArea"
      />
    );
    const textArea = screen.getByTestId("textArea");
    fireEvent.change(textArea, { target: { value: NEW_VALUE } });
    expect(result.current.product.description).toBe(NEW_VALUE);
  });
  test("if onChange is called, passed useState price should be change", () => {
    const { result } = renderHook(() => useMockHook());
    const { onChangeNumberInput } = result.current;
    render(
      <CustomNumberInput
        value={result.current.product.price}
        onChange={onChangeNumberInput}
      />
    );
    const textArea = screen.getByRole("spinbutton");
    fireEvent.change(textArea, { target: { value: NEW_NUMBER_VALUE } });
    expect(result.current.product.price).toBe(NEW_NUMBER_VALUE);
  });
  test("if onChangeSelectInput is called, passed useState category should be change", () => {
    const { result } = renderHook(() => useMockHook());
    const { onChangeSelectInput } = result.current;
    render(
      <Select
        value={result.current.product.category}
        onChange={onChangeSelectInput}
        data-testid="select"
      >
        <option value={NEW_VALUE} />
      </Select>
    );
    const select = screen.getByTestId("select");
    fireEvent.change(select, { target: { value: NEW_VALUE } });
    expect(result.current.product.category).toBe(NEW_VALUE);
  });
});
