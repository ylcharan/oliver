import ProjectSub from "../components/projectSub";
import vd1 from "../Assets/vedios/vd1.mp4";
import vd2 from "../Assets/vedios/vd2.mp4";
import vd3 from "../Assets/vedios/vd3.mp4";

const Projects = () => {
  const data = [
    {
      title1: "Relationship",
      title2: "READY",
      desc: "Solo Project",
      url: "https://oliverwilcox.com/img/RelationshipReadyFront.db1e18db.jpg",
    },
    {
      title1: "BOARDROOM",
      title2: "2030",
      desc: "Solo Project",
      url: "https://oliverwilcox.com/img/boardpic1.c9d2ca08.jpg",
    },
    {
      title1: "BREAKPACK",
      title2: "RECORDS",
      desc: "Solo Project",
      url: "https://oliverwilcox.com/img/breakpic1.6a0b3c45.jpg",
    },
    // {
    //   title1: "PEREGRINE",
    //   title2: "SCAFFOLDING",
    //   desc: "Solo Project",
    //   url: "https://oliverwilcox.com/img/perepic1.e1ba5ae5.jpg",
    // },
    {
      title1: "SUNDACE",
      title2: "2021",
      desc: "Solo Project",
      url: "https://oliverwilcox.com/img/sunpic1.8205088f.jpg",
    },
    {
      title1: "HOROGIUM",
      title2: "2022",
      desc: "Solo Project",
      url: "https://oliverwilcox.com/img/horopic1.0945488d.jpg",
    },
  ];
  return (
    <div className="projects">
      <div className="projects__wrapper">
        <div className="projects__title">
          <div className="dot"></div>PROJECTS
        </div>
        <div className="divider"></div>
        {data.map((el, i) => {
          return <ProjectSub number={`0${i + 1}`} key={i} {...el} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
