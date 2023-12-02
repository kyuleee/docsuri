import { Link } from "react-router-dom";
import "./NoticeBar.css";
const NoticeBar = ({ title, text }) => {
  return (
    <div className="noticeBar">
      <span className="info">[{text}]</span>
      <h3 className="noticeBarTitle"> {title}</h3>
      <Link to='/notification'><span className="noticeLink">MORE</span></Link>
    </div>
  );
};

export default NoticeBar;
