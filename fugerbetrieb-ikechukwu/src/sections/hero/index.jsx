import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./index.scss";

const HeroSection = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            heroRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
        );
    }, []);

    return (
        <section className="hero-section" ref={heroRef}>
            <img src="/images/hr bg.webp" alt="hr bg" />
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1>Fugerbetrieb Ikechuckwu</h1>
                    <p>Crafting Landmarks. Building Futures.</p>
                    <a href="#contact" className="cta-button">Request a Quote</a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
