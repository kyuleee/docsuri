import "./ChallengeBox.css";

const ChallengeBox = ({ text }) => {
  return (
    <div>
      <div className="ChallengeBox"></div>
      <h3 className="challengeText">{text}</h3>
    </div>
  );
};

export default ChallengeBox;
