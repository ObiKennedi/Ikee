import "./index.scss";
import { FaHardHat, FaClock, FaShieldAlt, FaCheckCircle, FaMapMarkedAlt } from "react-icons/fa";

const AboutSection = () => {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="why-choose-us">
                    <h3>Why Choose Us</h3>
                    <ul className="features-list">
                        <li><FaCheckCircle /> Experienced & Certified Professionals</li>
                        <li><FaHardHat /> High-Quality Materials & Standards</li>
                        <li><FaClock /> On-Time Project Delivery</li>
                        <li><FaShieldAlt /> Safety & Compliance First</li>
                        <li><FaMapMarkedAlt /> Local Expertise, Global Standards</li>
                    </ul>
                </div>

                <h2>About Us</h2>
                <p>
                    At <strong>Fugerbetrieb Ikechuckwu</strong>, we believe that every structure is more than just bricks and steel — it’s a statement of excellence. With years of experience in delivering durable, innovative, and client-focused construction solutions, our team stands at the intersection of tradition and modern engineering.
                </p>
                <p>
                    From residential buildings to commercial developments and infrastructure projects, we bring unmatched precision, integrity, and efficiency to every site. We are committed to delivering projects on time, on budget, and to the highest standards of safety and quality.
                </p>
                <p>
                    <strong>Fugerbetrieb Ikechuckwu</strong> is more than a construction company — we’re your building partner for a better tomorrow.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
