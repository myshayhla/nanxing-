import { useEffect, useMemo, useState } from "react";
import "./Style.scss";
import FilterClose from "../../assets/Icons/FilterClose.svg?react";
import FilterOpen from "../../assets/Icons/FilterBar.svg?react";
import { getProductCategories, getProducts } from "../../api";
import {
  extractCategoriesList,
  extractProductsList,
} from "../../utils/productHelpers";
import {
  DATE_FILTER_OPTIONS,
  FILTER_GROUP_CATEGORY,
  FILTER_GROUP_DATE,
  filterProducts,
} from "../../utils/productFilters";
import ProductsPageCard from "./ProductsPageCard";

const MOBILE_FILTER_MQ = "(max-width: 768px)";

function ProductsPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerms, setSearchTerms] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({
    [FILTER_GROUP_CATEGORY]: [],
    [FILTER_GROUP_DATE]: [],
  });

  const closeFilter = () => setFilterOpen(false);

  useEffect(() => {
    getProducts()
      .then((response) => setProducts(extractProductsList(response)))
      .catch((error) => console.error("Məhsullar yüklənmədi:", error));

    getProductCategories()
      .then((response) => setCategories(extractCategoriesList(response)))
      .catch((error) => console.error("Kateqoriyalar yüklənmədi:", error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!filterOpen) return undefined;

    const isMobile = window.matchMedia(MOBILE_FILTER_MQ).matches;
    if (!isMobile) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [filterOpen]);

  const filterGroups = useMemo(    () => [
      {
        id: FILTER_GROUP_CATEGORY,
        label: "Kateqoriya",
        options: categories.map((category) => ({
          id: String(category.id),
          label: category.name,
        })),
      },
      {
        id: FILTER_GROUP_DATE,
        label: "Tarix",
        options: DATE_FILTER_OPTIONS.map((option) => ({
          id: option.id,
          label: option.label,
        })),
      },
    ],
    [categories]
  );

  const filteredProducts = useMemo(
    () => filterProducts(products, selectedFilters),
    [products, selectedFilters]
  );

  const toggleFilter = (groupId, optionId) => {
    setSelectedFilters((prev) => {
      const current = prev[groupId] || [];
      return {
        ...prev,
        [groupId]: current.includes(optionId)
          ? current.filter((item) => item !== optionId)
          : [...current, optionId],
      };
    });
  };

  const isChecked = (groupId, optionId) =>
    (selectedFilters[groupId] || []).includes(optionId);

  return (
    <div id="products-page">
      <div className="top-bar">
        <button
          type="button"
          className={`top-bar-btn ${filterOpen ? "active" : ""}`}
          onClick={() => setFilterOpen((prev) => !prev)}
        >
          {filterOpen ? <FilterClose /> : <FilterOpen />}
          Filter
        </button>
        <button
          type="button"
          className={`top-bar-btn ${sortOpen ? "active" : ""}`}
          onClick={() => setSortOpen((prev) => !prev)}
        >
          {sortOpen ? <FilterClose /> : <FilterOpen />}
          Sırala
        </button>
      </div>

      <div className={`page-body ${filterOpen ? "filter-visible" : ""}`}>
        {filterOpen && (
          <button
            type="button"
            className="filter-backdrop"
            onClick={closeFilter}
            aria-label="Filteri bağla"
          />
        )}

        <aside
          className={`sidebar ${filterOpen ? "open" : ""}`}
          aria-hidden={!filterOpen}
        >
          <div className="sidebar__mobile-head">
            <span>Filter</span>
            <button
              type="button"
              className="sidebar__close-btn"
              onClick={closeFilter}
              aria-label="Filteri bağla"
            >
              <FilterClose />
            </button>
          </div>

          <div className="sidebar__content">
            {filterGroups.map((group) => (
              <div className="filter-group" key={group.id}>
                <div className="filter-box filter-label-box">
                  <span className="filter-group-label">{group.label}</span>
                </div>
                <div className="filter-box filter-options-box">
                  <div className="search-box">
                    <input
                      type="text"
                      placeholder="Məhsul axtar"
                      value={searchTerms[group.id] || ""}
                      onChange={(e) =>
                        setSearchTerms((prev) => ({
                          ...prev,
                          [group.id]: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <ul className="filter-options">
                    {group.options
                      .filter((option) =>
                        option.label
                          .toLowerCase()
                          .includes(
                            (searchTerms[group.id] || "").toLowerCase()
                          )
                      )
                      .map((option) => (
                        <li
                          key={option.id}
                          onClick={() => toggleFilter(group.id, option.id)}
                        >
                          <span
                            className={`checkbox ${isChecked(group.id, option.id) ? "checked" : ""}`}
                          />
                          {option.label}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </aside>
        <main className="products-grid">
          {loading ? (
            <p className="products-page__status">Yüklənir...</p>
          ) : filteredProducts.length ? (
            filteredProducts.map((product, index) => (
              <ProductsPageCard
                key={product.id}
                product={product}
                index={index}
              />
            ))
          ) : (
            <p className="products-page__status">
              Seçilmiş filtrlərə uyğun məhsul tapılmadı.
            </p>
          )}
        </main>
      </div>
    </div>
  );
}

export default ProductsPage;
