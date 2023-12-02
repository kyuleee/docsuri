import "./NoticeSection.css";
import NoticeBar from "../../../components/contentBox/NoticeBar";
import noticeData from "../../community/notification/NtfData.json";
import { useEffect, useState } from "react";
import { useInterval } from "../../../components/hooks/useInterval";

const NoticeSection = () => {
  const [slide, setSlide] = useState(0);
  const [slide2, setSlide2] = useState(87.5);
  const [slideLogic, setSlideLogic] = useState(true);
  useEffect(() => {
    if (slide <= -50) {
      setSlideLogic(false);
    }
    if (slide === -100) {
      setSlide(75);
    }
  }, [slide]);
  useInterval(() => {
    setSlide((prev) => prev - 100 / 8);
  }, 2500);

  useEffect(() => {
    if (slide2 <= -50) {
      setSlideLogic(true);
    }
    if (slide2 === -100) {
      setSlide2(87.5);
    }
  }, [slide2]);
  useInterval(() => {
    setSlide2((prev) => prev - 100 / 8);
  }, 2500);
  return (
    <section className="NoticeSection">
      <div
        className="barWrap"
        style={
          slideLogic
            ? { transform: `translateY(${slide}%)`, zIndex: "3" }
            : { transform: `translateY(${slide}%)`, zIndex: "1" }
        }
      >
        {noticeData.map((data) => (
          <NoticeBar key={data.id} title={data.title} text={data.tag2}/>
        ))}
      </div>
      <div
        className="cloneBar"
        style={
          slideLogic
            ? { transform: `translateY(${slide2}%)`, zIndex: "1" }
            : { transform: `translateY(${slide2}%)`, zIndex: "3" }
        }
      >
        {noticeData.map((data) => (
          <NoticeBar key={data.id} title={data.title} text={data.tag2}/>
        ))}
      </div>
    </section>
  );
};

export { NoticeSection };
