import { useSelector } from "react-redux";
import { getProductAllIds, getProducts } from "../store/products/selectors";
import { getFilters } from "../store/products/selectors/getFilters";
import { Product, ProductState } from "../store/products/types";
import { renderHook, act, waitFor } from "../testConfig/customRenderHook";
import { useProduct } from "./useProduct";

function mockFetch(response?: any) {
  fetchMock.doMock(() =>
    Promise.resolve({
      body: JSON.stringify(response || {}),
    })
  );
}

const MOCK_STATE: ProductState = {
  data: {
    allIds: ["1"],
    byId: {
      "1": {
        category: "anyCategory",
        description: "any",
        id: "1",
        image: "",
        price: 0,
        title: "Test",
      },
    },
  },
  filters: { text: "", category: "" },
};

const MOCK_RES: Product = {
  category: "anyCategory",
  description: "any",
  id: "1",
  image: "",
  price: 0,
  title: "Test",
};
function useMockHook() {
  const {
    createProduct,
    getProduct,
    getSingleProduct,
    updateFilter,
    updateProduct,
  } = useProduct();
  const allProducts = useSelector(getProducts);
  const ids = useSelector(getProductAllIds);
  const byId = useSelector(getProducts);
  const filters = useSelector(getFilters);

  return {
    createProduct,
    getProduct,
    getSingleProduct,
    updateFilter,
    updateProduct,
    allProducts,
    ids,
    byId,
    filters,
  };
}

describe("useProduct hook", () => {
  test("if getProduct is called, products data in state should be populate", async () => {
    mockFetch([MOCK_RES]);
    const { result } = renderHook(() => useMockHook());
    act(() => result.current.getProduct());

    await waitFor(() => {
      expect(result.current.ids).toEqual(["1"]);
    });
  });
  test("if getSingleProduct is called, products data in state should be populate with specific Product", async () => {
    mockFetch(MOCK_RES);
    const { result } = renderHook(() => useMockHook());
    act(() => result.current.getSingleProduct("1"));

    await waitFor(() => {
      expect(result.current.byId).toEqual([MOCK_RES]);
    });
  });

  test("if updateProduct is called, a specific product in data should be change", async () => {
    const { id } = MOCK_RES;
    mockFetch();
    const { result } = renderHook(() => useMockHook(), {
      mocks: { products: MOCK_STATE },
    });
    act(() => result.current.updateProduct(id, { title: "New title" }));

    await waitFor(() => {
      expect(result.current.byId[0].title).toBe("New title");
    });
  });
  test("if createProduct is called, products data in state should be populate", async () => {
    const { id, ...restMockResponse } = MOCK_RES;
    mockFetch([MOCK_RES]);
    const { result } = renderHook(() => useMockHook());
    act(() => result.current.createProduct(restMockResponse));
    act(() => result.current.getProduct());

    await waitFor(() => {
      expect(result.current.byId[0]).toEqual(MOCK_RES);
    });
  });
  test("if updateFilters is called, products data in state should be populate", async () => {
    const { result } = renderHook(() => useMockHook());
    act(() => result.current.updateFilter({ text: "test", category: "Test" }));

    await waitFor(() => {
      expect(result.current.filters.category).toEqual("Test");
    });
  });
});
