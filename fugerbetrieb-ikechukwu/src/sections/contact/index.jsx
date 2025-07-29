/* eslint-disable no-unused-vars */
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import "./index.scss";

const ContactSection = () => {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_umcqkdd",
        "template_uda909p",
        form.current,
        "OR3Ad3nZuAAhPqHvZ"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Message failed to send. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2>{t("contact.title")}</h2>
        <div className="contact-content">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="user_name" placeholder={t("contact.name")} required />
            <input type="email" name="user_email" placeholder={t("contact.email")} required />
            <textarea name="message" placeholder={t("contact.message")} required></textarea>
            <button type="submit">{t("contact.send")}</button>
          </form>

          <div className="contact-details">
            <h3>{t("contact.address_title")}</h3>
            <p>Godspower Ikechukwu</p>
            <p>Gotzen strasse 21, 52511 Geilenkirchen, Germany</p>
            <p><strong>{t("contact.phone")}:</strong> +49 151 6439 7762</p>
            <p><strong>{t("contact.whatsapp")}:</strong> +49 152 1047 2697</p>
            <p><strong>{t("contact.email_label")}:</strong> oneikegod@yahoo.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
