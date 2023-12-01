import { useEffect, useState } from "react";
import "./NoticeBar.css";
import { useInterval } from "../hooks/useInterval";
const NoticeBar = ({ title }) => {
  return (
    <div className="noticeBar">
      <span className="tmi">공지사항</span>
      <h3 className="noticeBarTitle">{title}</h3>
      <span>MORE</span>
    </div>
  );
};

export default NoticeBar;
