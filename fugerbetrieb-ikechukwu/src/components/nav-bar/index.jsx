import { navLinks } from "../../../lib";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next"; 
import i18n from "../../i18n/i18n";
import "./index.scss";

function NavBar() {
    const { t } = useTranslation();
    const [headerWidth, setHeaderWidth] = useState(window.innerWidth);
    const [headerClass, setHeaderClass] = useState("header-class");
    const [scrolled, setScrolled] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const [lang, setLang] = useState(i18n.language || "de"); 
    const [langDropdownVisible, setLangDropdownVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setHeaderWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setHeaderClass(window.innerWidth <= 800 ? "header-small-class" : "header-class");
    }, [headerWidth]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuVisible(!isMenuVisible);
    const toggleLangDropdown = () => setLangDropdownVisible(!langDropdownVisible);
    const handleLangChange = (selectedLang) => {
        setLang(selectedLang);
        i18n.changeLanguage(selectedLang);
        setLangDropdownVisible(false);
    };

    const menuClass = isMenuVisible ? "toggle--visible" : "toggle--not--visible";

    return (
        <header className={clsx(headerClass, scrolled ? "scrolled-header" : "unscrolled-header")}>
            <img src="/images/logo fi.png" alt="logo" />

            <button onClick={toggleMenu}>
                <img src={scrolled ? "/icons/menu-black.png" : "/icons/menu-white.png"} alt="menu" />
            </button>

            <nav className={menuClass}>
                <ul>
                    {navLinks.map((item) => (
                        <li key={item.id}>
                            <a href={item.href}>{t(item.name)}</a>
                        </li>
                    ))}
                    <li className="lang-toggle">
                        <button onClick={toggleLangDropdown}>🌐 {lang.toUpperCase()}</button>
                        {langDropdownVisible && (
                            <ul className="lang-options">
                                <li onClick={() => handleLangChange("de")}>Deutsch</li>
                                <li onClick={() => handleLangChange("en")}>English</li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
