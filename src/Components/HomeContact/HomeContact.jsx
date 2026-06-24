import "./Style.scss";
import ContactImg from "../../assets/Images/HomeContact.webp";
import Arrow from "../../assets/Icons/Arrow-white.svg?react";
import List from "../../assets/Icons/title-icon.svg?react";
import { Link } from "react-router-dom";
import {
  getWhatsAppContactUrl,
  getWhatsAppOrderUrl,
} from "../../utils/whatsapp";

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
            <a
              href={getWhatsAppOrderUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="green-btn"
            >
              <span>Sifariş et </span>
              <Arrow className="arrow-icon" />
            </a>
            <a
              href={getWhatsAppContactUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="main-btn"
            >
              <span>Bizimlə Əlaqə</span>
              <Arrow className="arrow-icon" />
            </a>
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
