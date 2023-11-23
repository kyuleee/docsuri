import MenuTitleText from "../../../components/text/MenuTitleText";
import ContentBox from "../../../components/contentBox/ContentBox";
import "./AboutSection.css";

const AboutSection = ({ AboutSectionRef, slide, aboutOn, consoleRef }) => {
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
          <div
            className="aboutContentWrap"
            style={{ translate: slide + "px" }}
            ref={consoleRef}
          >
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
