import { Product } from "../../store/products/types";
import { render } from "../../testConfig/customRender";
import { ProductModalForm } from "./ProductModalForm";

const fn = jest.fn();

const MOCK_PRODUCT: Product = {
  category: "anyCategory",
  description: "any",
  id: "1",
  image: "",
  price: 0,
  title: "Test",
};

describe("ProductModalForm component", () => {
  test("Should be rendered", () => {
    render(<ProductModalForm {...MOCK_PRODUCT} setState={fn} />);
  });
});
