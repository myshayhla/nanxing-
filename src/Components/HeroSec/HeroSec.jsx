import React from "react";
import "./Style.scss";
import List from "../../assets/Icons/list.svg";
import MainBtn from "../MainBtn/MainBtn.jsx";
// import Hero from "./Style.scss";
import { Link } from 'react-router-dom';

function HeroSec() {
  return (
    <section id="hero-section">
      <div className="hero-section">
        <div className="left">
          <p className="head">
            Yüksək dəqiqlik, sürət və etibarlılıq ilə istehsal prosesinizi
            növbəti səviyyəyə qaldırın.
          </p>
          <div className="choices">
            <div className="choice ">
              <img src={List} alt="" />
              <span>Dəqiqlik</span>
            </div>
            <div className="choice ">
              <img src={List} alt="" />
              <span>Etibarlılıq</span>
            </div>
            <div className="choice ">
              <img src={List} alt="" />
              <span>Performans</span>
            </div>
          </div>
          <div className="btn">
            <Link to={"/products"}>
              <MainBtn title={"Məhsullara bax "} />{" "}
            </Link>
          </div>
        </div>
        <div className="right">
          <h1>
            Müasir ağac emalı <br /> texnologiyaları
          </h1>
        </div>
      </div>
    </section>
  );
    
}

export default HeroSec;
