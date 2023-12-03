import "./ContentBox.css";
import { Circle, Triangles, Square, Lines, Solid } from "./contentItem";

const ContentBox = ({ text, item }) => {
  return (
    <div className="ContentWrap">
      <div className="contentBox">
        {item === "circle" ? (
          <Circle />
        ) : item === "triangle" ? (
          <Triangles />
        ) : item === "square" ? (
          <Square />
        ) : item === "line" ? (
          <Lines />
        ) : (
          <Solid />
        )}
      </div>
      <h4 className="ContentTitleText">{text}</h4>
    </div>
  );
};

export default ContentBox;
