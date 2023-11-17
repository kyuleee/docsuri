import TabletModel from "../../../components/tabletModel/TabletModel";
import "./IntroSection.css";
const IntroSection = () => {
  return (
    <section className="IntroSection section1">
      <h1 className="TitleText">
        초등학교 고학년을 위한 <br />
        온라인 문제 풀이 사이트
      </h1>
      <TabletModel />
    </section>
  );
};

export { IntroSection };
