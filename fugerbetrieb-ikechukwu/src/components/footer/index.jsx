import "./index.scss";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h3>Fugerbetrieb Ikechuckwu</h3>
                    <p>Gut und preiswert – stemmen, sandstrahlen, einfügen.</p>
                </div>

                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p><strong>Ansprechpartner:</strong> Godpower Ikechuckwu</p>
                    <p><FaPhone /> +49 151 64397762</p>
                    <p><FaWhatsapp /> +49 1521 0472697</p>
                    <p><FaMapMarkerAlt /> Gotzen Strasse 21, 52511 Geilenkirchen, Deutschland</p>
                    <p><FaEnvelope /> Nachricht senden</p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Projects</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Fugerbetrieb Ikechuckwu. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
