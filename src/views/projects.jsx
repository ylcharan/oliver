import ProjectSub from "../components/projectSub";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__wrapper">
        <div className="projects__title">
          <div className="dot"></div>PROJECTS
        </div>
        <div className="divider"></div>
        <ProjectSub />
      </div>
    </div>
  );
};

export default Projects;
