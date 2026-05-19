import React, { useState } from "react";
import "./Style.scss";
import AboutHeroImg from "../../assets/Images/AboutHero.webp";

function AboutHero() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <section id="about-hero">
      <div className="about-hero-container">
        <h1>Şirkətimiz haqqında</h1>

        <div className="about-hero-content">
          {/* LEFT: Image (50% width) */}
          <div className="img-wrapper">
            <img src={AboutHeroImg} alt="Şirkətimiz haqqında" />

            {/* Banner overlaid on image: bottom 100px, right 80px */}
            <div className="banner">
              <div className="banner-top">
                <button
                  className={`tab-btn ${activeTab === "mission" ? "active" : ""}`}
                  onClick={() => setActiveTab("mission")}
                >
                  Missiyamız
                </button>
                <button
                  className={`tab-btn ${activeTab === "vision" ? "active" : ""}`}
                  onClick={() => setActiveTab("vision")}
                >
                  Vizyonumuz
                </button>
              </div>
              <div className="banner-body">
                {activeTab === "mission" ? (
                  <p>
                    <span className="green-text">Missiyamız </span>
                    müştərilərimizin istehsal ehtiyaclarına uyğun yüksək
                    keyfiyyətli sənaye avadanlıqları və innovativ texnoloji
                    həllər təqdim edərək onların biznes proseslərini daha
                    effektiv, dəqiq və dayanıqlı etmək əsas məqsədimizdir.
                  </p>
                ) : (
                  <p>
                    <span className="green-text">Vizyonumuz </span>
                     sənaye texnologiyaları sahəsində qabaqcıl və
                    etibarlı brend olaraq, müasir həllərimizlə qlobal bazarda
                    tanınan və seçilən şirkətlərdən birinə çevrilməkdir.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: Text (50% width) */}
          <div className="text-side">
            <p>
              Şirkətimiz sənaye avadanlıqları və ağac emalı texnologiyaları
              sahəsində fəaliyyət göstərərək müasir istehsal proseslərinin
              qurulması və inkişafı üçün kompleks həllər təqdim edir. Peşəkar
              komandamız və qabaqcıl texnologiyalarımız müxtəlif sahələr üzrə
              layihələrin planlaşdırılması və həyata keçirilməsində yüksək
              keyfiyyət və dəqiqlik təmin edir.
            </p>
            <p>
              Fəaliyyətimizdə keyfiyyət, etibarlılıq və davamlı inkişaf
              prinsiplərini əsas tutaraq müştərilərimiz üçün uzunmüddətli və
              effektiv həllər yaradırıq. Beynəlxalq standartlara uyğun
              yanaşmalar tətbiq edərək sənaye sahəsində güvənilən tərəfdaş kimi
              çıxış edirik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
