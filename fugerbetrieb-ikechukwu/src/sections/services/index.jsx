import "./index.scss";
import { FaTools, FaDraftingCompass, FaArchway, FaHistory } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const services = [
  {
    icon: <FaTools />,
    titleKey: "about.service_1",
  },
  {
    icon: <FaArchway />,
    titleKey: "about.service_2",
  },
  {
    icon: <FaDraftingCompass />,
    titleKey: "about.service_3",
  },
  {
    icon: <FaHistory />,
    titleKey: "about.service_4",
  },
];

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2>{t("about.services_title")}</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon">{service.icon}</div>
              <p>{t(service.titleKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
