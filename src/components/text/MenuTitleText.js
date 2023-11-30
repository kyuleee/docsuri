import "./MenuTitleText.css";

const MenuTitleText = ({ text, text2, text3, text4 }) => {
  return (
    <>
      <h3 className="subTitleText">{text2}</h3>
      <h2 className="menuTitleText">{text}</h2>
      <div className="subComentWrap">
        <h3 className="subComent">{text3}</h3>
        {text4 === null ? null : <h3 className="subComent">{text4}</h3>}
      </div>
    </>
  );
};

export default MenuTitleText;
