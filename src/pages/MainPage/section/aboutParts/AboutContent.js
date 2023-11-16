import ContentTitleText from "../../../../components/TitleText/ContentTitleText";
import ContentBox from "../../../../components/contentBox/ContentBox";
import "./AboutContent.css";

const AboutContent = () => {
  return (
    <div className="ContentWrap">
      <ContentBox />
      <ContentTitleText text={"세글자"} />
    </div>
  );
};

export default AboutContent;
