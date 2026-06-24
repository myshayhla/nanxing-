import { useState } from "react";
import { Link } from "react-router-dom";
import NewsImg from "../../assets/Images/NewsImg.webp";
import GreenIcon from "../../assets/Icons/green-arrow.svg?react";
import {
  formatNewsDate,
  resolveImageUrl,
} from "../../utils/newsHelpers";

function NewsPageCard({ item }) {
  const fallbackSrc = NewsImg;
  const [imgSrc, setImgSrc] = useState(resolveImageUrl(item.image, fallbackSrc));

  return (
    <Link to={`/news/${item.id}`} className="news-card">
      <div className="news-card-img">
        <img
          src={imgSrc}
          alt={item.name}
          onError={() => setImgSrc(fallbackSrc)}
        />
      </div>
      <div className="news-card-content">
        <span className="news-card-date">{formatNewsDate(item.createdAt)}</span>
        <h3 className="news-card-title">{item.name}</h3>
        <span className="news-card-link">
          <span className="news-card-link-text">Daha çox</span>
          <GreenIcon className="arrow-icon" />
        </span>
      </div>
    </Link>
  );
}

export default NewsPageCard;
