import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import InspectPage from "./pages/InspectPage";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/:owner/:repository" element={<InspectPage />} />
    </Routes>
  );
};
export default App;
