import React from 'react';
import "./Style.scss";
import List from "../../assets/Icons/title-icon.svg?react"
import MainBtn from '../MainBtn/MainBtn';
import { Link } from 'react-router-dom';
import AboutImg from "../../assets/Images/HomeAbout.webp";

function HomeAboutSec() {
  return (
    <section id="home-about">
      <div className="home-about">
        <div className="head">
          <div className="title">
            <List />
            <span>Haqqımızda </span>
          </div>
          <h1>
            Sənaye istehsalında innovasiya və etibarlılığı bir araya gətirən
            qabaqcıl texnologiyalar
          </h1>
          <p>
            Müasir avadanlıqlar və peşəkar yanaşma ilə istehsal proseslərinizi
            daha effektiv və dəqiq edirik.
          </p>
        </div>
        <div className="content">
          <div className="left">
            <div className="about-btn">
              <Link to={"/about-us"}>
                <MainBtn title={"Daha Ətraflı"} />
              </Link>
            </div>
            <ul className="list">
              <li className="list-element">
                <span className="number">1</span>
                <span className="title">Metal konstruksiyalar</span>
              </li>
              <li className="list-element">
                <span className="number">2</span>
                <span className="title">Sənaye metal emalı</span>
              </li>
              <li className="list-element">
                <span className="number">3</span>
                <span className="title">Fərdi istehsal həlləri</span>
              </li>
            </ul>
          </div>
          <div className="right">
            <img src={AboutImg} alt="" />
          </div>
        </div>
        <div className="about-btn-mobile">
          <Link to={"/about-us"}>
            <MainBtn title={"Daha Ətraflı"} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeAboutSec;
