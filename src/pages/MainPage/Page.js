import "./Page.css";
import { IntroSection, AboutSection, ChallengeSection } from "./section";
import { createContext, useEffect, useRef, useState } from "react";
import SideBar from "./../SideBar/SideBar";

export const introContext = createContext();

const Page = () => {
  // Model State //Text Opacity
  const [positionX, setPositionX] = useState(-7);
  const [rotationY, setRotationY] = useState(1);
  const [rotationZ, setRotationZ] = useState(0.5);

  const [introOn, setIntroOn] = useState(false);

  const AboutSectionRef = useRef();
  const ChallengeSectionRef = useRef();
  const consoleRef = useRef();

  const [scrollCount, setScrollCount] = useState(0);
  const [aboutOn, setAboutOn] = useState(false);

  const [slide, setSlide] = useState(1000);
  function handleWheel(e) {
    const AboutSectionTop = AboutSectionRef.current.offsetTop;
    const ChallengeSectionTop = ChallengeSectionRef.current.offsetTop;
    if (window.scrollY >= 0 && window.scrollY < AboutSectionTop) {
      // IntroSection
      if (e.deltaY > 0) {
        setPositionX(6);
        setRotationY(5.5);
        setRotationZ(6);
        setIntroOn(true);
      }
      if (e.deltaY < 0 && window.scrollY <= AboutSectionTop - 1000) {
        setPositionX(-6);
        setRotationY(1);
        setRotationZ(0.5);
        setIntroOn(false);
      }

      //  AboutSection
      setAboutOn(false);
      setSlide(1000);
    }
    if (window.scrollY >= AboutSectionTop + 20) {
      //aboutSection Start
      setScrollCount((prev) => prev + 1);
      //About
      setAboutOn(true);
      if (e.deltaY > 0) {
        setSlide((prev) => prev - 120);
      }
      if (e.deltaY < 0) {
        setSlide((prev) => prev + 120);
      }
    }
    if (window.scrollY > ChallengeSectionTop - 1000) {
      setAboutOn(false);
      setSlide(-2760);
    }
  }
  return (
    <main className="Home" onWheel={(e) => handleWheel(e)}>
      <SideBar />
      <introContext.Provider value={{ positionX, rotationY, rotationZ }}>
        <IntroSection introOn={introOn} />
      </introContext.Provider>
      <AboutSection
        AboutSectionRef={AboutSectionRef}
        aboutOn={aboutOn}
        slide={slide}
        consoleRef={consoleRef}
      />
      <ChallengeSection ChallengeSectionRef={ChallengeSectionRef} />
    </main>
  );
};

export { Page };
