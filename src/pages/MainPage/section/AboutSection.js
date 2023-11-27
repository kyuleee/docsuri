import MenuTitleText from "../../../components/text/MenuTitleText";
import ContentBox from "../../../components/contentBox/ContentBox";
import "./AboutSection.css";
import { useRef, useState } from "react";

const AboutSection = ({ AboutSectionRef, aboutOn, slideRef, slide }) => {
  return (
    <>
      <section className="AboutSection" ref={AboutSectionRef}>
        <div
          className="aboutSpace"
          style={aboutOn ? { opacity: 1 } : { opacity: 0 }}
        >
          <MenuTitleText
            text2={"ABOUT"}
            text={"독:수리 A to Z"}
            text3={"기본기를 다지는 탄탄한 개념 학습"}
            text4={null}
          />
          <div className="aboutContentWrap" ref= {slideRef} style={{ translate: slide + "px" }}>
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
