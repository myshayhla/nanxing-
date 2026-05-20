import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Arrow from "../../assets/Icons/Arrow-white.svg?react";
import NewsImg from "../../assets/Images/NewsImg.webp";
import "./Style.scss";

const VISIBLE_THUMBS = 3;

const PRODUCT = {
  category: "CNC maşınları",
  title: "CNC Panel Saw NX-320",
  description:
    "Yüksək dəqiqlikli və avtomatlaşdırılmış idarəetmə sistemi ilə təchiz olunmuş bu CNC panel kəsmə maşını iri həcmli istehsal prosesləri üçün effektiv və etibarlı həll təqdim edir.",
  features: [
    "Yüksək dəqiqlik (±0.1 mm)",
    "Yüksək sürətli kəsmə",
    "Avtomatik idarəetmə sistemi",
    "Enerji səmərəli işləmə",
  ],
  images: [
    NewsImg,
    NewsImg,
    NewsImg,
    NewsImg,
    NewsImg,
    NewsImg,
    NewsImg,
    NewsImg,
  ],
};

function ProductDetail() {
  const { images, category, title, description, features } = PRODUCT;
  const [activeIndex, setActiveIndex] = useState(0);
  const extraCount =
    images.length > VISIBLE_THUMBS ? images.length - VISIBLE_THUMBS : 0;

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const thumbSlots = Array.from({ length: VISIBLE_THUMBS }, (_, slot) => {
    const isLastWithMore = slot === VISIBLE_THUMBS - 1 && extraCount > 0;
    const imageIndex = isLastWithMore ? VISIBLE_THUMBS - 1 : slot;
    return {
      slot,
      imageIndex,
      isLastWithMore,
      src: images[imageIndex],
    };
  });

  return (
    <section id="product-detail" className="product-detail">
      <div className="product-detail__container">
        <div className="product-detail__slider">
          <div className="product-detail__thumbs">
            {thumbSlots.map(
              ({ slot, imageIndex, isLastWithMore, src }) => {
                const isActive = isLastWithMore
                  ? activeIndex >= imageIndex
                  : activeIndex === imageIndex;

                return (
                <button
                  key={slot}
                  type="button"
                  className={`product-detail__thumb ${isActive ? "product-detail__thumb--active" : ""}`}
                  onClick={() => setActiveIndex(imageIndex)}
                  aria-label={
                    isLastWithMore
                      ? `${extraCount} əlavə şəkil`
                      : `Şəkil ${slot + 1}`
                  }
                  aria-current={isActive}
                >
                  <img src={src} alt="" />
                  {isLastWithMore && (
                    <span className="product-detail__thumb-more">
                      + {extraCount} şəkil
                    </span>
                  )}
                </button>
                );
              },
            )}
          </div>

          <div className="product-detail__main-wrap">
            <div className="product-detail__main">
              <img
                src={images[activeIndex]}
                alt={title}
                className="product-detail__main-img"
              />
              <button
                type="button"
                className="product-detail__nav product-detail__nav--prev"
                onClick={goPrev}
                aria-label="Əvvəlki şəkil"
              >
                <FaChevronLeft />
              </button>
              <button
                type="button"
                className="product-detail__nav product-detail__nav--next"
                onClick={goNext}
                aria-label="Növbəti şəkil"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>

        <div className="product-detail__info">
          <span className="product-detail__category">{category}</span>
          <h1 className="product-detail__title">{title}</h1>
          <p className="product-detail__desc">{description}</p>

          <div className="product-detail__features">
            <h2 className="product-detail__features-title">Əsas xüsusiyyətlər</h2>
            <ul className="product-detail__features-list">
              {features.map((text, index) => (
                <li key={text} className="product-detail__feature-item">
                  <span className="product-detail__feature-num">{index + 1}</span>
                  <span className="product-detail__feature-text">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="product-detail__actions">
            <button type="button" className="product-detail__btn product-detail__btn--primary">
              <span>Təklif al</span>
              <Arrow className="product-detail__btn-arrow" aria-hidden />
            </button>
            <Link
              to="/contact"
              className="product-detail__btn product-detail__btn--outline"
            >
              Bizimlə əlaqə
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
