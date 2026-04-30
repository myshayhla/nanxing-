import React from 'react';
import "./Style.scss"
import MainBtn from '../MainBtn/MainBtn';
import { Link } from 'react-router-dom';
import Arrow from "../../assets/Icons/Arrow-white.svg?react";
import Img1 from "../../assets/Images/service-card1.webp";
import Img2 from "../../assets/Images/service-card2.webp";
import Img3 from "../../assets/Images/service-card3.webp";


function HomeServices() {
     const serviceData = [
       {
         id: 1,
         title: "Servis və quraşdırılma",
         img: Img1,
         desc: "Peşəkar quraşdırılma və texniki servis ilə stabil işləmə təmin edilir.",
       },
       {
         id: 2,
         title: "Rəsmi zəmanət",
         img: Img2,
         desc: "Bütün məhsullar rəsmi zəmanətlə təqdim olunur və etibarlı istifadə təmin edir.",
       },
       {
         id: 3,
         title: "Original ehtiyat hissələri",
         img: Img3,
         desc: "Orijinal ehtiyat hissələri ilə yüksək performans və davamlılıq qorunur.",
       },
     ];


  return (
    <>
      <section id="services-section" className="services-section">
        <div className="services-container">
          {serviceData.map((item, index) => (
            <div className="service-card" key={index} >
              <div className='text-side'>
                <span>{item.title}</span>
                <p className="desc">{item.desc}</p>
                <div>
                  <Link className="link">
                    <p>Ətraflı bax </p>
                    <Arrow className="arrow-icon" />
                  </Link>
                </div>
              </div>
              <div className="img">
                <img src={item.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomeServices;
