import "./Style.scss";
import Logo from "../../assets/Images/Logo.webp";
import Mail from "../../assets/Icons/Mail.svg?react";
import Phone from "../../assets/Icons/Phone.svg?react";
import Location from "../../assets/Icons/Location.svg?react";
import LinkedIn from "../../assets/Icons/LinkedIn.svg?react";
import Instagram from "../../assets/Icons/Instagram.svg?react";
import Facebook from "../../assets/Icons/Facebook.svg?react";
import { Link } from "react-router-dom";
import { useSettings } from "../../hooks/useSettings";
import { CONTACT_PHONE_DISPLAY } from "../../utils/contact";
import {
  buildSocialLinks,
  formatSettingsMobile,
} from "../../utils/settingsHelpers";

function Footer() {
  const { settings } = useSettings();

  const location = settings?.location || "Bakı, Azərbaycan";
  const email = settings?.email || "info@nanxing.az";
  const phone = settings?.mobile
    ? formatSettingsMobile(settings.mobile)
    : CONTACT_PHONE_DISPLAY;

  const socialLinks = buildSocialLinks(settings).map((social) => ({
    ...social,
    icon:
      social.id === "linkedin" ? (
        <LinkedIn />
      ) : social.id === "instagram" ? (
        <Instagram />
      ) : (
        <Facebook />
      ),
  }));

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
              <span>{email}</span>
            </div>
            <div className="phone">
              <Phone />
              <span>{phone}</span>
            </div>
            <div className="location">
              <Location />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">© 2026 Nanxing. Bütün hüquqlar qorunur.</p>
        <p className="credits"> Sayt hazırlandı : Birsayt.az</p>
        <div className="socials">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.id}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
