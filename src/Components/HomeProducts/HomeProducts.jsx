import { useEffect, useState } from "react";
import "./Style.scss";
import MainBtn from "../MainBtn/MainBtn";
import List from "../../assets/Icons/title-icon.svg?react";
import { Link } from "react-router-dom";
import { getProducts } from "../../api";
import { extractProductsList } from "../../utils/productHelpers";
import ProductCard from "./ProductCard";

const HOME_PRODUCTS_LIMIT = 4;

function HomeProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((response) =>
        setProducts(extractProductsList(response).slice(0, HOME_PRODUCTS_LIMIT))
      )
      .catch((error) => console.error("Məhsullar yüklənmədi:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="home-products">
      <div className="home-products">
        <div className="head">
          <div className="left">
            <div className="title">
              <List />
              <span>Məhsullarımız</span>
            </div>
            <h1>
              Müasir texnologiyalarla hazırlanmış yüksək keyfiyyətli ağac
              emalı avadanlıqları
            </h1>
          </div>
          <div className="products-btn">
            <Link to="/products">
              <MainBtn title="Bütün məhsullar" />
            </Link>
          </div>
        </div>

        <div className="products">
          {loading ? (
            <p className="home-products__status">Yüklənir...</p>
          ) : products.length ? (
            <div className="products-content">
              {products.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          ) : (
            <p className="home-products__status">Hazırda məhsul yoxdur.</p>
          )}

          <div className="product-btn">
            <Link to="/products">
              <MainBtn title="Bütün məhsullar" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeProducts;
