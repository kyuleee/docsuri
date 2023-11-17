import "./ChallengeSection.css";
import TagBox from "../../../components/tagBox/TagBox";
import MenuTitleText from "../../../components/text/MenuTitleText";
import BoxTitleText from "../../../components/text/BoxTitleText";

const ChallengeSection = () => {
  return (
    <section className="ChallengeSection section1">
      <div className="sectionLayout1">
        <MenuTitleText
          text={"NEW 챌린지"}
          text2={"독수리에서 진행하는 문제풀이 챌린지 도전!"}
        />
        <div className="BoxWrap">
          <div className="ChallengContentWrap">
            <BoxTitleText
              text={"고학년 수학 기초 챌린지"}
              text2={"고학년에 이제 들어간 모두를 위해"}
            />
            <div className="tagWrap">
              <TagBox colorType={"#FF7E9D"} text={"수리"} />
              <TagBox colorType={"#4AB34A"} text={"수학"} />
              <TagBox colorType={"#8CBDED"} text={"도형"} />
              <TagBox colorType={"green"} text={"더하기"} />
              <TagBox colorType={"pink"} text={"곱하기"} />
            </div>
            <div className="tagWrap">
              <TagBox colorType={"#FF7E9D"} text={"수리"} />
              <TagBox colorType={"#4AB34A"} text={"수학"} />
              <TagBox colorType={"#8CBDED"} text={"도형"} />
            </div>
            <div className="imgBox"></div>
          </div>
          <div className="ChallengContentWrap">
            <BoxTitleText
              text={"고학년 수학 기초 챌린지"}
              text2={"고학년에 이제 들어간 모두를 위해"}
            />
            <div className="tagWrap">
              <TagBox colorType={"#FF7E9D"} text={"수리"} />
              <TagBox colorType={"#4AB34A"} text={"수학"} />
              <TagBox colorType={"#8CBDED"} text={"도형"} />
              <TagBox colorType={"green"} text={"더하기"} />
              <TagBox colorType={"pink"} text={"곱하기"} />
            </div>
            <div className="tagWrap">
              <TagBox colorType={"#FF7E9D"} text={"수리"} />
              <TagBox colorType={"#4AB34A"} text={"수학"} />
              <TagBox colorType={"#8CBDED"} text={"도형"} />
            </div>
            <div className="imgBox"></div>
          </div>
          <div className="ChallengContentWrap">
            <BoxTitleText
              text={"고학년 수학 기초 챌린지"}
              text2={"고학년에 이제 들어간 모두를 위해"}
            />
            <div className="tagWrap">
              <TagBox colorType={"#FF7E9D"} text={"수리"} />
              <TagBox colorType={"#4AB34A"} text={"수학"} />
              <TagBox colorType={"#8CBDED"} text={"도형"} />
              <TagBox colorType={"green"} text={"더하기"} />
              <TagBox colorType={"pink"} text={"곱하기"} />
            </div>
            <div className="tagWrap">
              <TagBox colorType={"#FF7E9D"} text={"수리"} />
              <TagBox colorType={"#4AB34A"} text={"수학"} />
              <TagBox colorType={"#8CBDED"} text={"도형"} />
            </div>
            <div className="imgBox"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ChallengeSection };
