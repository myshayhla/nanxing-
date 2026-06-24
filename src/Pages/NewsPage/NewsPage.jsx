import { useEffect, useState } from "react";
import "./Style.scss";
import { getNews } from "../../api";
import { extractNewsList } from "../../utils/newsHelpers";
import NewsPageCard from "./NewsPageCard";

function NewsPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNews()
      .then((response) => setNews(extractNewsList(response)))
      .catch((error) => console.error("Xəbərlər yüklənmədi:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="news">
      <div className="news">
        {loading ? (
          <p className="news-page__status">Yüklənir...</p>
        ) : news.length ? (
          news.map((item) => <NewsPageCard key={item.id} item={item} />)
        ) : (
          <p className="news-page__status">Hazırda xəbər yoxdur.</p>
        )}
      </div>
    </section>
  );
}

export default NewsPage;
