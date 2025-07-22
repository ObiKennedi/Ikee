import "./index.scss";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    nameKey: "testimonials.customer_1.name",
    feedbackKey: "testimonials.customer_1.feedback",
  },
  {
    nameKey: "testimonials.customer_2.name",
    feedbackKey: "testimonials.customer_2.feedback",
  },
  {
    nameKey: "testimonials.customer_3.name",
    feedbackKey: "testimonials.customer_3.feedback",
  },
];

const TestimonialsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <h2>{t("testimonials.title")}</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p className="feedback">“{t(testimonial.feedbackKey)}”</p>
              <p className="name">— {t(testimonial.nameKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
