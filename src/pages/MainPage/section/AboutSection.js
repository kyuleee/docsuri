import { useRef, useState } from "react";
import MenuTitleText from "../../../components/text/MenuTitleText";
import "./AboutSection.css";
import ContentBox from "../../../components/contentBox/ContentBox";

const AboutSection = () => {
  const [slideCount, setSlideCount] = useState(0);
  const [slide, setSlide] = useState(40);
  const slideRef = useRef();

  function handleWheel(e) {
    if (e.deltaY > 0 && slideCount < 10) {
      setSlideCount((prev) => prev + 1);
      setSlide((prev) => prev - 10);
      console.log(slideCount);
      console.log(e.deltaY);
      console.log(slideRef);
      console.log(window);
    } else if (e.deltaY < 0 && slide < 10) {
      setSlideCount((prev) => prev - 1);
      setSlide((prev) => prev + 10);
      console.log(slideCount);
      console.log(e.deltaY);
    }
  }

  return (
    <>
      <section className="AboutSection" onWheel={handleWheel} ref={slideRef}>
        <div className="AboutSticky">
          <h3 className="문제가 있어보임">ABOUT</h3>
          <MenuTitleText
            text={"독:수리"}
            text2={"저희 사이트는 이런 강점이 있습니다!"}
          />
          <div className="aboutContentWrap" style={{ translate: slide + "%" }}>
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
