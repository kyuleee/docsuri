import "./ChallengeSection.css";
import TagBox from "../../../components/tagBox/TagBox";
import MenuTitleText from "../../../components/text/MenuTitleText";
import BoxTitleText from "../../../components/text/BoxTitleText";
import tag from "./datas/tagIndex.json";

const ChallengeSection = () => {
  
  const {
    basic,
    deepen,
    add,
    sub,
    mul,
    divi,
    big,
    frac,
    dec,
    rule,
    angle,
    rect,
    poly,
    cyli,
    cone,
    prop,
    ratio,
  } = { ...tag };


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
              <TagBox tag={basic} />
              <TagBox tag={big} />
              <TagBox tag={add} />
              <TagBox tag={sub} />
              <TagBox tag={mul} />
              <TagBox tag={divi} />
              <TagBox tag={rule} />
            </div>
            <div className="imgBox"></div>
          </div>
          <div className="ChallengContentWrap">
            <BoxTitleText
              text={"고학년 수학 기초 챌린지"}
              text2={"고학년에 이제 들어간 모두를 위해"}
            />
            <div className="tagWrap">
              <TagBox tag={basic} />
              <TagBox tag={big} />
              <TagBox tag={add} />
              <TagBox tag={sub} />
              <TagBox tag={mul} />
              <TagBox tag={divi} />
              <TagBox tag={rule} />
              <TagBox tag={frac} />
              <TagBox tag={dec} />
            </div>
            <div className="imgBox"></div>
          </div>
          <div className="ChallengContentWrap">
            <BoxTitleText
              text={"고학년 수학 기초 챌린지"}
              text2={"고학년에 이제 들어간 모두를 위해"}
            />
            <div className="tagWrap">
              <TagBox tag={deepen} />
              <TagBox tag={angle}/>
              <TagBox tag={rect}/>
              <TagBox tag={poly}/>
              <TagBox tag={ratio}/>
              <TagBox tag={prop}/>
              <TagBox tag={cyli}/>
              <TagBox tag={cone}/>
            </div>
            <div className="imgBox"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ChallengeSection };
