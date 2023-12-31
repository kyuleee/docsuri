import "./NoticeSection.css";
import NoticeBar from "../../../components/contentBox/NoticeBar";
import noticeData from "../../community/notification/NtfData.json";
import { useEffect, useState } from "react";
import { useInterval } from "../../../components/hooks/useInterval";

const NoticeSection = () => {
  const [slide, setSlide] = useState(0);
  const [slide2, setSlide2] = useState(0);
  const [zIndexLogic,setZIndexLogin]= useState(true);
  const [slideLogic, setSlideLogic] = useState(true);
  useEffect(() => {
    if (slide <= -112.5) {
      setZIndexLogin(false);
    }
    if (slide === -125) {
      setSlide(0);
      setSlideLogic(false);

    }
  }, [slide]);
 
  useInterval(() => {
    if(slideLogic){
      setSlide((prev) => prev - 100 / 8);
    }
  }, 1500);

  useEffect(() => {
    if (slide2 <= -112.5) {
      setZIndexLogin(true);
    }
    if (slide2 === -125) {
      setSlide2(0);
      setSlideLogic(true);
    }
  }, [slide2]);

  useInterval(() => {
    if(!slideLogic){
      setSlide2((prev) => prev - 100 / 8);
    }
  }, 1500);
  return (
    <section className="NoticeSection">
      <div
        className="barWrap"
        style={
          zIndexLogic
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
          zIndexLogic
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
