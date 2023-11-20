import "./TagBox.css";
const TagBox = ({ tag }) => {
  return (
    <p style={{ backgroundColor: tag.color }} className="tagText">
      {tag.name}
    </p>
  );
};

export default TagBox;
