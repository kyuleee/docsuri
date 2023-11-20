import TabletModel from "../../../components/tabletModel/TabletModel";
import MenuTitleText from "../../../components/text/MenuTitleText";
import "./IntroSection.css";
const IntroSection = () => {
  return (
    <section className="IntroSection section1">
      <article className="phase1">
        <h1 className="TitleText">
          초등학교 고학년을 위한 <br />
          온라인 문제 풀이 사이트
        </h1>
      </article>
      <article className="phase2">
        <MenuTitleText
          text={"수학은 연계성이 강한 과목"}
          text2={
            "수학은 이전 학년에서 배운 내용을 기초 삼아서 다음 단계로 넘어가요. 이때 기초 학습을 완벽하게 이해하지 못했다면, 다음 단계로 올라가기 힘들죠."
          }
        />
        <h2 className="menuTitleText">독:수리를 이용해주시는 회원</h2>
      </article>
      <TabletModel />
    </section>
  );
};

export { IntroSection };
