import { Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage/AboutPage";
import HomePage from "./Pages/HomePage/HomePage";
import "./style.scss";
import MainLayout from "./Layout/MainLayout";
import NewsPage from "./Pages/NewsPage/NewsPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
