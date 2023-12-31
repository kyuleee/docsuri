import "./Page.css";
import {
  IntroSection,
  AboutSection,
  ChallengeSection,
  NoticeSection,
} from "./section";
import { createContext, useEffect, useMemo, useRef, useState } from "react";
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
  const [slide, setSlide] = useState(1050);

  // CHALLENGE LOGIC DATA
  const ChallengeSectionRef = useRef();

  const [challengeOn, setChallengeOn] = useState(false);

  // SCROLL LOGIC
  const scrollRef = useRef(0);
  const throttleScroll = useMemo(
    () =>
      throttle(
        () => {
          const AboutSectionTop = AboutSectionRef.current.offsetTop;
          const ChallengeSectionTop = ChallengeSectionRef.current.offsetTop;
          const screenHeight = window.innerHeight;
          const scrollNow = window.scrollY;
          const slideWidth = slideRef.current.clientWidth / 5;

          if (scrollNow < AboutSectionTop - screenHeight) {
            setIntroOn(true);
            setAboutOn(false);
            if (window.innerWidth >= 769) {
              setSlide(slideWidth);
            } else {
              setSlide(0);
            }
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
          }

          if (scrollNow >= AboutSectionTop && window.innerWidth >= 769) {
            setIntroOn(false);
            setAboutOn(true);
            setChallengeOn(false);
            if (scrollNow > scrollRef.current) {
              setSlide((prev) => prev - slideWidth);
            }

            if (scrollNow < scrollRef.current) {
              setSlide((prev) => prev + slideWidth);
            }
          }

          if (scrollNow >= AboutSectionTop - 500 && window.innerWidth < 769) {
            setIntroOn(false);
            setAboutOn(true);
            setChallengeOn(false);
          }
          if (scrollNow > ChallengeSectionTop - screenHeight / 2) {
            setAboutOn(false);
            if (window.innerWidth >= 769) {
              setSlide(0 - slideWidth * 5);
            } else {
              setSlide(0);
            }
            setChallengeOn(true);
          }
          scrollRef.current = scrollNow;
        },
        300,
        {
          leading: false,
          trailing: true,
        }
      ),
    [scrollRef.current]
  );

  useEffect(() => {
    window.addEventListener("scroll", throttleScroll);
    return () => {
      throttleScroll.cancel();
      window.removeEventListener("scroll", throttleScroll);
    };
  }, []);
  return (
    <>
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
      <NoticeSection />
    </>
  );
};
export { Page };
