import "./Style.scss";
import List from "../../assets/Icons/title-icon.svg?react";
import MainBtn from "../MainBtn/MainBtn";
import { Link } from "react-router-dom";
import NewsImg from "../../assets/Images/NewsImg.webp";
import GreenIcon from "../../assets/Icons/green-arrow.svg?react";

function HomeNews() {
  const featuredPost = {
    id: 0,
    date: "March 4, 2024",
    title: "Financial Wellness: Navigating Your Journey with Sinza",
    link: "/blog/financial-wellness-featured",
  };

  const blogPosts = [
    {
      id: 1,
      date: "March 4, 2024",
      title: "Financial Wellness: Navigating Your Journey with Sinza",
      link: "/blog/financial-wellness-1",
    },
    {
      id: 2,
      date: "March 4, 2024",
      title: "Financial Wellness: Navigating Your Journey with Sinza",
      link: "/blog/financial-wellness-2",
    },
    {
      id: 3,
      date: "March 4, 2024",
      title: "Financial Wellness: Navigating Your Journey with Sinza",
      link: "/blog/financial-wellness-3",
    },
  ];

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
            <Link to={"/news"}>
              <MainBtn title={"Bütün xəbərlər"} />
            </Link>
          </div>
        </div>

        <div className="news-side">
          {/* LEFT - Featured Image + Banner */}
          <div className="left-side">
            <img src={NewsImg} alt="Featured News" />
            <Link to={featuredPost.link} className="banner">
              <span className="date">{featuredPost.date}</span>
              <p>{featuredPost.title}</p>
              <div className="detail-link">
                <span>Ətraflı bax</span>
                <span className="detail-underline" />
                <span className="detail-arrow">↗</span>
              </div>
            </Link>
          </div>

          {/* RIGHT - Blog Cards */}
          <div className="right-side">
            {blogPosts.map((item) => (
              <Link to={item.link} key={item.id} className="blog-card">
                <span className="blog-date">{item.date}</span>
                <h3>{item.title}</h3>
                <div className="card-link">
                  <span className="card-link-text">Daha çox</span>
                  <GreenIcon className="arrow-icon" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeNews;
