import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./index.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <h3>Fugerbetrieb Ikechuckwu</h3>
            <p>{t("footer.description")}</p>
          </div>

          <div className="footer__links">
            <h4>{t("footer.quick_links")}</h4>
            <ul>
              <li><a href="#home">{t("nav.home")}</a></li>
              <li><a href="#about">{t("nav.about")}</a></li>
              <li><a href="#services">{t("nav.services")}</a></li>
              <li><a href="#contact">{t("nav.contact")}</a></li>
            </ul>
          </div>

          <div className="footer__socials">
            <h4>{t("footer.follow_us")}</h4>
            <div className="icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Fugerbetrieb Ikechuckwu. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;