import { useTranslation } from "react-i18next";
import "./index.scss";

const WhyChooseUs = () => {
    const { t } = useTranslation();

    return (
        <section className="why-choose-us">
            <h2>{t("why_choose_title")}</h2>
            <div className="reasons">
                <div className="reason-card">
                    <img src="/icons/precision.png" alt="Precision Icon" />
                    <h3>{t("why_choose_1_title")}</h3>
                    <p>{t("why_choose_1_desc")}</p>
                </div>
                <div className="reason-card">
                    <img src="/icons/rating.png" alt="Experience Icon" />
                    <h3>{t("why_choose_2_title")}</h3>
                    <p>{t("why_choose_2_desc")}</p>
                </div>
                <div className="reason-card">
                    <img src="/icons/quality.png" alt="Quality Icon" />
                    <h3>{t("why_choose_3_title")}</h3>
                    <p>{t("why_choose_3_desc")}</p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;