import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTranslation } from "react-i18next"; 
import "./index.scss";

const HeroSection = () => {
    const heroRef = useRef(null);
    const { t } = useTranslation(); 

    useEffect(() => {
        gsap.fromTo(
            heroRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
        );
    }, []);

    return (
        <section className="hero-section" ref={heroRef}>
            <img src="/images/hr bg.jpeg" alt="hr bg" />
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1>{t("hero.companyName")}</h1>
                    <p>{t("hero.tagline")}</p>
                    <a href="#contact" className="cta-button">
                        {t("hero.cta")}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;