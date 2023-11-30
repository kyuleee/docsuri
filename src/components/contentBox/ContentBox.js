import "./ContentBox.css";

const ContentBox = ({ text, content }) => {
  return (
    <div className="ContentWrap">
      <div className="contentBox">{content}</div>
      <h4 className="ContentTitleText">{text}</h4>
    </div>
  );
};

export default ContentBox;
