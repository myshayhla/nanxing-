import { useState } from "react";
import { Link } from "react-router-dom";
import Img1 from "../../assets/Images/HomeProduct1.webp";
import Arrow from "../../assets/Icons/Arrow-white.svg?react";
import {
  resolveImageUrl,
  truncateDescription,
} from "../../utils/productHelpers";

function ProductCard({ product }) {
  const fallbackSrc = Img1;
  const [imgSrc, setImgSrc] = useState(
    resolveImageUrl(product.mainImage, fallbackSrc)
  );

  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <div className="product-card__media">
        <img
          src={imgSrc}
          alt={product.name}
          onError={() => setImgSrc(fallbackSrc)}
        />
      </div>
      <div className="text">
        <div className="title">
          <span>{product.name}</span>
          <Arrow className="arrow-icon" fill="black" />
        </div>
        <p>{truncateDescription(product.description)}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
