import "./TagBox.css";
const TagBox = ({ text, colorType }) => {
  return (
    <p style={{ backgroundColor: colorType }} className="tagText">
      {text}
    </p>
  );
};

export default TagBox;
