import gsap from "gsap";
import { useEffect } from "react";

const ProjectSub = ({ title1, number, title2, desc, url }) => {
  useEffect(() => {
    const project = document.querySelector(`.projects__sub--${number}`);
    const cursor = document.querySelector(".cursor");
    const cursorCircle = document.querySelector(".cursor__circle");
    const cursorImg = document.querySelector(".cursor__img");
    const cursorImgSrc = document.querySelector(".cursor__img img");

    const moseHover = () => {
      gsap.set(cursorCircle, {
        display: "none",
      });
      gsap.set(cursorImg, {
        display: "block",
      });
      gsap.to(project, {
        x: "-7%",
        ease: "power2.in",
        duration: 0.3,
      });
      cursorImgSrc.src = url;
      cursorImgSrc.onload = () => {
        console.log("loaded");
      };
    };
    const mouseExit = () => {
      gsap.set(cursorCircle, {
        display: "block",
      });
      gsap.set(cursorImg, {
        display: "none",
      });
      gsap.to(project, {
        x: "0%",
        ease: "power2.in",
        duration: 0.3,
      });
    };
    project.addEventListener("mouseenter", moseHover);
    project.addEventListener("mouseleave", mouseExit);
    return () => {
      project.removeEventListener("mouseenter", moseHover);
      project.removeEventListener("mouseleave", mouseExit);
    };
  }, []);
  return (
    <div className={`projects__sub projects__sub--${number}`}>
      <div
        className={`projects__sub__wrapper projects__sub__wrapper--${number}`}
      >
        <span>{number}</span>
        <div className="flex-clm">
          <div className="projects__sub__title">{title1}</div>
          <div className="projects__sub__title__inner">{title2}</div>
          <span>{desc}</span>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default ProjectSub;
