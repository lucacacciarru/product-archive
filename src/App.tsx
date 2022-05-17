import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components";
import { Landing } from "./page";
import { PATHS } from "./types";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path={PATHS.INDEX} element={<AppLayout />}>
          <Route index element={<Landing />} />
          <Route path={PATHS.PRODUCT} element={<>aa</>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
