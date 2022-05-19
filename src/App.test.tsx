import App from "./App";
import { render } from "./testConfig/customRender";

describe("App", () => {
  test("Should be rendered", () => {
    render(<App />);
  });
});
