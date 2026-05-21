import { useState } from "react";
import "./Style.scss";
import { Link } from "react-router-dom";
import ProductImg from "../../assets/Images/NewsImg.webp";
import FilterClose from "../../assets/Icons/FilterClose.svg?react";
import FilterOpen from "../../assets/Icons/FilterBar.svg?react";
import Arrow from "../../assets/Icons/green-arrow.svg?react";

const productsData = [
  {
    id: 1,
    category: "Finance",
    title: "Panel kəsmə maşınları",
    desc: "Yüksək dəqiqliklə panel materiallarını sürətli və minimum itki ilə kəsmək üçün ideal həllər təqdim edir.",
    img: ProductImg,
    link: "/products/1",
  },
  {
    id: 2,
    category: "Technology",
    title: "Kənar bantlama maşınları",
    desc: "Materialların kənarlarını estetik və davamlı şəkildə işləyərək yüksək keyfiyyətli nəticə təmin edir.",
    img: ProductImg,
    link: "/products/2",
  },
  {
    id: 3,
    category: "Industry",
    title: "CNC maşınları",
    desc: "Mürəkkəb dizaynları avtomatlaşdırılmış şəkildə dəqiq və sabit performansla emal edir.",
    img: ProductImg,
    link: "/products/3",
  },
  {
    id: 4,
    category: "Finance",
    title: "Panel kəsmə maşınları",
    desc: "Yüksək dəqiqliklə panel materiallarını sürətli və minimum itki ilə kəsmək üçün ideal həllər təqdim edir.",
    img: ProductImg,
    link: "/products/4",
  },
  {
    id: 5,
    category: "Technology",
    title: "Kənar bantlama maşınları",
    desc: "Materialların kənarlarını estetik və davamlı şəkildə işləyərək yüksək keyfiyyətli nəticə təmin edir.",
    img: ProductImg,
    link: "/products/5",
  },
  {
    id: 6,
    category: "Industry",
    title: "CNC maşınları",
    desc: "Mürəkkəb dizaynları avtomatlaşdırılmış şəkildə dəqiq və sabit performansla emal edir.",
    img: ProductImg,
    link: "/products/6",
  },
  {
    id: 7,
    category: "Finance",
    title: "Panel kəsmə maşınları",
    desc: "Yüksək dəqiqliklə panel materiallarını sürətli və minimum itki ilə kəsmək üçün ideal həllər təqdim edir.",
    img: ProductImg,
    link: "/products/7",
  },
  {
    id: 8,
    category: "Technology",
    title: "Kənar bantlama maşınları",
    desc: "Materialların kənarlarını estetik və davamlı şəkildə işləyərək yüksək keyfiyyətli nəticə təmin edir.",
    img: ProductImg,
    link: "/products/8",
  },
  {
    id: 9,
    category: "Industry",
    title: "CNC maşınları",
    desc: "Mürəkkəb dizaynları avtomatlaşdırılmış şəkildə dəqiq və sabit performansla emal edir.",
    img: ProductImg,
    link: "/products/9",
  },
];

const filterGroups = [
  {
    id: 1,
    label: "Kateqoriya",
    options: [
      "Finance",
      "Technology",
      "Industry",
      "Sales",
      "Branding",
      "Marketing",
      "Design",
      "Development",
      "Support",
      "Logistics",
    ],
  },
  {
    id: 2,
    label: "Tarix",
    options: [
      "Bu həftə",
      "Bu ay",
      "Bu il",
      "Köhnə",
      "Son 3 ay",
      "Son 6 ay",
      "Son il",
      "2024",
      "2023",
      "2022",
    ],
  },
];

function ProductsPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [searchTerms, setSearchTerms] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});

  const toggleFilter = (groupId, option) => {
    setSelectedFilters((prev) => {
      const current = prev[groupId] || [];
      return {
        ...prev,
        [groupId]: current.includes(option)
          ? current.filter((o) => o !== option)
          : [...current, option],
      };
    });
  };

  const isChecked = (groupId, option) =>
    (selectedFilters[groupId] || []).includes(option);

  return (
    <div id="products-page">
      <div className="top-bar">
        <button
          type="button"
          className={`top-bar-btn ${filterOpen ? "active" : ""}`}
          onClick={() => setFilterOpen((p) => !p)}
        >
          {filterOpen ? <FilterClose /> : <FilterOpen />}
          Filter
        </button>
        <button
          type="button"
          className={`top-bar-btn ${sortOpen ? "active" : ""}`}
          onClick={() => setSortOpen((p) => !p)}
        >
          {sortOpen ? <FilterClose /> : <FilterOpen />}
          Sırala
        </button>
      </div>

      <div className={`page-body ${filterOpen ? "filter-visible" : ""}`}>
        <aside className={`sidebar ${filterOpen ? "open" : ""}`}>
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
                    .filter((opt) =>
                      opt
                        .toLowerCase()
                        .includes((searchTerms[group.id] || "").toLowerCase()),
                    )
                    .map((opt) => (
                      <li key={opt} onClick={() => toggleFilter(group.id, opt)}>
                        <span
                          className={`checkbox ${isChecked(group.id, opt) ? "checked" : ""}`}
                        />
                        {opt}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </aside>

        <main className="products-grid">
          {productsData.map((product, i) => (
            <Link
              to={product.link}
              className="product-card"
              key={product.id}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="card-img">
                <img src={product.img} alt={product.title} />
              </div>
              <div className="card-body">
                <div className="card-title-row">
                  <h3>{product.title}</h3>
                  <Arrow className="arrow-icon" />
                </div>
                <p>{product.desc}</p>
              </div>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
}

export default ProductsPage;
