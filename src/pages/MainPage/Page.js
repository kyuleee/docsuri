import "./Page.css";
import {
  IntroSection,
  AboutSection,
  NoticeSection,
  SallerSection,
} from "./section";
import SideBar from "./../SideBar/SideBar";
import { useEffect, useRef, useState } from "react";
const Page = () => {
  const [opacity, setOpacity] = useState(false);
  const AboutSectionRef = useRef();
  function handleOpacity() {
    console.log(window.scrollY);
    console.log(AboutSectionRef.current.offsetTop);
    if (window.scrollY >= AboutSectionRef.current.offsetTop) {
      console.log("test");
      setOpacity(true);
    }
    if (window.scrollY < AboutSectionRef.current.offsetTop) {
      setOpacity(false);
    }
  }

  return (
    <main className="Home" onWheel={handleOpacity}>
      <SideBar />
      <IntroSection />
      <AboutSection AboutSectionRef={AboutSectionRef} opacity={opacity} />
      <NoticeSection />
      <SallerSection />
    </main>
  );
};

export { Page };
