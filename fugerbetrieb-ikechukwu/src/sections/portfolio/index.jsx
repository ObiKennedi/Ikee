import "./index.scss";
import { useTranslation } from "react-i18next";

const projects = [
  {
    image: "/images/image 1.jpg",
    titleKey: "projects.project_1.title",
    descriptionKey: "projects.project_1.description",
  },
  {
    image: "/images/image 2.jpg",
    titleKey: "projects.project_2.title",
    descriptionKey: "projects.project_2.description",
  },
  {
    image: "/images/image 3.jpg",
    titleKey: "projects.project_3.title",
    descriptionKey: "projects.project_3.description",
  },
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
              <img src={project.image} alt={t(project.titleKey)} />
              <h3>{t(project.titleKey)}</h3>
              <p>{t(project.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
