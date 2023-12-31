import { Link } from "react-router-dom";
import ChallengeBox from "../../../components/contentBox/ChallengeBox";
import MenuTitleText from "../../../components/text/MenuTitleText";
import "./ChallengeSection.css";
import Arrow from "./datas/svg/Arrow";

const ChallengeSection = ({ ChallengeSectionRef, challengeOn }) => {
  return (
    <section className="ChallengeSection" ref={ChallengeSectionRef}>
      <div
        className="ChallengeSpace"
        style={challengeOn ? { opacity: 1 } : { opacity: 0 }}
      >
        <div className="titleWrap">
          <MenuTitleText
            text={"챌린지"}
            text2={"CHALLENGE"}
            text3={"챌린지로 실전처럼 준비하고,"}
            text4={"수학 열공 챌린지로 공부 습관 들이고 스탬프 받자!"}
          />
          <div className="more">
            <div className="moreBtn"></div>
            <Link to="/Challenge">
              <span className="moreText">더보기</span> <Arrow />
            </Link>
          </div>
        </div>
        <div className="chWrap">
          <ChallengeBox
            text={"규칙찾기 수학 챌린지"}
            date={"2023.12.01~2023.12.31"}
            day={"어워즈 2024.01.01"}
            personnel={"참여인원 840명"}
            imgCode={5}
          />
          <ChallengeBox
            text={"수학 블랙 챌린지"}
            date={"2023.12.01~2023.12.31"}
            day={"어워즈 2024.01.01"}
            personnel={"참여인원 1184명"}
            imgCode={1}
          />
          <ChallengeBox
            text={"고학년 심화 과정 챌린지"}
            date={"2023.12.01~2023.12.31"}
            day={"어워즈 2024.01.01"}
            personnel={"참여인원 1301명"}
            imgCode={2}
          />
                </div>
        </div>
    </section>
  );
};

export { ChallengeSection };
