import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/:owner/:repo" element={<HomePage />} />
    </Routes>
  );
};
export default App;
