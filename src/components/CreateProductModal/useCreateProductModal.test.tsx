import { useSelector } from "react-redux";
import { getProductAllIds } from "../../store/products/selectors";
import { renderHook, act, waitFor } from "../../testConfig/customRenderHook";
import { useCreateProductModal } from "./useCreateProductModal";

const fn = jest.fn();

function useCustomHook() {
  const { onClick, setProductInfo, isDisableConfirmButton } =
    useCreateProductModal(fn);
  const ids = useSelector(getProductAllIds);

  return {
    onClick,
    setProductInfo,
    ids,
    isDisableConfirmButton,
  };
}

describe("useCreateProductModal hook", () => {
  test("if onClick is called, onClose attribute should be call", async () => {
    const { result } = renderHook(() => useCustomHook());
    act(() => result.current.onClick());
    await waitFor(() => {
      expect(fn).toBeCalled();
    });
  });
  test("If title, description and category is not empty, isDisableConfirmButton should be false", async () => {
    const { result } = renderHook(() => useCustomHook());
    act(() =>
      result.current.setProductInfo((prev) => ({
        ...prev,
        title: "Test",
        description: "Test",
        category: "Test",
      }))
    );
    await waitFor(() => {
      expect(result.current.isDisableConfirmButton).toBeFalsy();
    });
  });
});
