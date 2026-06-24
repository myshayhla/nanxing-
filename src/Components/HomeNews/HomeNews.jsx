import { useEffect, useState } from "react";
import "./Style.scss";
import List from "../../assets/Icons/title-icon.svg?react";
import MainBtn from "../MainBtn/MainBtn";
import { Link } from "react-router-dom";
import NewsImg from "../../assets/Images/NewsImg.webp";
import GreenIcon from "../../assets/Icons/green-arrow.svg?react";
import { getNews } from "../../api";
import {
  extractNewsList,
  formatNewsDate,
  resolveImageUrl,
} from "../../utils/newsHelpers";

function HomeNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNews()
      .then((response) => setNews(extractNewsList(response)))
      .catch((error) => console.error("Xəbərlər yüklənmədi:", error))
      .finally(() => setLoading(false));
  }, []);

  const featuredPost = news[0];
  const blogPosts = news.slice(1, 4);

  return (
    <section id="home-news">
      <div className="home-news">
        <div className="head">
          <div className="left">
            <div className="title">
              <List />
              <span>Xəbərlər</span>
            </div>
            <h1>Maliyyə Bazarında Dəyişikliklər və Təsirlər</h1>
          </div>
          <div className="news-btn">
            <Link to="/news">
              <MainBtn title="Bütün xəbərlər" />
            </Link>
          </div>
        </div>

        {loading ? (
          <p className="home-news__status">Yüklənir...</p>
        ) : featuredPost ? (
          <div className="news-side">
            <div className="left-side">
              <img
                src={resolveImageUrl(featuredPost.image, NewsImg)}
                alt={featuredPost.name}
              />
              <Link to={`/news/${featuredPost.id}`} className="banner">
                <span className="date">
                  {formatNewsDate(featuredPost.createdAt)}
                </span>
                <p>{featuredPost.name}</p>
                <div className="detail-link">
                  <span>Ətraflı bax</span>
                  <span className="detail-underline" />
                  <span className="detail-arrow">↗</span>
                </div>
              </Link>
            </div>

            <div className="right-side">
              {blogPosts.map((item) => (
                <Link
                  to={`/news/${item.id}`}
                  key={item.id}
                  className="blog-card"
                >
                  <span className="blog-date">
                    {formatNewsDate(item.createdAt)}
                  </span>
                  <h3>{item.name}</h3>
                  <div className="card-link">
                    <span className="card-link-text">Daha çox</span>
                    <GreenIcon className="arrow-icon" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <p className="home-news__status">Hazırda xəbər yoxdur.</p>
        )}
      </div>
    </section>
  );
}

export default HomeNews;
