import "./Page.css";
import { IntroSection, AboutSection, ChallengeSection } from "./section";
import { createContext, useEffect, useRef, useState } from "react";
import SideBar from "./../SideBar/SideBar";

export const introContext = createContext();

const Page = () => {
  const [introOn, setIntroOn] = useState(false);

  const AboutSectionRef = useRef();
  const ChallengeSectionRef = useRef();
  const consoleRef = useRef();

  // Logic
  const [positionX, setPositionX] = useState(-7);
  const [rotationY, setRotationY] = useState(1);
  const [rotationZ, setRotationZ] = useState(0.5);

  const [aboutOn, setAboutOn] = useState(false);
  const [scrollCount, setScrollCount] = useState(0);
  const [slide, setSlide] = useState(-700);

  const [challengeOn, setChallengeOn] = useState(false);

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
      setSlide(700);
    }
    if (window.scrollY >= AboutSectionTop + 20) {
      //aboutSection Start
      setScrollCount((prev) => prev + 1);
      //About
      setAboutOn(true);
      if (e.deltaY > 0 && scrollCount >= 6) {
        setSlide((prev) => prev - 700);
        setScrollCount(0);
      }
      if (e.deltaY < 0 && scrollCount >= 6) {
        setSlide((prev) => prev + 700);
        setScrollCount(0);
        setChallengeOn(false);
      }
    }
    if (window.scrollY > ChallengeSectionTop - 500) {
      setAboutOn(false);
      setSlide(-2800);
      setChallengeOn(true);
    }
  }
  return (
    <main className="Home" onWheel={(e) => handleWheel(e)}>
      {/* <SideBar /> */}
      <introContext.Provider value={{ positionX, rotationY, rotationZ }}>
        <IntroSection introOn={introOn} />
      </introContext.Provider>
      <AboutSection
        AboutSectionRef={AboutSectionRef}
        aboutOn={aboutOn}
        slide={slide}
      />
      <ChallengeSection
        ChallengeSectionRef={ChallengeSectionRef}
        challengeOn={challengeOn}
      />
    </main>
  );
};

export { Page };
