import { render } from "../../testConfig/customRender";
import { CustomNumberInput } from "./CustomNumberInput";

describe("CustomNumberInput component", () => {
  test("Should be rendered", () => {
    render(<CustomNumberInput />);
  });
});
