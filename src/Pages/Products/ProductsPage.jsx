import { useState } from "react";
import "./Style.scss";
import { Link } from "react-router-dom";
import NewsImg from "../../assets/Images/NewsImg.webp";
import FilterClose from "../../assets/Icons/FilterClose.svg?react";
import FilterOpen from "../../assets/Icons/FilterBar.svg?react";
import Arrow from "../../assets/Icons/green-arrow.svg?react";

const newsData = [
  {
    id: 1,
    category: "Finance",
    date: "March 4, 2024",
    title: "Panel kəsmə maşınları",
    desc: "Yüksək dəqiqliklə panel materiallarını sürətli və minimum itki ilə kəsmək üçün ideal həllər təqdim edir.",
    img: NewsImg,
    link: "/news/1",
  },
  {
    id: 2,
    category: "Technology",
    date: "March 5, 2024",
    title: "Kənar bantlama maşınları",
    desc: "Materialların kənarlarını estetik və davamlı şəkildə işləyərək yüksək keyfiyyətli nəticə təmin edir.",
    img: NewsImg,
    link: "/news/2",
  },
  {
    id: 3,
    category: "Industry",
    date: "March 6, 2024",
    title: "CNC maşınları",
    desc: "Mürəkkəb dizaynları avtomatlaşdırılmış şəkildə dəqiq və sabit performansla emal edir.",
    img: NewsImg,
    link: "/news/3",
  },
  {
    id: 4,
    category: "Finance",
    date: "March 7, 2024",
    title: "Panel kəsmə maşınları",
    desc: "Yüksək dəqiqliklə panel materiallarını sürətli və minimum itki ilə kəsmək üçün ideal həllər təqdim edir.",
    img: NewsImg,
    link: "/news/4",
  },
  {
    id: 5,
    category: "Technology",
    date: "March 8, 2024",
    title: "Kənar bantlama maşınları",
    desc: "Materialların kənarlarını estetik və davamlı şəkildə işləyərək yüksək keyfiyyətli nəticə təmin edir.",
    img: NewsImg,
    link: "/news/5",
  },
  {
    id: 6,
    category: "Industry",
    date: "March 9, 2024",
    title: "CNC maşınları",
    desc: "Mürəkkəb dizaynları avtomatlaşdırılmış şəkildə dəqiq və sabit performansla emal edir.",
    img: NewsImg,
    link: "/news/6",
  },
  {
    id: 7,
    category: "Finance",
    date: "March 10, 2024",
    title: "Panel kəsmə maşınları",
    desc: "Yüksək dəqiqliklə panel materiallarını sürətli və minimum itki ilə kəsmək üçün ideal həllər təqdim edir.",
    img: NewsImg,
    link: "/news/7",
  },
  {
    id: 8,
    category: "Technology",
    date: "March 11, 2024",
    title: "Kənar bantlama maşınları",
    desc: "Materialların kənarlarını estetik və davamlı şəkildə işləyərək yüksək keyfiyyətli nəticə təmin edir.",
    img: NewsImg,
    link: "/news/8",
  },
  {
    id: 9,
    category: "Industry",
    date: "March 12, 2024",
    title: "CNC maşınları",
    desc: "Mürəkkəb dizaynları avtomatlaşdırılmış şəkildə dəqiq və sabit performansla emal edir.",
    img: NewsImg,
    link: "/news/9",
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
    <div id="news-page">
      {/* Top Bar */}
      <div className="top-bar">
        <button
          className={`top-bar-btn ${filterOpen ? "active" : ""}`}
          onClick={() => setFilterOpen((p) => !p)}
        >
          {filterOpen ? <FilterClose /> : <FilterOpen />}
          Filter
        </button>
        <button
          className={`top-bar-btn ${sortOpen ? "active" : ""}`}
          onClick={() => setSortOpen((p) => !p)}
        >
          {sortOpen ? <FilterClose /> : <FilterOpen />}
          Sırala
        </button>
      </div>

      <div className={`page-body ${filterOpen ? "filter-visible" : ""}`}>
        {/* Sidebar */}
        <aside className={`sidebar ${filterOpen ? "open" : ""}`}>
          {filterGroups.map((group) => (
            <div className="filter-group" key={group.id}>
              <div className="filter-box filter-label-box">
                <span className="filter-group-label">{group.label}</span>
              </div>
              <div className="filter-box filter-options-box">
                <div className="search-box">
                {/* <span className="search-icon">🔍</span> */}
                <input
                  type="text"
                  placeholder="Search courses"
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

        {/* Grid */}
        <main className="news-grid">
          {newsData.map((item, i) => (
            <Link
              to={item.link}
              className="news-card"
              key={item.id}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="card-img">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="card-body">
                <div className="card-title-row">
                  <h3>{item.title}</h3>
                  <Arrow className="arrow-icon" />
                </div>
                <p>{item.desc}</p>
              </div>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
}

export default ProductsPage;
