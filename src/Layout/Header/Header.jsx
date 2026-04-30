import React, { useState } from "react";
import "./style.scss";
import Logo from "../../assets/Images/Logo.webp";
import MainBtn from "../../components/MainBtn/MainBtn";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      title: "Ana səhifə",
      path: "/",
    },
    {
      title: "Məhsullar",
      path: "/products",
    },
    {
      title: "Haqqımızda",
      path: "/about-us",
    },
    {
      title: "Xəbərlər",
      path: "/news",
    },
    {
      title: "Qalereya",
      path: "/gallery",
    },
    {
      title: "Əlaqə",
      path: "/contact",
    },
  ];

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <img src={Logo} alt="logo" />
          </Link>

          {/* Desktop nav */}
          <nav className="desktop-nav">
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Button */}
          <div className="desktop-btn">
            <MainBtn title="Ətraflı" />
          </div>

          {/* Mobile menu icon */}
          <div className="mobile-menu-icon" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="close-icon" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </div>

        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <MainBtn title="Ətraflı" />
      </div>

      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}
    </>
  );
}

export default Header;
