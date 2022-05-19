import { Input, Select } from "@chakra-ui/react";
import { render, fireEvent, screen } from "../../testConfig/customRender";
import { renderHook, waitFor } from "../../testConfig/customRenderHook";
import { useFilterProduct } from "./useFilterProduct";

describe("useFilterProduct hook", () => {
  test("If onChangeText is called, valueFilters text should be change", async () => {
    const { result } = renderHook(() => useFilterProduct());
    render(
      <Input
        value={result.current.valueFilters.text}
        onChange={result.current.onChangeText}
        data-testid="input"
      />
    );
    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "test" } });
    await waitFor(() => {
      expect(result.current.valueFilters.text).toBe("test");
    });
  });
  test("If onChangeSelectInput is called, valueFilters category should be change", async () => {
    const { result } = renderHook(() => useFilterProduct());
    render(
      <Select
        value={result.current.valueFilters.category}
        onChange={result.current.onChangeSelectInput}
        data-testid="input"
      >
        <option value="test" />
      </Select>
    );
    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "test" } });
    await waitFor(() => {
      expect(result.current.valueFilters.category).toBe("test");
    });
  });
});
