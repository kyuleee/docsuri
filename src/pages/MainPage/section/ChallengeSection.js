import ChallengeBox from "../../../components/contentBox/ChallengeBox";
import MenuTitleText from "../../../components/text/MenuTitleText";
import "./ChallengeSection.css";
const ChallengeSection = ({ ChallengeSectionRef }) => {
  return (
    <section className="ChallengeSection" ref={ChallengeSectionRef}>
      <div className="ChallengeSpace">
        <div>
          <MenuTitleText
            text={"챌린지"}
            text2={"CHALLENGE"}
            text3={"챌린지로 실전처럼 준비하고,"}
            text4={"수학 열공 챌린지로 공부 습관 들이고 스탬프 받자!"}
          />
        </div>
        <ChallengeBox text={"규칙찾기 수학 챌린지"} />
        <ChallengeBox text={"수학 블랙 챌린지"} />
        <ChallengeBox text={"고학년 심화 과정 챌린지"} />
      </div>
    </section>
  );
};

export { ChallengeSection };
