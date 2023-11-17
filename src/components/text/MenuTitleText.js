import "./MenuTitleText.css";

const MenuTitleText = ({ text, text2 }) => {
  return (
    <>
      <h2 className="menuTitleText">{text}</h2>
      <h3 className="subTitleText">{text2}</h3>
    </>
  );
};

export default MenuTitleText;
