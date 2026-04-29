import { Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage/AboutPage";
import HomePage from "./Pages/HomePage/HomePage";
import MainLayout from "./Pages/Layout/MainLayout";
import "./style.scss";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
