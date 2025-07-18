import "./index.scss";
import { FaHome, FaBuilding, FaTools, FaRoad, FaProjectDiagram, FaDraftingCompass } from "react-icons/fa";

const services = [
    {
        icon: <FaHome />,
        title: "Residential Construction",
        description: "High-quality homes built with care, precision, and lasting value.",
    },
    {
        icon: <FaBuilding />,
        title: "Commercial Projects",
        description: "From office blocks to retail spaces, we build for business growth.",
    },
    {
        icon: <FaTools />,
        title: "Renovation & Remodeling",
        description: "Breathing new life into existing structures with expert redesign.",
    },
    {
        icon: <FaRoad />,
        title: "Road & Infrastructure",
        description: "Reliable civil works including roads, drainage, and structural support.",
    },
    {
        icon: <FaProjectDiagram />,
        title: "Project Management",
        description: "End-to-end construction oversight, planning, and execution.",
    },
    {
        icon: <FaDraftingCompass />,
        title: "Consulting & Site Planning",
        description: "Expert advice and detailed planning for smooth project execution.",
    },
];

const ServicesSection = () => {
    return (
        <section className="services-section" id="services">
            <div className="container">
                <h2>Our Services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
