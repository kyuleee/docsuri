import { useRef, useState } from "react";
import MenuTitleText from "../../../components/text/MenuTitleText";
import "./AboutSection.css";
import ContentBox from "../../../components/contentBox/ContentBox";

const AboutSection = ({ AboutSectionRef, opacity }) => {
  const [slideCount, setSlideCount] = useState(0);
  const [slide, setSlide] = useState(40);

  function handleWheel(e) {
    if (e.deltaY > 0) {
      setSlide((prev) => prev - 200);
    } else if (e.deltaY < 0) {
      setSlide((prev) => prev + 200);
    }
  }

  return (
    <>
      <section
        className="AboutSection"
        onWheel={handleWheel}
        ref={AboutSectionRef}
        style={opacity ? { opacity: 1 } : { opacity: 0 }}
      >
        <div className="AboutSticky">
          <MenuTitleText
            text={"ABOUT"}
            text2={"저희 사이트는 이런 강점이 있습니다!"}
          />
          <div className="aboutContentWrap" style={{ translate: slide + "px" }}>
            <ContentBox text={"기초"} />
            <ContentBox text={"개념"} />
            <ContentBox text={"사고력"} />
            <ContentBox text={"창의력"} />
            <ContentBox text={"응용력"} />
          </div>
        </div>
      </section>
    </>
  );
};

export { AboutSection };
