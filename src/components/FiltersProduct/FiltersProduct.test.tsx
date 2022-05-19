import { render } from "../../testConfig/customRender";
import { FilterProducts } from "./FilterProduct";

describe("FiltersProduct component", () => {
  test("Should be rendered", () => {
    render(<FilterProducts />);
  });
});
