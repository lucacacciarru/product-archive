import { useSelector } from "react-redux";
import { getCategories } from "../store/categories/selectors";
import { renderHook, act, waitFor } from "../testConfig/customRenderHook";
import { useCategories } from "./useCategories";

const MOCK_VALUE = "test";

function mockFetch(response?: any) {
  fetchMock.doMock(() =>
    Promise.resolve({
      body: JSON.stringify(response || {}),
    })
  );
}

function useCustomHook() {
  const { fetchCategories } = useCategories();
  const stateCategories = useSelector(getCategories);

  return {
    fetchCategories,
    stateCategories,
  };
}

describe("useCategories hook", () => {
  test("if fetchCategories, categories state data should be populate", async () => {
    mockFetch([MOCK_VALUE]);
    const { result } = renderHook(() => useCustomHook());
    act(() => result.current.fetchCategories());
    await waitFor(() => {
      expect(result.current.stateCategories).toContain(MOCK_VALUE);
    });
  });
});
