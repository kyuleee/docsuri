import { useEffect, useState } from "react";
import MenuTitleText from "../../../components/TitleText/MenuTitleText";
import SubTitleText from "../../../components/TitleText/SubTitleText";
import "./AboutSection.css";
import AboutContent from "./aboutParts/AboutContent";

const AboutSection = () => {
  const [slideCount, setSlideCount] = useState(0);

  function handleWheel(e) {
    setSlideCount((prev) => prev + 1);
    console.log(slideCount);
    console.log(e.deltaY);
  }

  return (
    <>
      <section className="AboutSection" onWheel={handleWheel}>
        <div className="sectionLayout1">
          <SubTitleText text={"About"} />
          <MenuTitleText text={"Title"} />
          <div className="contentWrap">
            <AboutContent />
            <AboutContent />
            <AboutContent />
            <AboutContent />
            <AboutContent />
            <AboutContent />
            <AboutContent />
          </div>
        </div>
      </section>
    </>
  );
};

export { AboutSection };
