import "./Style.scss";
import Logo from "../../assets/Images/Logo.webp";
import Mail from "../../assets/Icons/Mail.svg?react";
import Phone from "../../assets/Icons/Phone.svg?react";
import Location from "../../assets/Icons/Location.svg?react";
import LinkedIn from "../../assets/Icons/LinkedIn.svg?react";
import Instagram from "../../assets/Icons/Instagram.svg?react";
import Facebook from "../../assets/Icons/Facebook.svg?react";
import { Link } from 'react-router-dom';
// import Pinterest from "../../assets/Icons/Pinterest.svg?react";
// import Tiktok from "../../assets/Icons/Tiktok.svg?react";
// import Telegram from "../../assets/Icons/Telegram.svg?react";
// import Whatsapp from "../../assets/Icons/Whatsapp.svg?react";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="logo-side">
          <img src={Logo} alt="logo" />
          <h5>Müasir ağac emalı avadanlıqları</h5>
          <p>
            Yüksək keyfiyyətli və etibarlı sənaye həlləri ilə istehsal
            proseslərinizi daha səmərəli edin.
          </p>
        </div>
        <div className="right-side">
          <div className="links">
            <h5>Əsas səhifələr</h5>
            <ul>
              <li>
                <Link to="/">Ana səhifə</Link>
              </li>
              <li>
                <Link to="/solutions">Həllər</Link>
              </li>
              <li>
                <Link to="/products">Məhsullar</Link>
              </li>
              <li>
                <Link to="/about-us">Haqqımızda</Link>
              </li>
              <li>
                <Link to="/news">Xəbərlər</Link>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h5>Əlaqə</h5>
            <div className="mail">
              <Mail />
              <span>info@nanxing.az</span>
            </div>
            <div className="phone">
              <Phone />
              <span>+994 55 123 45 67</span>
            </div>
            <div className="location">
              <Location />
              <span>Bakı, Azərbaycan</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">© 2026 Nanxing. Bütün hüquqlar qorunur.</p>
        <p className="credits"> Sayt hazırlandı : Birsayt.az</p>
        <div className="socials">
          <Link to="https://www.linkedin.com/company/nanxing/">
            <LinkedIn />
          </Link>
          <Link to="https://www.instagram.com/nanxing/">
            <Instagram />
          </Link>
          <Link to="https://www.facebook.com/nanxing/">
            <Facebook />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
