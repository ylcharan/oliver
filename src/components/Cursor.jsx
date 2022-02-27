import gsap from "gsap";
import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const moveCursor = (e) => {
      gsap.to(cursor, 1, {
        x: `${e.clientX}px`,
        y: `${e.clientY}px`,
        ease: "power3.out",
      });
    };
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return (
    <div className="cursor">
      <div className="cursor__circle"></div>
      <div className="cursor__img">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Cursor;
