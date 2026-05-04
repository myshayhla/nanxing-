import React from 'react';
import "./Style.scss";
import ContactImg from "../../assets/Images/HomeContact.webp";
import Arrow from "../../assets/Icons/Arrow-white.svg?react";
import List from "../../assets/Icons/title-icon.svg?react";
import MainBtn from '../MainBtn/MainBtn';
import { Link } from 'react-router-dom';


function HomeContact() {
  return (
    <section id="home-contact">
      <div className="home-contact">
        <div className="left">
          <div className="head">
            <div className="title">
              <List />
              <span>Əlaqə </span>
            </div>
            <h1>Bizimlə əlaqə</h1>
            <p>
              Layihəniz və ya sualınız üçün bizimlə əlaqə saxlayın — komandamız
              sizə ən uyğun sənaye həllərini təqdim etməyə hazırdır.
            </p>
          </div>
          <div className="buttons">
              <button className="green-btn">
            <Link>
                <span>Sifariş et </span>
                <Arrow className="arrow-icon" />
            </Link>
              </button>
              <button className="main-btn">
            <Link to={"/contact-us"}>
                <span>Bizimlə Əlaqə</span>
                <Arrow className="arrow-icon" />
            </Link>
              </button>
          </div>
        </div>
        <div className="right">
          <img src={ContactImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default HomeContact;
