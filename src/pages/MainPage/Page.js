import "./Page.css";
import { IntroSection, AboutSection, ChallengeSection } from "./section";
import { createContext, useEffect, useRef, useState } from "react";
import { throttle } from "lodash";

export const introContext = createContext();

const Page = () => {
  // TEST LOGIC

  // INTRO LOGIC DATA
  const [introOn, setIntroOn] = useState(false);
  const [introText, setintroText] = useState(false);

  const [positionX, setPositionX] = useState(-6);
  const [rotationY, setRotationY] = useState(1);
  const [rotationZ, setRotationZ] = useState(0.5);

  // ABOUT LOGIC DATA
  const AboutSectionRef = useRef();
  const slideRef = useRef();

  const [aboutOn, setAboutOn] = useState(false);
  const [slide, setSlide] = useState(700);
  const [slideCount, setSlideCount] = useState(0);

  // CHALLENGE LOGIC DATA
  const ChallengeSectionRef = useRef();

  const [challengeOn, setChallengeOn] = useState(false);

  // SCROLL LOGIC
  const scrollRef = useRef(0);
  const throttleScroll = throttle(eventScroll, 200, {
    leading: false,
    trailing: true,
  });

  function eventScroll() {
    const AboutSectionTop = AboutSectionRef.current.offsetTop;
    const ChallengeSectionTop = ChallengeSectionRef.current.offsetTop;
    const screenHeight = window.innerHeight;
    const scrollNow = window.scrollY;
    const slideWidth = slideRef.current.clientWidth / 10;
    if (scrollNow < AboutSectionTop - screenHeight/2) {
      if (scrollNow < scrollRef.current) {
        setPositionX(-6);
        setRotationY(1);
        setRotationZ(0.5);
        setintroText(false);
      }
      if (scrollNow > scrollRef.current) {
        setPositionX(7);
        setRotationY(5.5);
        setRotationZ(6);
        setintroText(true);
      }
      setIntroOn(true);
      setAboutOn(false);
      setSlide(700);
    }
    if (scrollNow >= AboutSectionTop) {
      setIntroOn(false);
      setAboutOn(true);

      if (scrollNow > scrollRef.current) {
        setSlide((prev) => prev - slideWidth);
      }

      if (scrollNow < scrollRef.current) {
        setSlide((prev) => prev + slideWidth);
      }
    }
    if (
      scrollNow > ChallengeSectionTop - screenHeight &&
      scrollNow < ChallengeSectionTop
    ) {
      setAboutOn(false);
      setChallengeOn(true);
    }
    scrollRef.current = scrollNow;
  }

  useEffect(() => {
    const handleScroll = () => {
      throttleScroll();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      throttleScroll.cancel();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [slideCount]);
  return (
    <main className="Home">
      <introContext.Provider value={{ positionX, rotationY, rotationZ }}>
        <IntroSection introOn={introOn} introText={introText} />
      </introContext.Provider>
      <AboutSection
        AboutSectionRef={AboutSectionRef}
        aboutOn={aboutOn}
        slide={slide}
        slideRef={slideRef}
      />
      <ChallengeSection
        ChallengeSectionRef={ChallengeSectionRef}
        challengeOn={challengeOn}
      />
    </main>
  );
};
export { Page };
