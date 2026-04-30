import React from 'react';
import "./Style.scss";
import Img1 from "../../assets/Images/HomeProduct1.webp";
import MainBtn from '../MainBtn/MainBtn';
import List from "../../assets/Icons/title-icon.svg?react";
import Arrow from "../../assets/Icons/Arrow-white.svg?react";


function HomeProducts() {
    const machines = [
      {
        id: 1,
        title: "Panel kəsmə maşınları",
        description:
          "Yüksək dəqiqliklə panel materiallarını sürətli və minimum itki ilə kəsmək üçün ideal həllər təqdim edir.",
        img: Img1,
      },
      {
        id: 2,
        title: "Kənar bantlama maşınları",
        description:
          "Materialların kənarlarını estetik və davamlı şəkildə işləyərək yüksək keyfiyyətli nəticə təmin edir.",
        img: Img1,
      },
      {
        id: 3,
        title: "CNC maşınları",
        description:
          "Mürəkkəb dizaynları avtomatlaşdırılmış şəkildə dəqiq və sabit performansla emal edir.",
        img: Img1,
      },
      {
        id: 4,
        title: "Qazma maşınları",
        description:
          "Müxtəlif materiallarda yüksək dəqiqliklə qazma işlərini etibarlı və effektiv şəkildə həyata keçirir.",
        img: Img1,
      },
    ];

  return (
    <>
      <section id="home-products">
        <div className="home-products">
          <div className="head">
            <div className="left">
              <div className="title">
                <List />
                <span>Məhsullarımız</span>
              </div>
              <h1>
                Müasir texnologiyalarla hazırlanmış yüksək keyfiyyətli ağac
                emalı avadanlıqları
              </h1>
            </div>
            <div className="right">
              <MainBtn title={"Bütün məhsullar"} />
            </div>
          </div>
          <div className="products">
            {machines.map((item) => (
              <div className="product-card" key={item.id}>
                <img src={item.img} alt={item.title} />
                <div className="text">
                  <div className="title">
                    <span>{item.title}</span>
                    <Arrow className="arrow-icon" fill="black" />
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeProducts;
