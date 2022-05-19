import { Product, ProductState } from "../../store/products/types";
import { render } from "../../testConfig/customRender";
import { ProductCard } from "./ProductCard";

const MOCK_PRODUCT: Product = {
  category: "anyCategory",
  description: "any",
  id: "1",
  image: "",
  price: 0,
  title: "Test",
};

const MOCK_STATE: ProductState = {
  data: {
    allIds: [MOCK_PRODUCT.id],
    byId: {
      [MOCK_PRODUCT.id]: {
        ...MOCK_PRODUCT,
      },
    },
  },
  filters: { text: "", category: "" },
};

describe("ProductCard component", () => {
  test("Should be rendered", () => {
    render(<ProductCard {...MOCK_PRODUCT} />, {
      mocks: { products: MOCK_STATE },
    });
  });
});
