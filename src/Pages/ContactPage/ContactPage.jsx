import "./Style.scss";
import LocContact from "../../assets/Icons/Loc-contact.svg?react";
import MailContact from "../../assets/Icons/Mail-contact.svg?react";
import PhoneContact from "../../assets/Icons/Phone-contact.svg?react";
import InstagramContact from "../../assets/Icons/Instagram-contact.svg?react";
import Linkedin from "../../assets/Icons/linkedin-content.svg?react";
import Instagram from "../../assets/Icons/instagram-content.svg?react";
import Facebook from "../../assets/Icons/facebook-content.svg?react";
import MailForm from "../../assets/Icons/mail-form.svg?react";
import PhoneForm from "../../assets/Icons/phone-form.svg?react";
import MainBtn from "../../Components/MainBtn/MainBtn";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194472.40913331884!2d49.7148584!3d40.3947694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b88e94365c0!2sBaku!5e0!3m2!1sen!2saz!4v1700000000000!5m2!1sen!2saz";

function ContactPage() {
  const settings = [
    {
      id: 1,
      icon: <LocContact />,
      
      title: "Ünvan",
      content: "Bakı, Azərbaycan",
    },
    {
      id: 2,
      icon: <MailContact />,
      title: "Email",
      content: "info@nanxing.az",
    },
    {
      id: 3,
      icon: <PhoneContact />,
      title: "Telefon",
      content: "+994 55 123 45 67",
    },
    {
      id: 4,
      icon: <InstagramContact />,
      title: "Sosial şəbəklər",
      content: [
        { id: 1, icon: <Linkedin /> },
        { id: 2, icon: <Instagram /> },
        { id: 3, icon: <Facebook /> },
      ],
    },
  ];

  return (
    <section id="contact-page">
      <div className="contact-container">
        <div className="contact-form-panel">
          <div className="contact-form-panel__inner">
            <div className="contact-head">
              <h1>Bizimlə Əlaqə Saxlayın</h1>
              <p>Formu doldurun və tezliklə sizinlə əlaqə saxlayaq.</p>
            </div>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="contact-form__row contact-form__row--two">
                <div className="contact-form__group">
                  <label className="contact-form__label" htmlFor="contact-first-name">
                    Ad
                  </label>
                  <input
                    id="contact-first-name"
                    className="contact-form__input"
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    placeholder="Adınızı daxil edin"
                  />
                </div>
                <div className="contact-form__group">
                  <label className="contact-form__label" htmlFor="contact-last-name">
                    Soyad
                  </label>
                  <input
                    id="contact-last-name"
                    className="contact-form__input"
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    placeholder="Soyadınızı daxil edin"
                  />
                </div>
              </div>

              <div className="contact-form__group">
                <label className="contact-form__label" htmlFor="contact-email">
                  E-poçt ünvanı
                </label>
                <div className="contact-form__field contact-form__field--icon">
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="example@gmail.com"
                  />
                  <MailForm className="contact-form__field-icon" aria-hidden />
                </div>
              </div>

              <div className="contact-form__group">
                <label className="contact-form__label" htmlFor="contact-phone">
                  Telefon Nömrəsi
                </label>
                <div className="contact-form__field contact-form__field--icon">
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+994 __ ___ __ __"
                  />
                  <PhoneForm className="contact-form__field-icon" aria-hidden />
                </div>
              </div>

              <div className="contact-form__group">
                <label className="contact-form__label" htmlFor="contact-notes">
                  Əlavə qeydlər
                </label>
                <textarea
                  id="contact-notes"
                  className="contact-form__textarea"
                  name="notes"
                  rows={5}
                />
              </div>

              <div className="contact-form__actions">
                <MainBtn title="Göndər" />
              </div>
            </form>
          </div>
        </div>

        <div className="contact-map-panel">
          <div className="contact-map-panel__embed">
            <iframe
              src={MAP_EMBED_SRC}
              title="Nanxing ünvanı xəritədə"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="contact-info">
        <div className="infobox">
          {settings.map((item) => (
            <div className="infobox-item" key={item.id}>
              <div className="icon">{item.icon}</div>
              <div className="content">
                <h3>{item.title}</h3>
                {Array.isArray(item.content) ? (
                  <div className="socials">
                    {item.content.map((social) => (
                      <div className="social-item" key={social.id}>
                        {social.icon}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>{item.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
