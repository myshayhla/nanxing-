import { useState } from "react";
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
import { subscribe } from "../../api";
import { useSettings } from "../../hooks/useSettings";
import { CONTACT_PHONE_DISPLAY } from "../../utils/contact";
import {
  buildSocialLinks,
  formatSettingsMobile,
} from "../../utils/settingsHelpers";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194472.40913331884!2d49.7148584!3d40.3947694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b88e94365c0!2sBaku!5e0!3m2!1sen!2saz!4v1700000000000!5m2!1sen!2saz";

const EMPTY_FORM = {
  name: "",
  surname: "",
  email: "",
  mobile: "",
  message: "",
};

function ContactPage() {
  const { settings } = useSettings();
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const location = settings?.location || "Bakı, Azərbaycan";
  const email = settings?.email || "info@nanxing.az";
  const phone = settings?.mobile
    ? formatSettingsMobile(settings.mobile)
    : CONTACT_PHONE_DISPLAY;

  const socialLinks = buildSocialLinks(settings).map((social) => ({
    ...social,
    icon:
      social.id === "linkedin" ? (
        <Linkedin />
      ) : social.id === "instagram" ? (
        <Instagram />
      ) : (
        <Facebook />
      ),
  }));

  const infoItems = [
    { id: 1, icon: <LocContact />, title: "Ünvan", content: location },
    { id: 2, icon: <MailContact />, title: "Email", content: email },
    { id: 3, icon: <PhoneContact />, title: "Telefon", content: phone },
    {
      id: 4,
      icon: <InstagramContact />,
      title: "Sosial şəbəklər",
      socials: socialLinks,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage("");
    setSubmitting(true);

    try {
      await subscribe({
        name: form.name.trim(),
        surname: form.surname.trim(),
        email: form.email.trim(),
        mobile: form.mobile.trim(),
        message: form.message.trim(),
      });

      setForm(EMPTY_FORM);
      setSubmitMessage("Mesajınız uğurla göndərildi.");
    } catch (error) {
      console.error("Form göndərilmədi:", error);
      setSubmitMessage("Mesaj göndərilmədi. Yenidən cəhd edin.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact-page">
      <div className="contact-container">
        <div className="contact-form-panel">
          <div className="contact-form-panel__inner">
            <div className="contact-head">
              <h1>Bizimlə Əlaqə Saxlayın</h1>
              <p>Formu doldurun və tezliklə sizinlə əlaqə saxlayaq.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row contact-form__row--two">
                <div className="contact-form__group">
                  <label
                    className="contact-form__label"
                    htmlFor="contact-first-name"
                  >
                    Ad
                  </label>
                  <input
                    id="contact-first-name"
                    className="contact-form__input"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="given-name"
                    placeholder="Adınızı daxil edin"
                    required
                  />
                </div>
                <div className="contact-form__group">
                  <label
                    className="contact-form__label"
                    htmlFor="contact-last-name"
                  >
                    Soyad
                  </label>
                  <input
                    id="contact-last-name"
                    className="contact-form__input"
                    type="text"
                    name="surname"
                    value={form.surname}
                    onChange={handleChange}
                    autoComplete="family-name"
                    placeholder="Soyadınızı daxil edin"
                    required
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
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    placeholder="example@gmail.com"
                    required
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
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    autoComplete="tel"
                    placeholder={phone.replace(/\d/g, "_")}
                    required
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
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                />
              </div>

              {submitMessage && (
                <p className="contact-form__feedback">{submitMessage}</p>
              )}

              <div className="contact-form__actions">
                <MainBtn
                  title={submitting ? "Göndərilir..." : "Göndər"}
                  type="submit"
                  disabled={submitting}
                />
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
          {infoItems.map((item) => (
            <div className="infobox-item" key={item.id}>
              <div className="icon">{item.icon}</div>
              <div className="content">
                <h3>{item.title}</h3>
                {item.socials ? (
                  <div className="socials">
                    {item.socials.map((social) => (
                      <a
                        key={social.id}
                        href={social.url}
                        className="social-item"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.id}
                      >
                        {social.icon}
                      </a>
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
