import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import GreenIcon from "../../assets/Icons/green-arrow.svg?react";
import DetailImg from "../../assets/Images/NewsDetail.webp";
import { getNews, getNewsById } from "../../api";
import {
  extractNewsList,
  formatNewsDate,
  resolveImageUrl,
} from "../../utils/newsHelpers";
import "./Style.scss";

function NewsDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);

  useEffect(() => {
    getNewsById(id)
      .then((response) => setArticle(response?.data ?? response))
      .catch((error) => console.error("Xəbər yüklənmədi:", error));

    getNews()
      .then((response) => {
        const allNews = extractNewsList(response);
        setRelatedNews(allNews.filter((item) => String(item.id) !== String(id)).slice(0, 3));
      })
      .catch((error) => console.error("Əlaqəli xəbərlər yüklənmədi:", error));
  }, [id]);

  if (!article) {
    return null;
  }

  return (
    <section id="news-detail" className="news-detail">
      <nav className="news-detail__breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Ana səhifə</Link>
        <GoChevronRight className="news-detail__breadcrumb-sep" aria-hidden />
        <Link to="/news">Xəbərlər</Link>
        <GoChevronRight className="news-detail__breadcrumb-sep" aria-hidden />
        <span className="news-detail__breadcrumb-current">{article.name}</span>
      </nav>

      <div className="news-detail__content">
        <article className="news-detail__main">
          <div className="news-detail__media">
            <img
              src={resolveImageUrl(article.image, DetailImg)}
              alt={article.name}
            />
          </div>
          <div className="news-detail__body">
            <h1 className="news-detail__title">{article.name}</h1>
            <time className="news-detail__date" dateTime={article.createdAt}>
              {formatNewsDate(article.createdAt)}
            </time>
            <p className="news-detail__description">{article.description}</p>
          </div>
        </article>

        <aside className="news-detail__related">
          {relatedNews.map((item) => (
            <Link to={`/news/${item.id}`} key={item.id} className="news-detail__card">
              <span className="news-detail__card-date">
                {formatNewsDate(item.createdAt)}
              </span>
              <h3>{item.name}</h3>
              <div className="news-detail__card-link">
                <span className="news-detail__card-link-text">Daha çox</span>
                <GreenIcon className="arrow-icon" />
              </div>
            </Link>
          ))}
        </aside>
      </div>
    </section>
  );
}

export default NewsDetail;
