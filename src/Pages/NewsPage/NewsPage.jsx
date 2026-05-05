import "./Style.scss";
import Img1 from "../../assets/Images/NewsImg.webp";
import Img2 from "../../assets/Images/NewsImg.webp";
import Img3 from "../../assets/Images/NewsImg.webp";
import { Link } from 'react-router-dom';
import GreenIcon from "../../assets/Icons/green-arrow.svg?react";

function NewsPage() {
    const newsData = [
      {
        id: 1,
        title: "Financial Wellness: Navigating Your Journey with Sinza",
        date: "March 4, 2024",
        img: Img1,
      },
      {
        id: 2,
        title: "Financial Wellness: Navigating Your Journey with Sinza",
        date: "March 4, 2024",
        img: Img2,
      },
      {
        id: 3,
        title: "Financial Wellness: Navigating Your Journey with Sinza",
        date: "March 4, 2024",
        img: Img3,
      },
    ];

  return (
      <>
          <section id="news">
        <div className="news">
          {newsData.map((item) => (
            <div className="news-card" key={item.id}>
              <div className="news-card-img">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="news-card-content">
                <span className="news-card-date">{item.date}</span>
                <h3 className="news-card-title">{item.title}</h3>
                <Link to={`/news/${item.id}`} className="news-card-link">
                  <span className="news-card-link-text">Daha çox</span>
                  <GreenIcon className="arrow-icon" />
                </Link>
              </div>
            </div>
          ))}
                  
              </div>
          </section>
      
    </>
  );
}

export default NewsPage;
