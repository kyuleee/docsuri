import TabletModel from "../../../components/tabletModel/TabletModel";
import "./IntroSection.css";

const IntroSection = ({ introOn, introText }) => {
  return (
    <section
      className="IntroSection"
    >
      <div className="introSpace">
        <h2
          className="TitleText"
          style={introText ? { opacity: 0 } : { opacity: 1 }}
        >
          초등학교 고학년을 위한 <br />
          온라인 문제 풀이 사이트
        </h2>
        <article
          className="phase2"
          style={introText ? { opacity: 1 } : { opacity: 0 }}
        >
          <h2 className="secondTitleText stt1">
            수학은 연계성이 <br />
            강한 과목
          </h2>
          <h3 className="titleComent">
            수학은 이전 학년에서 배운 내용을 기초 삼아서 다음 단계로 넘어가요.
            <br />
            이때 기초 학습을 완벽하게 이해하지 못했다면, 다음 단계로 올라가기
            힘들죠.
          </h3>
          <h2 className="secondTitleText stt2">독:수리를 이용해주시는 회원</h2>
        </article>
        <TabletModel />
      </div>
    </section>
  );
};

export { IntroSection };
