import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import Arrow from "../../assets/Icons/Arrow-white.svg?react";
import NewsImg from "../../assets/Images/NewsImg.webp";
import { getProductById } from "../../api";
import {
  buildMainFeatures,
  buildProductSpecs,
  extractProduct,
  getProductImages,
} from "../../utils/productHelpers";
import { getWhatsAppOfferUrl } from "../../utils/whatsapp";
import "./Style.scss";

const VISIBLE_THUMBS = 3;
const TAB_DESCRIPTION = "description";
const TAB_SPECS = "specs";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(TAB_DESCRIPTION);
  const descTabRef = useRef(null);
  const specsTabRef = useRef(null);
  const indicatorRef = useRef(null);

  const updateTabIndicator = useCallback(() => {
    const activeRef =
      activeTab === TAB_DESCRIPTION ? descTabRef : specsTabRef;
    const tab = activeRef.current;
    const indicator = indicatorRef.current;

    if (!tab || !indicator) return;

    const textEl = tab.querySelector(".product-detail__tab-text");
    const header = tab.parentElement;

    if (!textEl || !header) return;

    const headerRect = header.getBoundingClientRect();
    const textRect = textEl.getBoundingClientRect();

    indicator.style.width = `${textRect.width}px`;
    indicator.style.transform = `translateX(${textRect.left - headerRect.left}px)`;
  }, [activeTab]);

  useLayoutEffect(() => {
    updateTabIndicator();
  }, [updateTabIndicator, product]);

  useEffect(() => {
    window.addEventListener("resize", updateTabIndicator);
    return () => window.removeEventListener("resize", updateTabIndicator);
  }, [updateTabIndicator]);

  useEffect(() => {
    setActiveIndex(0);
    getProductById(id)
      .then((response) => {
        const data = extractProduct(response);
        setProduct(data);
        setActiveTab(data?.description ? TAB_DESCRIPTION : TAB_SPECS);
      })
      .catch((error) => console.error("Məhsul yüklənmədi:", error));
  }, [id]);

  const images = product ? getProductImages(product, NewsImg) : [];
  const mainFeatures = product ? buildMainFeatures(product) : [];
  const technicalSpecs = product ? buildProductSpecs(product) : [];
  const category = product?.category?.name ?? "";
  const title = product?.name ?? "";
  const description = product?.description ?? "";
  const specsMidpoint = Math.ceil(technicalSpecs.length / 2);
  const leftSpecs = technicalSpecs.slice(0, specsMidpoint);
  const rightSpecs = technicalSpecs.slice(specsMidpoint);
  const hasBottomContent = description || technicalSpecs.length > 0;

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

  if (!product) {
    return null;
  }

  return (
    <section id="product-detail" className="product-detail">
      <nav className="product-detail__breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Ana səhifə</Link>
        <GoChevronRight className="product-detail__breadcrumb-sep" aria-hidden />
        <Link to="/products">Məhsullar</Link>
        <GoChevronRight className="product-detail__breadcrumb-sep" aria-hidden />
        <span className="product-detail__breadcrumb-current">{title}</span>
      </nav>

      <div className="product-detail__container">
        <div className="product-detail__slider">
          <div className="product-detail__thumbs">
            {thumbSlots.map(({ slot, imageIndex, isLastWithMore, src }) => {
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
            })}
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
          {category && (
            <span className="product-detail__category">{category}</span>
          )}
          <h1 className="product-detail__title">{title}</h1>

          {mainFeatures.length > 0 && (
            <div className="product-detail__features">
              <h2 className="product-detail__features-title">
                Əsas xüsusiyyətlər
              </h2>
              <ul className="product-detail__features-list">
                {mainFeatures.map((item, index) => (
                  <li
                    key={item.label}
                    className="product-detail__feature-item"
                  >
                    <span className="product-detail__feature-num">
                      {index + 1}
                    </span>
                    <span className="product-detail__feature-text">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="product-detail__actions">
            <a
              href={getWhatsAppOfferUrl(title)}
              target="_blank"
              rel="noopener noreferrer"
              className="product-detail__btn product-detail__btn--primary"
            >
              <span>Təklif al</span>
              <Arrow className="product-detail__btn-arrow" aria-hidden />
            </a>
            <Link
              to="/contact"
              className="product-detail__btn product-detail__btn--outline"
            >
              Bizimlə əlaqə
            </Link>
          </div>
        </div>
      </div>

      {hasBottomContent && (
        <div className="product-detail__bottom">
          <div className="product-detail__tabs-panel">
            <div className="product-detail__tabs-header">
              <button
                ref={descTabRef}
                type="button"
                className={`product-detail__tab ${activeTab === TAB_DESCRIPTION ? "product-detail__tab--active" : ""}`}
                onClick={() => setActiveTab(TAB_DESCRIPTION)}
              >
                <span className="product-detail__tab-text">Təsvir</span>
              </button>
              <button
                ref={specsTabRef}
                type="button"
                className={`product-detail__tab ${activeTab === TAB_SPECS ? "product-detail__tab--active" : ""}`}
                onClick={() => setActiveTab(TAB_SPECS)}
              >
                <span className="product-detail__tab-text">
                  Texniki xüsusiyyətlər
                </span>
              </button>
              <span ref={indicatorRef} className="product-detail__tab-indicator" />
            </div>

            <div className="product-detail__tabs-content">
              {activeTab === TAB_DESCRIPTION && (
                <div className="product-detail__tab-panel">
                  <p className="product-detail__section-text">
                    {description || "Təsvir mövcud deyil."}
                  </p>
                </div>
              )}

              {activeTab === TAB_SPECS && (
                <div className="product-detail__tab-panel">
                  {technicalSpecs.length > 0 ? (
                    <div className="product-detail__specs-grid">
                      <div className="product-detail__specs-table-wrap">
                        <table className="product-detail__specs-table">
                          <tbody>
                            {leftSpecs.map((spec) => (
                              <tr key={spec.label}>
                                <th>{spec.label}</th>
                                <td>{spec.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="product-detail__specs-table-wrap">
                        <table className="product-detail__specs-table">
                          <tbody>
                            {rightSpecs.map((spec) => (
                              <tr key={spec.label}>
                                <th>{spec.label}</th>
                                <td>{spec.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : (
                    <p className="product-detail__section-text">
                      Texniki xüsusiyyət mövcud deyil.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductDetail;
