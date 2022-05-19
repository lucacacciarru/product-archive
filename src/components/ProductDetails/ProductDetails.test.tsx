import { render } from "../../testConfig/customRender";
import { ProductDetails } from "./ProductDetails";

describe("ProductDetails component", () => {
  test("Should be rendered", () => {
    render(<ProductDetails />);
  });
});
