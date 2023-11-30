import "./BoxTitleText.css";
const BoxTitleText = ({ text, text2 }) => {
  return (
    <>
      <h3 className="boxSubTitleText">{text2}</h3>
      <h2 className="boxTitleText">{text}</h2>
    </>
  );
};

export default BoxTitleText;
