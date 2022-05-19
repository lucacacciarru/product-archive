import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components";
import { Landing, Product } from "./page";
import { PATHS } from "./types";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path={PATHS.INDEX} element={<AppLayout />}>
          <Route index element={<Landing />} />
          <Route path={`${PATHS.PRODUCT}/:id`} element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
