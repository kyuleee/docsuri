import "./ContentBox.css";

const ContentBox = ({ text }) => {
  return (
    <div className="ContentWrap">
      <div className="contentBox"></div>
      <h4 className="ContentTitleText">{text}</h4>
    </div>
  );
};

export default ContentBox;
