import { Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage/AboutPage";
import HomePage from "./Pages/HomePage/HomePage";
import "./style.scss";
import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutPage />} />z
      </Route>
    </Routes>
  );
}

export default App;
