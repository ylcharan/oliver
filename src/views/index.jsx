import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import {  useNavigate } from "react-router-dom";
import About from "./about";
import Projects from "./projects";

gsap.registerPlugin(ScrollToPlugin);

const Index = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="home">
      <header>
        <div className="header">
          <span onClick={
            () => {
              gsap.to(window, {
                duration: .8,
                scrollTo: '.about'
              })
            }
          }>ABOUT</span>
          <span>Projects</span>
          <span>Contact</span>
        </div>
      </header>
      <div className="home__wrapper">
        <div className="home__hero">
          <div className="home__hero__wrapper">
            <div className="home__hero__title">
              <span>I AM</span>
              <span>YL</span>
              <span>CHARAN</span>
            </div>
            <div className="home__hero__sub">
              <span>A WEB DESIGNER AND</span>
              <span>
                DEVELOPER WHO EMBRACES MINIMALISM <br />
                AND ABSTRACTION WITH GRACEFUL
                <br /> MOTION DESIGN.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
   <About/>
   <Projects/>
    </>
  );
};

export default Index;
