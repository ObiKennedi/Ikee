import { useTranslation } from "react-i18next";
import "./index.scss";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2>{t("about_title")}</h2>
        <p>{t("about_paragraph_1")}</p>
        <p>{t("about_paragraph_2")}</p>
        <p>{t("about_paragraph_3")}</p>
      </div>
    </section>
  );
};

export default About;
