import "./ChallengeBox.css";
import { imgURL } from "./ImgIndex";
const ChallengeBox = ({ text, date, day, personnel, imgCode }) => {
  return (
    <div className="ChallengeBox">
      <div className="challengeContent">
        <img
          className="bookImage"
          src={
            imgCode === 1
              ? imgURL.URL1
              : imgCode === 2
              ? imgURL.URL2
              : imgCode === 3
              ? imgURL.URL3
              : imgCode === 4
              ? imgURL.URL4
              : imgCode === 5
              ? imgURL.URL5
              : null
          }
        />
        <div className="challengeDetail">
          <p>{date}</p>
          <p>{day}</p>
          <p>{personnel}</p>
        </div>
      </div>
      <h3 className="challengeText">{text}</h3>
    </div>
  );
};

export default ChallengeBox;
