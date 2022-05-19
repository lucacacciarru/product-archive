import { ProductState } from "../../store/products/types";
import { render } from "../../testConfig/customRender";
import { EditProductModal } from "./EditProductModal";

const fn = jest.fn();

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

describe("EditProductModal component", () => {
  test("Should be rendered", () => {
    render(<EditProductModal id="1" isOpen={true} onClose={fn} />, {
      mocks: { products: MOCK_STATE },
    });
  });
});
