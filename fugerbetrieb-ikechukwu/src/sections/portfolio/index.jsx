import "./index.scss";
import { useTranslation } from "react-i18next";

const projects = [
  { image: "/images/image 1.jpg", labelKey: "project1", city: "Monchengladbach" },
  { image: "/images/image 2.jpg", labelKey: "project2", city: "Baesweiler" },
  { image: "/images/image 3.jpg", labelKey: "project3", city: "Aldenhoven" },
  { image: "/images/image 4.jpg", labelKey: "project4", city: "Baesweiler" }
];

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2>{t("projects.title")}</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={`${t(`projects.${project.labelKey}`)} - ${project.city}`} />
              <div className="project-info">
                <h3>{t(`projects.${project.labelKey}`)}</h3>
                <p>{project.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
