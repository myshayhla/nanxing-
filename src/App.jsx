import { Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage/AboutPage";
import HomePage from "./Pages/HomePage/HomePage";
import "./style.scss";
import MainLayout from "./Layout/MainLayout";
import NewsPage from "./Pages/NewsPage/NewsPage";
import ProductsPage from "./Pages/Products/ProductsPage";
import Photos from "./Pages/Photos/Photos";
import Videos from "./Pages/Videos/Videos";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import NewsDetail from "./Pages/NewsDetail/NewsDetail";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
