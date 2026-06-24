import { useState } from "react";
import { Link } from "react-router-dom";
import ProductImg from "../../assets/Images/NewsImg.webp";
import Arrow from "../../assets/Icons/green-arrow.svg?react";
import {
  resolveImageUrl,
  truncateDescription,
} from "../../utils/productHelpers";

function ProductsPageCard({ product, index }) {
  const fallbackSrc = ProductImg;
  const [imgSrc, setImgSrc] = useState(
    resolveImageUrl(product.mainImage, fallbackSrc)
  );

  return (
    <Link
      to={`/products/${product.id}`}
      className="product-card"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="card-img">
        <img
          src={imgSrc}
          alt={product.name}
          onError={() => setImgSrc(fallbackSrc)}
        />
      </div>
      <div className="card-body">
        {product.category?.name && (
          <span className="card-category">{product.category.name}</span>
        )}
        <div className="card-title-row">
          <h3>{product.name}</h3>
          <Arrow className="arrow-icon" />
        </div>
        <p>{truncateDescription(product.description)}</p>
      </div>
    </Link>
  );
}

export default ProductsPageCard;
