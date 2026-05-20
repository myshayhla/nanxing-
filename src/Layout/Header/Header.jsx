import { useState, useRef, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./Style.scss";
import Logo from "../../assets/Images/Logo.webp";
import MainBtn from "../../Components/MainBtn/MainBtn";


const NAV_ITEMS = [
  { title: "Ana səhifə", path: "/" },
  { title: "Məhsullar", path: "/products" },
  { title: "Haqqımızda", path: "/about-us" },
  { title: "Xəbərlər", path: "/news" },
  {
    title: "Qalereya",
    children: [
      { title: "Şəkillər", path: "/photos" },
      { title: "Videolar", path: "/videos" },
    ],
  },
  { title: "Əlaqə", path: "/contact" },
];

function isGalleryPath(pathname) {
  return pathname === "/photos" || pathname === "/videos";
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const galleryRef = useRef(null);
  const { pathname } = useLocation();
  const galleryActive = isGalleryPath(pathname);

  const closeMobileMenu = () => setMenuOpen(false);

  useEffect(() => {
    const id = window.setTimeout(() => setGalleryOpen(false), 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    if (!galleryOpen) return;

    const handlePointerDown = (e) => {
      if (galleryRef.current && !galleryRef.current.contains(e.target)) {
        setGalleryOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setGalleryOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [galleryOpen]);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            <img src={Logo} alt="Nanxing" />
          </Link>

          <nav className="desktop-nav" aria-label="Əsas naviqasiya">
            <ul>
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <li
                    key={item.title}
                    className="desktop-nav__item desktop-nav__item--dropdown"
                  >
                    <div
                      ref={galleryRef}
                      className={`nav-dropdown ${galleryActive ? "nav-dropdown--active" : ""} ${galleryOpen ? "nav-dropdown--open" : ""}`}
                    >
                      <button
                        type="button"
                        className="nav-dropdown__trigger"
                        aria-expanded={galleryOpen}
                        aria-haspopup="true"
                        aria-controls="gallery-dropdown-menu"
                        id="gallery-dropdown-trigger"
                        onClick={() => setGalleryOpen((o) => !o)}
                      >
                        <span className="nav-dropdown__trigger-text">{item.title}</span>
                        <MdOutlineKeyboardArrowDown
                          className="nav-dropdown__chevron"
                          aria-hidden
                        />
                      </button>
                      <ul
                        id="gallery-dropdown-menu"
                        className="nav-dropdown__menu"
                        role="menu"
                        aria-labelledby="gallery-dropdown-trigger"
                        aria-hidden={!galleryOpen}
                      >
                        {item.children.map((child) => (
                          <li key={child.path} role="none">
                            <Link
                              role="menuitem"
                              to={child.path}
                              onClick={() => setGalleryOpen(false)}
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.path} className="desktop-nav__item">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => (isActive ? "active-link" : "")}
                      end={item.path === "/"}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="desktop-btn">
            <MainBtn title="Ətraflı" />
          </div>

          <button
            type="button"
            className="mobile-menu-icon"
            aria-label="Menyunu aç"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <button
          type="button"
          className="close-icon"
          aria-label="Menyunu bağla"
          onClick={closeMobileMenu}
        >
          <FaTimes />
        </button>

        <nav aria-label="Mobil naviqasiya">
          <ul className="mobile-menu__list">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <li key={item.title} className="mobile-menu__group">
                  <span className="mobile-menu__group-title">{item.title}</span>
                  <ul className="mobile-menu__sublist">
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <NavLink
                          to={child.path}
                          onClick={closeMobileMenu}
                          className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                          {child.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={({ isActive }) => (isActive ? "active-link" : "")}
                    end={item.path === "/"}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <MainBtn title="Ətraflı" />
      </div>

      {menuOpen && (
        <button
          type="button"
          className="overlay"
          aria-label="Menyunu bağla"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
}

export default Header;
