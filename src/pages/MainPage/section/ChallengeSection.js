import { Link } from "react-router-dom";
import ChallengeBox from "../../../components/contentBox/ChallengeBox";
import MenuTitleText from "../../../components/text/MenuTitleText";
import "./ChallengeSection.css";
import Arrow from "./datas/svg/Arrow";
import { useState } from "react";
const ChallengeSection = ({ ChallengeSectionRef, challengeON }) => {
  const [resize, setResize] = useState(false);
  function handleArrow() {}
  return (
    <section className="ChallengeSection" ref={ChallengeSectionRef}>
      <div
        className="ChallengeSpace"
        style={challengeON ? { opacity: 1 } : { opacity: 0 }}
      >
        <div className="titleWrap">
          <MenuTitleText
            text={"챌린지"}
            text2={"CHALLENGE"}
            text3={"챌린지로 실전처럼 준비하고,"}
            text4={"수학 열공 챌린지로 공부 습관 들이고 스탬프 받자!"}
          />
          <div
            className="more"
            onMouseEnter={handleArrow}
            onMouseLeave={handleArrow}
          >
            <Link>
              더보기 <Arrow />
            </Link>
          </div>
        </div>
        <ChallengeBox text={"규칙찾기 수학 챌린지"} />
        <ChallengeBox text={"수학 블랙 챌린지"} />
        <ChallengeBox text={"고학년 심화 과정 챌린지"} />
      </div>
    </section>
  );
};

export { ChallengeSection };
